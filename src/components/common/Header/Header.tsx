import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Menu, X } from 'lucide-react';
import './Header.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((returnFocus = true) => {
    setIsMobileMenuOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // While the drawer is open: lock background scroll, move focus into it,
  // close on Escape, and keep Tab / Shift+Tab inside it.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.body.style.overflow = 'hidden';
    const drawer = drawerRef.current;
    const focusables = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== 'Tab') return;
      // The toggle stays reachable so the menu can be closed from the keyboard.
      const items = [toggleRef.current, ...focusables()].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, closeMenu]);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container header-container">
        <Link
          to="/"
          className="brand-link"
          aria-label="Silvano Solutions home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            src="/brand/Silvano_Solutions_Primary_Horizontal_Logo.svg"
            alt=""
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Button to="/contact" variant="primary" size="sm" className="header-cta">
            Start a conversation
          </Button>

          <button
            ref={toggleRef}
            type="button"
            className="mobile-toggle"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => closeMenu()}>
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            className="mobile-nav-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Mobile">
              <ul className="mobile-nav-list">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={() => closeMenu(false)}
                      className={({ isActive }) =>
                        `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-drawer-footer" onClick={() => closeMenu(false)}>
              <Button to="/contact" variant="primary" size="md" className="mobile-cta-btn">
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
