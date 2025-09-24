import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCpu,
  FiBarChart2,
  FiLayers,
  FiMessageCircle,
  FiStar,
  FiCalendar,
} from 'react-icons/fi';
import { LuQuote } from 'react-icons/lu';

const stats = [
  { value: '120+', label: 'AI initiatives launched' },
  { value: '62%', label: 'Average efficiency increase' },
  { value: '35', label: 'Experts across data, design & change' },
];

const services = [
  {
    title: 'Intelligent Automation Blueprints',
    description:
      'Identify high-impact workflows and deploy orchestrated AI agents that scale with your operations.',
    icon: FiCpu,
    accent: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    title: 'Predictive Analytics & Reporting',
    description:
      'Connect your data ecosystem to generate real-time forecasting, insight dashboards and KPIs everyone trusts.',
    icon: FiBarChart2,
    accent: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    title: 'Human-Centered AI Enablement',
    description:
      'Design change programs, governance, and training that empower teams to work confidently with AI.',
    icon: FiLayers,
    accent: 'bg-violet-500/10 text-violet-500',
  },
];

const testimonials = [
  {
    quote:
      'AI-Solutions reinvented our workflow with orchestrated automations and human-centered change enablement. Our teams adopted the new platform in record time.',
    name: 'Amelia Carter',
    role: 'Director of Operations, WorkHub',
  },
  {
    quote:
      'The team translated complex data problems into clear experiences and measurable wins. We finally have predictive dashboards our leaders trust.',
    name: 'Liam Bennett',
    role: 'VP Finance, Luminate Capital',
  },
  {
    quote:
      'From discovery to enablement, they partnered with us end-to-end. AI-Solutions is the reason automation is now a core capability at our company.',
    name: 'Priya Desai',
    role: 'Chief Innovation Officer, Northstar',
  },
];

const blogPosts = [
  {
    title: 'The Future of AI in Business Operations',
    description: 'How to build a sustainable automation roadmap that scales with your teams.',
    date: 'February 3, 2025',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '4 Trends in Responsible AI Design',
    description: 'Principles for creating transparent AI experiences that employees embrace.',
    date: 'January 18, 2025',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Launching AI Co-Pilots in 90 Days',
    description: 'A proven playbook for piloting intelligent automation without disrupting workflows.',
    date: 'December 12, 2024',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
];

const experienceGallery = [
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    alt: 'Strategy sprint in our NYC studio',
    caption: 'Strategy labs',
  },
  {
    src: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=800&q=80',
    alt: 'Keynote at an AI leadership summit',
    caption: 'Summit keynotes',
  },
  {
    src: 'https://images.unsplash.com/photo-1587614295999-6c0c1c7d49fe?auto=format&fit=crop&w=800&q=80',
    alt: 'Innovation lab breakout teams',
    caption: 'Innovation breakouts',
  },
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    alt: 'Engineering leaders collaborating in an office',
    caption: 'Engineering pods',
  },
  {
    src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=80',
    alt: 'Fireside chat with AI strategists',
    caption: 'Fireside chats',
  },
];

const upcomingEvents = [
  {
    title: 'AI Summit 2025 — Designing the Augmented Workplace',
    date: 'April 18, 2025',
    location: 'New York, USA',
    description:
      'Join our leadership team for hands-on sessions about orchestrating AI agents across enterprise workflows.',
    image: 'https://images.unsplash.com/photo-1518600506271-1e25b68c67c6?auto=format&fit=crop&w=1200&q=80',
    ctaLabel: 'Reserve your seat',
    ctaLink: '/contact-us',
  },
  {
    title: 'Automation Playbooks Live Workshop',
    date: 'May 9, 2025',
    location: 'Virtual Event',
    description: 'A half-day immersion on identifying use cases, change management, and measuring ROI.',
  },
  {
    title: 'Data Storytelling Roundtable',
    date: 'June 4, 2025',
    location: 'London, UK',
    description: 'Leaders share how they converted analytics into intuitive narratives with AI-assisted design.',
  },
  {
    title: 'Future of Work Breakfast Series',
    date: 'July 16, 2025',
    location: 'Sydney, Australia',
    description: 'Explore the cultural foundations that help employees adopt AI companions with confidence.',
  },
];

