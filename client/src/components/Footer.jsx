import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedin },
  { label: 'Twitter', href: 'https://x.com', icon: FaTwitter },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
];

const quickLinks = [
  { label: 'About', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blogs' },
  { label: 'Contact', to: '/contact-us' },
];

const solutionLinks = [
  { label: 'Automation Design', to: '/services' },
  { label: 'Predictive Insights', to: '/services' },
  { label: 'Employee Enablement', to: '/services' },
  { label: 'Change Acceleration', to: '/services' },
];

const contactDetails = [
  {
    label: 'hello@ai-solutions.com',
    href: 'mailto:hello@ai-solutions.com',
    icon: FiMail,
  },
  {
    label: '+1 (800) 555-0136',
    href: 'tel:+18005550136',
    icon: FiPhone,
  },
  {
    label: '120 Market Street, Suite 42, San Francisco, CA',
    href: 'https://maps.google.com?q=120+Market+Street+San+Francisco+CA',
    icon: FiMapPin,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-200">
      <div className="absolute inset-x-0 -top-10 flex justify-center">
        <div className="h-20 w-[calc(100%-3rem)] max-w-6xl rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-semibold text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/40">
                AI
              </span>
              <span className="tracking-tight">Solutions</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              We craft human-centered AI experiences that transform the modern workplace, from automation playbooks to data-firs
t cultures that inspire every team member.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => {
                const IconComponent = icon;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/80 hover:bg-emerald-500/20 hover:text-white"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.9)]">
              <p className="font-medium text-white">Ready to accelerate with AI?</p>
              <p className="mt-2 text-sm text-slate-400">
                Let’s design a roadmap tailored to your workflows and unlock measurable ROI in weeks.
              </p>
              <Link
                to="/contact-us"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
              >
                Book a consultation
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Company</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {quickLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Solutions</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {solutionLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Contact</h3>
            <ul className="space-y-4 text-slate-400">
              {contactDetails.map(({ label, href, icon }) => {
                const IconComponent = icon;
                return (
                  <li key={label} className="flex items-start gap-3">
                    <IconComponent className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-300" />
                    <a href={href} className="flex-1 transition hover:text-white">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Stay in the loop</p>
              <p className="mt-2 text-xs text-slate-400">
                Monthly insights on automation strategy, emerging tooling and culture change.
              </p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Subscribe
                  <FiArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} AI-Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link to="/contact-us" className="transition hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
