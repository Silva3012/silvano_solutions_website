import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ContactFormData } from '../../../types';
import { Button } from '../../common/Button/Button';
import { CheckCircle, Send, AlertCircle } from 'lucide-react';
import './ContactForm.css';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: preselectedService,
      }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Submission handler designed for V1:
   * Validates form and simulates/dispatches lead submission.
   * In future versions, simply replace this function body with an API call or service webhook.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Please provide both your name and a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // V1 implementation: clean mock dispatch with safety timeout
      // Readies code for: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch {
      setErrorMessage('Something went wrong submitting your request. Please email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      serviceInterest: '',
      message: '',
    });
    setSubmitted(false);
    setErrorMessage(null);
  };

  if (submitted) {
    return (
      <div className="form-success-card">
        <div className="success-icon-wrap">
          <CheckCircle size={36} className="success-icon" />
        </div>
        <h3 className="success-title">Thank you for reaching out</h3>
        <p className="success-message">
          We have received your message regarding{' '}
          <strong>{formData.company || 'your business'}</strong>. We will review what you are
          looking to build or automate and follow up promptly.
        </p>
        <div className="success-actions">
          <Button variant="outline" size="sm" onClick={handleReset}>
            Send another message
          </Button>
          <a
            href={`mailto:info@silvanosolutions.co.za?subject=Follow-up: ${encodeURIComponent(
              formData.serviceInterest || 'Business Inquiry'
            )}`}
            className="direct-mail-fallback"
          >
            Direct email copy
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {errorMessage && (
        <div className="form-alert form-alert-error">
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Your Name <span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Sipho Ndlovu"
          className="form-input"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Work Email <span className="required-star">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. sipho@company.co.za"
          className="form-input"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company" className="form-label">
          Company / Business Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Ndlovu Enterprises"
          className="form-input"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="serviceInterest" className="form-label">
          What do you need help with?
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className="form-select"
          disabled={isSubmitting}
        >
          <option value="">Select an area of focus...</option>
          <option value="application-development">Application Development</option>
          <option value="ai-solutions">AI Solutions</option>
          <option value="automation-integrations">Automation & Integrations</option>
          <option value="software-engineering">Software Engineering</option>
          <option value="technology-consulting">Technology Consulting</option>
          <option value="other">General discussion / Not sure yet</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          What are you trying to improve, automate, or build? <span className="optional-text">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe the business workflow, problem, or technology initiative..."
          className="form-textarea"
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="form-submit-btn"
      >
        <span>{isSubmitting ? 'Sending inquiry...' : 'Send inquiry'}</span>
        <Send size={16} />
      </Button>

      <p className="form-privacy-note">
        Direct founder review. No spam, no sales pressure.
      </p>
    </form>
  );
};