const pastEvents = [
  {
    title: 'Future of Work Showcase 2024',
    date: 'November 22, 2024',
    location: 'San Francisco, USA',
    description:
      'We prototyped human-centred automation playbooks with 15 enterprise partners across two days of labs.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
    metrics: '320+ attendees',
    ctaLabel: 'View the recap',
    ctaLink: '/blogs',
  },
  {
    title: 'Automation Futures Expo',
    date: 'September 8, 2024',
    location: 'Berlin, Germany',
    description: 'Showcased cross-functional automation programs alongside our ecosystem partners.',
  },
  {
    title: 'Intelligent Ops Bootcamp',
    date: 'July 19, 2024',
    location: 'Singapore',
    description: 'Upskilled 60 operations leaders with live build sessions and transformation playbooks.',
  },
];

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const target = document.querySelector(location.hash);
    if (target) {
      const offset = 96;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location.hash]);

  const handleSmoothScroll = (event, hash) => {
    event.preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      const offset = 96;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const upcomingHighlight = upcomingEvents[0];
  const upcomingRemaining = upcomingEvents.slice(1);
  const pastHighlight = pastEvents[0];
  const pastRemaining = pastEvents.slice(1);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-24 sm:px-6 lg:px-8">
      <section
        id="hero"
        className="grid items-center gap-12 rounded-[3rem] border border-white/70 bg-white/90 p-10 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.55)] sm:p-12 md:grid-cols-[1.05fr_1fr]"
      >
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI for the Modern Workplace
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            AI-powered solutions designed to elevate every team
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We blend strategy, design, and engineering to create intelligent workflows that put people first. Discover how our
            experts launch automation programmes with measurable ROI in weeks, not months.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_60px_-30px_rgba(15,23,42,0.8)] transition hover:bg-slate-800"
            >
              Start a project
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#services"
              onClick={(event) => handleSmoothScroll(event, '#services')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              Explore services
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm shadow-emerald-500/5"
              >
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-900 text-white shadow-[0_30px_120px_-70px_rgba(15,23,42,0.9)]">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaborating on AI strategy"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-slate-900/80 to-slate-900/20" />
          <div className="relative flex flex-1 flex-col justify-between p-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Featured success</p>
              <h3 className="text-2xl font-semibold leading-snug">Workplace automation for a global enterprise</h3>
              <p className="text-sm text-white/80">
                Orchestrated AI co-pilots across finance, HR, and operations to eliminate repetitive work and unlock innovation.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/80 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <FiMessageCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-white">62% faster project delivery</p>
                <p className="text-xs text-white/70">Global teams adopted automation playbooks in under 10 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Our Services</span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">AI capabilities crafted for measurable outcomes</h2>
            <p className="max-w-2xl text-base text-slate-600">
              From discovery to change enablement, our multi-disciplinary teams launch AI programmes that keep people at the
              centre of every decision.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
          >
            View all services
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ title, description, icon, accent }) => {
            const IconComponent = icon;
            return (
              <article
                key={title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="space-y-5">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
                    <IconComponent className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 opacity-0 transition group-hover:opacity-100">
                  Learn more
                  <FiArrowUpRight className="h-4 w-4" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="feedback" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Customer Feedback</span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Teams love working with AI-Solutions</h2>
            <p className="max-w-2xl text-base text-slate-600">
              Hear how leaders transformed their operations, empowered employees, and generated new value with our partnership.
            </p>
          </div>
          <Link
            to="/feedback"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
          >
            Share your story
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <blockquote
              key={name}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <LuQuote className="h-8 w-8 text-emerald-400" />
                <p className="mt-4 text-base leading-relaxed text-slate-600">“{quote}”</p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-600">
                  {getInitials(name)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{name}</p>
                  <p className="text-sm text-slate-500">{role}</p>
                  <div className="mt-2 flex items-center gap-1 text-emerald-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FiStar key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="blog" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Blog</span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Insights from our strategy and design teams</h2>
            <p className="max-w-2xl text-base text-slate-600">
              Dive deeper into the frameworks and case studies guiding AI adoption across industries.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
          >
            View all articles
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map(({ title, description, date, image }) => (
            <article
              key={title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">{date}</span>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                <Link
                  to="/blogs"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
                >
                  Keep reading
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section id="experiences" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Experiences</span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Moments from our community and event series</h2>
            <p className="max-w-2xl text-base text-slate-600">
              Explore the energy of our studios, summits, and workshops while keeping an eye on where we are headed next.
            </p>
          </div>
          <Link
            to="/gallery-events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
          >
            Browse the full calendar
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingHighlight && (
                <article className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-slate-900 text-white shadow-[0_35px_90px_-45px_rgba(16,185,129,0.65)]">
                  {upcomingHighlight.image && (
                    <img
                      src={upcomingHighlight.image}
                      alt={upcomingHighlight.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-70"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/70 via-slate-900/80 to-slate-900/40" />
                  <div className="relative flex h-full flex-col justify-between p-8">
                    <div className="space-y-4">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                        Upcoming highlight
                      </span>
                      <h3 className="text-2xl font-semibold leading-snug">{upcomingHighlight.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-emerald-100">
                        <FiCalendar className="h-4 w-4" />
                        <span>{upcomingHighlight.date}</span>
                        <span className="h-1 w-1 rounded-full bg-emerald-200/80" />
                        <span>{upcomingHighlight.location}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-emerald-50/90">{upcomingHighlight.description}</p>
                    </div>
                    {upcomingHighlight.ctaLink && upcomingHighlight.ctaLabel && (
                      <Link
                        to={upcomingHighlight.ctaLink}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
                      >
                        {upcomingHighlight.ctaLabel}
                        <FiArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </article>
              )}

              {pastHighlight && (
                <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  {pastHighlight.image && (
                    <img
                      src={pastHighlight.image}
                      alt={pastHighlight.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-60"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-white/20 to-white" />
                  <div className="relative flex h-full flex-col justify-between p-8">
                    <div className="space-y-4">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                        Past spotlight
                      </span>
                      <h3 className="text-2xl font-semibold text-slate-900">{pastHighlight.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
                        <FiCalendar className="h-4 w-4" />
                        <span>{pastHighlight.date}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{pastHighlight.location}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{pastHighlight.description}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                      {pastHighlight.metrics && <span className="font-semibold text-emerald-600">{pastHighlight.metrics}</span>}
                      {pastHighlight.ctaLink && pastHighlight.ctaLabel && (
                        <Link
                          to={pastHighlight.ctaLink}
                          className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-500"
                        >
                          {pastHighlight.ctaLabel}
                          <FiArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              )}
            </div>

            {upcomingRemaining.length > 0 && (
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Upcoming gatherings</h3>
                  <p className="text-sm text-slate-500 sm:max-w-xs">
                    Reserve a spot to co-create automation roadmaps with our strategists.
                  </p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {upcomingRemaining.map((event) => (
                    <article
                      key={event.title}
                      className="flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                        <FiCalendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">{event.title}</h4>
                        <p className="mt-1 text-sm text-slate-500">{event.location}</p>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{event.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {pastRemaining.length > 0 && (
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">Recent highlights</h3>
                <div className="mt-6 space-y-4">
                  {pastRemaining.map((event, index) => (
                    <div key={event.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-emerald-200 bg-emerald-100" />
                        {index < pastRemaining.length - 1 && <span className="mt-1 h-full w-px bg-slate-200" />}
                      </div>
                      <div className="flex-1 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
                          <span>{event.date}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span>{event.location}</span>
                        </div>
                        <h4 className="mt-2 text-lg font-semibold text-slate-900">{event.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Moments from our community</h3>
              <p className="mt-2 text-sm text-slate-600">
                A glimpse into the workshops, keynotes, and celebrations that keep our teams inspired.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {experienceGallery.map(({ src, alt, caption }) => (
                <figure
                  key={alt}
                  className="group relative min-h-[180px] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-sm"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
