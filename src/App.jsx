import { useState } from 'react'
import './App.css'

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 11L11 3M11 3H5.5M11 3V8.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCheck({ color = '#22c55e' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill={color} />
      <path
        d="M4.8 8.2L6.9 10.3L11.2 5.8"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMonitor() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function IconForm() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function IconBug() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 8h8v8a4 4 0 0 1-8 0V8Z" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 8V4M8 4l2 4M16 4l-2 4M6 10H3M21 10h-3M6 16H3M21 16h-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 8L5 12l4 4M15 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const services = [
  {
    icon: <IconMonitor />,
    title: 'Website redesign',
    text: 'Old site to modern, responsive — content and SEO kept.',
  },
  {
    icon: <IconForm />,
    title: 'Form makeovers',
    text: 'Clunky forms made clear, validated and mobile-friendly.',
  },
  {
    icon: <IconBug />,
    title: 'Bug fixing',
    text: 'Layout breaks, errors, browser issues — fixed and explained.',
  },
  {
    icon: <IconBolt />,
    title: 'Urgent requirements',
    text: 'Deadline tomorrow? Book a priority slot today.',
    dark: true,
  },
  {
    icon: <IconCode />,
    title: 'React + Angular builds',
    text: 'New pages, components, dashboards and API work.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Share your project',
    text: 'A link, screenshot or a short note.',
  },
  {
    n: '2',
    title: 'Get a clear quote',
    text: 'Fixed price and timeline.',
  },
  {
    n: '3',
    title: 'I build, you follow',
    text: 'Updates and a preview link.',
  },
  {
    n: '4',
    title: 'Launch & support',
    text: 'Clean handover and follow-up.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [subject, setSubject] = useState('Start a project')
  const [sent, setSent] = useState(false)

  function openContact(kind) {
    setSubject(kind)
    setSent(false)
    setContactOpen(true)
    setMenuOpen(false)
  }

  function onSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#home">
          <span className="brand-mark">MS</span>
          <span className="brand-name">MS Madhavi Sagar</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="nav-right">
          <button className="btn btn-lime" type="button" onClick={() => openContact('Start a project')}>
            Start a project <IconArrow />
          </button>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="status">
              <span className="status-dot" />
              Available — replies within 24h
            </p>
            <h1>
              <span className="hero-line">
                Modern interfaces<span className="dash">—</span>
              </span>
              <span className="hero-line">built, redesigned, or fixed.</span>
            </h1>
            <p className="lead">
              React + Angular developer. I modernise old websites and forms, and fix the bugs slowing you down.
            </p>
            <div className="hero-actions">
              <button className="btn btn-lime" type="button" onClick={() => openContact('Start a project')}>
                Start a project <IconArrow />
              </button>
              <button className="btn btn-ghost" type="button" onClick={() => openContact('I need a bug fixed')}>
                I need a bug fixed
              </button>
            </div>
            <ul className="tags">
              <li>React</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Responsive</li>
            </ul>
            <article className="ticket">
              <IconCheck />
              <div>
                <strong>Bug fixed & documented</strong>
                <p>Checkout button not working on Safari.</p>
              </div>
            </article>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="dashboard">
              <aside className="dash-side">
                <div className="dash-brand">
                  <span className="dash-logo">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M4 11.5L12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5Z" fill="#111" />
                    </svg>
                  </span>
                  Lumex
                </div>
                <ul>
                  <li className="is-active">Dashboard</li>
                  <li>Projects</li>
                  <li>Messages</li>
                  <li>Analytics</li>
                  <li>Settings</li>
                </ul>
              </aside>
              <div className="dash-main">
                <div className="dash-top">
                  <div className="dash-search">Search projects...</div>
                  <div className="dash-tools">
                    <span className="bell" />
                    <span className="avatar" />
                  </div>
                </div>
                <div className="dash-body">
                  <div className="form-col">
                    <div className="form-head">
                      <div>
                        <h3>Contact form</h3>
                        <p>Clean, validated and conversion focused.</p>
                      </div>
                      <span className="live">Live preview</span>
                    </div>
                    <label>
                      Name *
                      <input disabled placeholder="Your full name" />
                    </label>
                    <label>
                      Email *
                      <input disabled placeholder="you@example.com" />
                    </label>
                    <label>
                      Message *
                      <textarea disabled placeholder="Tell me about your project..." rows="3" />
                    </label>
                    <button className="btn btn-lime" type="button" tabIndex={-1}>
                      Send message <IconArrow />
                    </button>
                  </div>
                  <div className="perf-col">
                    <h4>Form performance</h4>
                    <ul>
                      <li>
                        <IconCheck />
                        <span>Higher completion rate</span>
                        <b>+62%</b>
                      </li>
                      <li>
                        <IconCheck />
                        <span>Fewer form errors</span>
                        <b>−80%</b>
                      </li>
                      <li>
                        <IconCheck />
                        <span>Mobile friendly</span>
                        <b>100% responsive</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="code-window">
              <div className="code-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>React</span>
                <span>Angular</span>
                <span>TypeScript</span>
              </div>
              <pre>
                <code>
                  <span className="kw">import</span> {'{ useState }'} <span className="kw">from</span>{' '}
                  <span className="str">'react'</span>
                  {'\n'}
                  <span className="kw">export default function</span> ContactForm() {'{'}
                  {'\n'}
                  {'  '}
                  <span className="kw">const</span> [form, setForm] = useState({'{'}
                  {'\n'}
                  {'    '}name: <span className="str">''</span>,
                  {'\n'}
                  {'    '}email: <span className="str">''</span>,
                  {'\n'}
                  {'    '}message: <span className="str">''</span>,
                  {'\n'}
                  {'  }'})
                  {'\n'}
                  {'  '}
                  <span className="kw">return</span> (
                  {'\n'}
                  {'    <'}form className=<span className="str">"space-y-4"</span>{'>'}
                  {'\n'}
                  {'      '}
                  <span className="cm">{'{/* clean, modern form */}'}</span>
                  {'\n'}
                  {'    </'}form{'>'}
                  {'\n'}
                  {'  )'}
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-head">
          <div>
            <p className="eyebrow">01 / Services</p>
            <h2>How I can help</h2>
          </div>
          <a className="text-link" href="#contact">
            View all services <IconArrow />
          </a>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article key={item.title} className={`service-card ${item.dark ? 'is-dark' : ''}`}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="work-grid">
          <div className="work-copy">
            <p className="eyebrow">02 / Before & after</p>
            <h2>Same form, better experience</h2>
            <p className="lead-light">
              Turn a clunky form into a clean, modern, mobile-friendly experience that gets more responses.
            </p>
          </div>
          <article className="old-form">
            <span className="badge">Before</span>
            <label>
              Name*:
              <input disabled />
            </label>
            <label>
              E-mail*:
              <input disabled />
            </label>
            <label>
              Message:
              <input disabled />
            </label>
          </article>
          <span className="compare-arrow" aria-hidden="true">
            →
          </span>
          <article className="new-form">
            <span className="badge is-after">After</span>
            <label>
              Name *
              <input disabled placeholder="Your name" />
            </label>
            <label>
              Email *
              <input disabled placeholder="you@example.com" />
            </label>
            <label>
              Message *
              <input disabled placeholder="How can I help you?" />
            </label>
            <button className="btn btn-lime" type="button" tabIndex={-1}>
              Send message <IconArrow />
            </button>
          </article>
          <ul className="wins">
            <li>
              <IconCheck /> Clean, modern design
            </li>
            <li>
              <IconCheck /> Validated fields
            </li>
            <li>
              <IconCheck /> Mobile-friendly
            </li>
            <li>
              <IconCheck /> Higher completion rate
            </li>
          </ul>
        </div>
      </section>

      <section className="section process" id="process">
        <p className="eyebrow">03 / Process</p>
        <h2>How it works</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span className="step-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta" id="contact">
        <div>
          <h2>Have a project in mind?</h2>
          <p>Let’s make it happen. I usually reply within 24 hours.</p>
        </div>
        <div className="cta-actions">
          <button className="btn btn-lime" type="button" onClick={() => openContact('Start a project')}>
            Start a project <IconArrow />
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => openContact('I need a bug fixed')}>
            I need a bug fixed
          </button>
        </div>
      </section>

      {contactOpen && (
        <div className="modal-backdrop" onClick={() => setContactOpen(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" type="button" onClick={() => setContactOpen(false)} aria-label="Close">
              ×
            </button>
            {sent ? (
              <div className="modal-success">
                <IconCheck />
                <h3>Message ready</h3>
                <p>Thanks — I’ll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <p className="eyebrow">Contact</p>
                <h3 id="contact-title">{subject}</h3>
                <p className="modal-copy">Tell me what you need and I’ll come back with a clear next step.</p>
                <label>
                  Name *
                  <input name="name" required placeholder="Your full name" />
                </label>
                <label>
                  Email *
                  <input name="email" type="email" required placeholder="you@example.com" />
                </label>
                <label>
                  Phone number *
                  <input name="phone" type="tel" required placeholder="+91 98765 43210" />
                </label>
                <label>
                  Message *
                  <textarea name="message" required rows="4" placeholder="A link, screenshot note, or bug details..." />
                </label>
                <button className="btn btn-lime" type="submit">
                  Send message <IconArrow />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
