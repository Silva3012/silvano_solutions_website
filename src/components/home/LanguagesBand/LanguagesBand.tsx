import React from 'react';
import { Button } from '../../common/Button/Button';
import { ArrowRight } from 'lucide-react';
import './LanguagesBand.css';

/**
 * Focal band for South African-language AI. This is a capability in
 * development (an isiXhosa research project and prototype), not a deployed
 * product — keep the copy and the "In development" status honest.
 */
export const LanguagesBand: React.FC = () => {
  return (
    <section className="languages-band" aria-labelledby="languages-title">
      <div className="container languages-layout">
        <div className="languages-copy">
          <h2 id="languages-title" className="languages-title">
            AI that understands South African languages.
          </h2>
          <p className="languages-body">
            Most AI tools are built for English. We're developing language technology for South
            African languages, starting with isiXhosa: building the language data and text
            processing that AI needs to serve people in the language they speak.
          </p>
        </div>

        <div className="languages-aside">
          <dl className="languages-facts">
            <div className="languages-fact">
              <dt>Status</dt>
              <dd>In development</dd>
            </div>
            <div className="languages-fact">
              <dt>Starting with</dt>
              <dd>isiXhosa</dd>
            </div>
            <div className="languages-fact">
              <dt>Work so far</dt>
              <dd>Language data and text processing</dd>
            </div>
          </dl>

          <div className="languages-pilot">
            <p className="languages-pilot-text">Interested in piloting it?</p>
            <Button
              to="/contact?service=ai-solutions"
              variant="primary"
              size="md"
              className="languages-btn"
            >
              <span>Start a conversation</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
