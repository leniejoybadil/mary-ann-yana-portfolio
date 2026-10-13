
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createPortal } from 'react-dom'
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  HeartHandshake,
  GraduationCap,
  UsersRound,
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import './styles.css'

const profile = {
  name: 'Mary Ann C. Yana',
  role: 'Sangguniang Kabataan Chairperson | Licensed Professional Teacher',
  email: 'yanaann65@gmail.com',
  phone: '09501560415',
  location: 'Brgy. Lampianao, Calinan District, Davao City, Philippines',
  bio: 'I am a graduate of Bachelor of Secondary Education, major in English, from the University of Mindanao (2023–2024), and a Licensed Professional Teacher (LPT) since March 2025. Through my experience in education, youth leadership, and public service, I strive to empower young people and contribute to meaningful community development.'
}

const experience = [
  {
    title: 'Sangguniang Kabataan (SK) Chairperson',
    place: 'Brgy. Lampianao, Calinan District, Davao City',
    period: 'Current Term',
    text: 'As an SK Chairperson, I represent the youth in our Barangay Council, support youth-focused policies and planning, and lead initiatives focused on education, sports, health, and environmental sustainability.'
  },
  {
    title: 'Task Force Youth Development (TFYD) President',
    place: 'Brgy. Lampianao, Calinan District, Davao City',
    period: '2015–2016',
    text: 'I led local youth development efforts and supported community organizing, action planning, public budgeting, and youth policy advocacy.'
  },
  {
    title: 'Pangulo sa Batan-on (PSB) / Youth President',
    place: 'Local Parish / GKK Church Religious Organization',
    period: '2014–2024',
    text: 'I helped lead spiritual, moral, and values-formation activities for parish and community youth. I also supported event coordination and encouraged young people to participate in community activities.'
  }
]

const projects = [
  {
    title: 'Balik Eskwela Program',
    place: 'Lampianao Elementary School',
    text: 'I helped mobilize community support for students returning to school by helping provide learning materials, school supplies, and hygiene kits. I also worked with school personnel and volunteers to prepare classrooms and support school safety checks.',
    tag: 'Education & Community'
  },
  {
    title: 'Preschool Tutoring Program',
    place: 'Lampianao Daycare Center',
    text: 'I supported early childhood learning through reading, writing, and phonics activities designed to help preschoolers strengthen their foundational literacy skills and prepare for primary education.',
    tag: 'Teaching & Literacy'
  }
]

const nav = [
  ['Home', '/'],
  ['About Me', '/about'],
  ['Experience', '/experience'],
  ['Certificates', '/certificates'],
  ['SK Duties', '/sk-duties'],
  ['Contact', '/contact']
]

function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img
            src="/ME2.jpg"
            alt="Mary Ann Yana"
            className="brand-photo"
          />
          <span>
            Mary Ann <b>Yana</b>
            <small>PORTFOLIO</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Menu size={21} />
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="footer-name">{profile.name}</span>
        <p>Education · Leadership · Community Service</p>
      </div>

      <a href={`mailto:${profile.email}`}>
        {profile.email} <ArrowUpRight size={15} />
      </a>

      <small>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </small>
    </footer>
  )
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

