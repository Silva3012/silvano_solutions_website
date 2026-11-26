import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ContactFormData } from '../../../types';
import { Button } from '../../common/Button/Button';
import { CheckCircle, Send, AlertCircle } from 'lucide-react';
import { company } from '../../../data/companyData';
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
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the confirmation so keyboard and screen-reader users hear it.
  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

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

    // Say exactly which field needs attention and how to fix it.
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address, like name@company.co.za.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@silvanosolutions.co.za', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New enquiry from ${formData.name}`,
          _captcha: 'true',
        }),
      });

      // FormSubmit returns HTTP 200 even when it rejects a submission (e.g. the
      // address is not yet activated), so the JSON `success` flag must be checked too.
      const result = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;

      if (!response.ok || !result || String(result.success) !== 'true') {
        console.error('FormSubmit rejected the submission:', result?.message ?? response.status);
        throw new Error(result?.message ?? 'Contact form submission failed');
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch {
      setErrorMessage(
        `Your message didn't send. Please try again, or email us at ${company.email}.`
      );
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
        <h3 className="success-title" ref={successHeadingRef} tabIndex={-1}>
          Thanks, your message has been sent
        </h3>
        <p className="success-message">
          {company.principal.name} will review it and reply to{' '}
          <strong className="success-email">{formData.email}</strong>, typically within 24 business hours,
          to arrange your free 30-minute call.
        </p>
        <div className="success-actions">
          <Button variant="outline" size="sm" onClick={handleReset}>
            Send another message
          </Button>
          <a href={`mailto:${company.email}`} className="direct-mail-fallback">
            Need to add something? Email {company.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Always-present live region so screen readers announce new errors. */}
      <div role="alert" aria-live="assertive">
        {errorMessage && (
          <div className="form-alert form-alert-error">
            <AlertCircle size={18} aria-hidden="true" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

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
          Email <span className="required-star">*</span>
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
          <option value="">Choose one (optional)</option>
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
        <span>{isSubmitting ? 'Sending enquiry…' : 'Send enquiry'}</span>
        <Send size={16} />
      </Button>

      <p className="form-privacy-note">
        Direct founder review. No spam, no sales pressure.
      </p>
    </form>
  );
};