/* IMAGE POPUP */
function ImagePopup({ src, alt, className }) {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    if (!show) return

    const previousOverflow = document.body.style.overflow

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setShow(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [show])

  return (
    <>
      <button
        type="button"
        className="image-popup-trigger"
        onClick={() => setShow(true)}
        aria-label={`View larger image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
        />
      </button>

      {show &&
        createPortal(
          <div
            className="image-popup-overlay"
            onClick={() => setShow(false)}
            role="presentation"
          >
            <button
              type="button"
              className="image-popup-close"
              onClick={() => setShow(false)}
              aria-label="Close enlarged image"
            >
              &times;
            </button>

            <img
              src={src}
              alt={alt}
              className="image-popup-full"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  )
}

/* HOME PAGE */
function Home() {
  return (
    <>
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              EDUCATION · LEADERSHIP · SERVICE
            </span>

            <h1>
              Leading with <em>purpose.</em>
              <br />
              Teaching with <em>heart.</em>
            </h1>

            <p className="hero-description">{profile.bio}</p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/about">
                Get to know me <ArrowUpRight size={17} />
              </Link>

              <Link className="btn btn-secondary" to="/contact">
                Contact me
              </Link>
            </div>

            <div className="hero-facts">
              <div>
                <GraduationCap />
                <span>
                  <b>BSEd English</b>
                  <small>University of Mindanao</small>
                </span>
              </div>

              <div>
                <HeartHandshake />
                <span>
                  <b>Public service</b>
                  <small>Youth & community</small>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <ImagePopup
                src="/ME2.jpg"
                alt="Mary Ann C. Yana"
                className="portrait-image"
              />
            </div>

            <div className="floating-note">
              <span className="note-icon">
                <Award size={19} />
              </span>
              <span>
                <b>Purpose-driven leadership</b>
                <small>Making a difference in my community</small>
              </span>
            </div>

            <div className="decor-circle circle-one" />
            <div className="decor-circle circle-two" />
          </div>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner">
            <span>MY FOCUS</span>
            <p>
              I believe in empowering young people through education,
              thoughtful leadership, and community action.
            </p>
            <Link to="/experience">
              Explore my work <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section className="section container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A LITTLE ABOUT ME</span>
              <h2>
                Where education meets <em>community.</em>
              </h2>
            </div>

            <Link className="text-link" to="/about">
              My story <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-icon">
                <BookOpen />
              </span>
              <span className="card-kicker">01 / EDUCATION</span>
              <h3>Teaching & literacy</h3>
              <p>
                I value learning and enjoy supporting literacy through
                instructional communication, lesson planning, and
                educational initiatives.
              </p>
            </article>

            <article className="feature-card feature-highlight">
              <span className="feature-icon">
                <UsersRound />
              </span>
              <span className="card-kicker">02 / LEADERSHIP</span>
              <h3>Youth empowerment</h3>
              <p>
                I work with young people and community partners to
                encourage participation and help develop inclusive,
                meaningful programs.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">
                <HeartHandshake />
              </span>
              <span className="card-kicker">03 / SERVICE</span>
              <h3>Community initiatives</h3>
              <p>
                I support educational and youth development projects
                that respond to community needs and create opportunities
                for others.
              </p>
            </article>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <blockquote>
            I believe meaningful leadership begins with listening,
            learning, and showing up for the community.
          </blockquote>
          <span>MY APPROACH TO SERVICE</span>
        </section>

        <section className="section container cta-section">
          <div>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>
              Let's create a positive <em>impact.</em>
            </h2>
            <p>
              I welcome opportunities to connect through education,
              community initiatives, and meaningful collaborations.
            </p>
          </div>

          <Link className="btn btn-primary" to="/contact">
            Contact me <ArrowUpRight size={17} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* ABOUT ME PAGE */
function About() {
  const skills = [
    [
      'Leadership & Governance',
      'Youth advocacy, public administration, session facilitation, and action planning'
    ],
    [
      'Education & Instruction',
      'Lesson planning, literacy support, classroom management, and instructional communication'
    ],
    [
      'Community Engagement',
      'Volunteer coordination, grassroots organizing, and community programs'
    ],
    [
      'Communication',
      'Public speaking, seminar facilitation, and clear presentation of ideas'
    ]
  ]

  return (
    <>
      <main className="container inner-page">
        <PageIntro
          eyebrow="GET TO KNOW ME"
          title={<>A little about <em>me.</em></>}
          description="I am an educator and community leader committed to youth development, learning, and public service."
        />

        <section className="about-layout">
          <div className="about-photo">
            <ImagePopup
              src="/LPT.jpg"
              alt="Mary Ann C. Yana, Licensed Professional Teacher"
              className="portrait-image"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">MY STORY</span>
            <h2>
              Grounded in learning.
              <br />
              <em>Driven by service.</em>
            </h2>

            <p>{profile.bio}</p>

            <p>
              My experiences in youth governance, community mobilization,
              values-based leadership, and literacy support have helped
              me develop my communication, planning, and collaboration
              skills. I aim to use these experiences to support young
              people, families, and the wider community.
            </p>

            <div className="detail-list">
              <div>
                <span>Professional License</span>
                <b>Licensed Professional Teacher (LPT)</b>
                <small>March 2025</small>
              </div>

              <div>
                <span>College Education</span>
                <b>Bachelor of Secondary Education, Major in English</b>
                <small>University of Mindanao | 2023–2024</small>
              </div>

              <div>
                <span>Senior High School</span>
                <b>Humanities and Social Sciences (HUMSS)</b>
                <small>Holy Cross College of Calinan | 2018–2019</small>
              </div>

              <div>
                <span>Youth Leadership</span>
                <b>Task Force Youth Development (TFYD) President</b>
                <small>2015–2016</small>
              </div>

              <div>
                <span>Community Leadership</span>
                <b>Pangulo sa Batan-on (PSB) / Youth President</b>
                <small>2014–2024</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <span className="eyebrow">CORE SKILLS</span>
          <h2>
            Skills I bring to the <em>table.</em>
          </h2>

          <div className="skills-grid">
            {skills.map(([title, description]) => (
              <div className="skill-row" key={title}>
                <span className="skill-check">✳</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* EXPERIENCE PAGE */
function Experience() {
  return (
    <>
      <main className="container inner-page">
        <PageIntro
          eyebrow="EXPERIENCE & IMPACT"
          title={<>Leadership in <em>action.</em></>}
          description="Here are some of the leadership roles and community initiatives that have shaped my commitment to youth development, education, and service."
        />

        <section className="section compact-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MY LEADERSHIP EXPERIENCE</span>
              <h2>Roles & responsibilities</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="timeline-content">
                  <span className="card-kicker">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section project-section">
          <span className="eyebrow">SELECTED INITIATIVES</span>
          <h2>
            Projects with a <em>purpose.</em>
          </h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="card-kicker">{project.tag}</span>
                <h3>{project.title}</h3>
                <p className="timeline-place">{project.place}</p>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* CERTIFICATES PAGE — ALL 11 CERTIFICATES */
function Certificates() {
  const trackRef = React.useRef(null)
  const totalCertificates = 11

  function scrollCertificates(direction) {
    if (!trackRef.current) return

    const track = trackRef.current
    const card = track.querySelector('.certificate-card')
    const styles = window.getComputedStyle(track)
    const gap = parseFloat(styles.columnGap) || 22
    const cardWidth = card
      ? card.getBoundingClientRect().width + gap
      : 300

    track.scrollBy({
      left: direction * cardWidth * 2,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <main className="container inner-page">
        <PageIntro
          eyebrow="CERTIFICATES & RECOGNITION"
          title={
            <>
              My learning, growth & <em>achievements.</em>
            </>
          }
          description="This collection highlights my certificates, training, participation, and accomplishments in education, leadership, and community service. Each achievement represents a step in my continued learning and professional growth."
        />

        <section className="certificate-gallery-section">
          <div className="certificate-gallery-heading">
            <div>
              <span className="eyebrow">MY MILESTONES</span>
              <h2>
                Every achievement tells a <em>story.</em>
              </h2>
            </div>

            <div className="certificate-controls">
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => scrollCertificates(-1)}
                aria-label="Scroll certificates left"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                className="carousel-arrow"
                onClick={() => scrollCertificates(1)}
                aria-label="Scroll certificates right"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div className="certificate-track" ref={trackRef}>
            {Array.from(
              { length: totalCertificates },
              (_, index) => {
                const number = index + 1

                return (
                  <article
                    className="certificate-card"
                    key={number}
                  >
                    <ImagePopup
                      src={`/CERT${number}.jpg`}
                      alt={`Certificate ${number}`}
                      className="certificate-image"
                    />

                    <div className="certificate-meta">
                      <span className="certificate-index">
                        {String(number).padStart(2, '0')}
                        <span className="certificate-index-divider">
                          {' / '}
                        </span>
                        {String(totalCertificates).padStart(2, '0')}
                      </span>
                      <p>Certificate of achievement</p>
                    </div>
                  </article>
                )
              }
            )}
          </div>

          <div className="certificate-gallery-footer">
            <span className="gallery-line" />
            <p>Scroll to explore all 11 certificates</p>
            <span className="gallery-line" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* SK DUTIES PAGE */
function SKDuties() {
  const duties = [
    {
      file: 'SK1',
      title: 'Youth Representation & Governance',
      description: 'I represent youth concerns in local governance and support youth-focused planning and policies.'
    },
    {
      file: 'SK2',
      title: 'Education & Student Support',
      description: 'I support community education initiatives, including Balik Eskwela activities, learning supplies, and school readiness support.'
    },
    {
      file: 'SK3',
      title: 'Youth Development & Engagement',
      description: 'I help coordinate youth-focused programs that encourage participation, inclusion, and empowerment.'
    },
    {
      file: 'SK4',
      title: 'Community Service & Collaboration',
      description: 'I work with school personnel, volunteers, and community partners to support initiatives that respond to local needs.'
    }
  ]

  return (
    <>
      <main className="container inner-page">
        <PageIntro
          eyebrow="MY PUBLIC SERVICE"
          title={
            <>
              Serving my community, <em>one initiative at a time.</em>
            </>
          }
          description="My public service is centered on listening to young people, supporting community needs, and helping create opportunities through education, participation, and collaboration."
        />

        <section className="sk-grid">
          {duties.map(({ file, title, description }) => (
            <article className="sk-card" key={file}>
              <ImagePopup
                src={`/${file}.jpg`}
                alt={title}
                className="sk-activity-image"
              />

              <div className="sk-card-copy">
                <span className="card-kicker">
                  MY SK DUTIES & COMMUNITY WORK
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </section>

        <p className="fine-print">
          Please verify that each caption accurately describes the
          activity shown in the corresponding photo.
        </p>
      </main>

      <Footer />
    </>
  )
}

/* CONTACT PAGE */
function Contact() {
  return (
    <>
      <main className="container inner-page">
        <PageIntro
          eyebrow="CONTACT ME"
          title={<>Let's start a <em>conversation.</em></>}
          description="I welcome opportunities to connect about professional work, education initiatives, youth development, and community collaboration. Feel free to reach out for inquiries, partnerships, and meaningful projects."
        />

        <section className="contact-layout">
          <div className="contact-card">
            <span className="feature-icon">
              <Mail />
            </span>
            <span className="card-kicker">EMAIL</span>
            <h3>Let's connect by email.</h3>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              {profile.email} <ExternalLink size={15} />
            </a>
            <p>
              You can email me about professional inquiries,
              collaborations, and community initiatives.
            </p>
          </div>

          <div className="contact-card">
            <span className="feature-icon">
              <BriefcaseBusiness />
            </span>
            <span className="card-kicker">PHONE</span>
            <h3>Reach me directly.</h3>
            <a
              className="contact-link"
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
            >
              {profile.phone} <ExternalLink size={15} />
            </a>
            <p>
              Feel free to contact me by phone when appropriate.
            </p>
          </div>

          <div className="contact-card wide">
            <span className="feature-icon">
              <MapPin />
            </span>
            <span className="card-kicker">LOCATION</span>
            <h3>Davao City, Philippines</h3>
            <p>{profile.location}</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* PAGE NOT FOUND */
function NotFound() {
  return (
    <>
      <main className="container inner-page">
        <PageIntro
          eyebrow="PAGE NOT FOUND"
          title={<>Let's go <em>back home.</em></>}
          description="The page you're looking for doesn't exist. Return to the homepage to explore my portfolio."
        />

        <Link className="btn btn-primary" to="/">
          Return home
        </Link>
      </main>

      <Footer />
    </>
  )
}

/* APP — SIX PAGES */
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/sk-duties" element={<SKDuties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)