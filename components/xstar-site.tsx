'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, Play, Search, ShoppingCart, X } from 'lucide-react'

const services = [
  { n: '01', title: 'Digitalization', image: '/assets/img/service/tab1.png' },
  { n: '02', title: 'Modernization', image: '/assets/img/service/tab2.png' },
  { n: '03', title: 'Accelerating Innovation', image: '/assets/img/service/tab3.png' },
  { n: '04', title: 'Business consulting', image: '/assets/img/service/tab4.png' },
]
const team = [
  { name: 'Leslie Alexander', role: 'Programmer', image: '/assets/img/team/team1.png' },
  { name: 'Darlene Robertson', role: 'UI/UX designer', image: '/assets/img/team/team2.png' },
  { name: 'Marvin McKinney', role: 'Web developer', image: '/assets/img/team/team3.png' },
  { name: 'Esther Howard', role: 'CEO', image: '/assets/img/team/team4.png' },
]
const posts = [
  { title: 'Transforming Challenges into Opportunities', image: '/assets/img/blog/mblog1.png' },
  { title: 'Design Inspiration: Where to Find Creative Ideas', image: '/assets/img/blog/mblog2.png' },
  { title: 'A Simple Social Media Marketing Checklist', image: '/assets/img/blog/mblog3.png' },
]

function SiteHeader() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Pages', 'Portfolio', 'Blog', 'Services', 'Contact us']
  return <header className="site-header"><a className="brand" href="#top" aria-label="Xstar home"><Image src="/assets/img/logo/logo.png" alt="Xstar" width={160} height={44} priority /></a>
    <button className="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{links.map((link, i) => <a key={link} href={['#top', '#awards', '#portfolio', '#journal', '#services', '#contact'][i]} onClick={() => setOpen(false)}>{i < 5 && <ArrowUpRight size={15} strokeWidth={2.7} />} {link}</a>)}</nav>
    <div className="header-actions"><a className="icon-link" href="#contact" aria-label="Search"><Search size={18} /></a><a className="icon-link cart-link" href="#contact" aria-label="Shopping cart"><ShoppingCart size={18} /></a><a className="outline-button" href="#contact"><ArrowUpRight size={17} /> Get In Touch</a></div>
  </header>
}

function Hero() {
  return <section className="hero" id="top"><SiteHeader /><div className="hero-inner"><div className="hero-copy"><p className="eyebrow">A creative partner for what&apos;s next</p><h1><span>NEXT GENERATION</span><br /><em>CREATIVE <strong>AGENCY</strong></em></h1><a className="hero-arrow" href="#awards" aria-label="Explore Xstar"><ArrowDownRight size={48} strokeWidth={1} /></a>
      <a className="video-orbit" href="#story"><span>INTRO VIDEO · PLAY · INTRO VIDEO · PLAY ·</span><i><Play size={24} fill="currentColor" /></i></a>
      <div className="client-row"><div className="client-logos"><Image src="/assets/img/client/c1.png" alt="Quo Legal Firm" width={145} height={48} /><Image src="/assets/img/client/c2.png" alt="Metriks Data Center" width={130} height={48} /><Image src="/assets/img/client/c3.png" alt="M'n'mize Interior" width={173} height={48} /></div><p>1k + Brands Trust Us</p></div>
    </div><div className="hero-stats"><div className="hero-thumb"><Image src="/assets/img/banner/bn-expri.png" alt="Abstract creative studio" fill sizes="260px" /></div><div><b>12+</b><span>years of experience</span></div><div><b>25K+</b><span>completed projects</span></div></div></div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>INDEPENDENT DIGITAL AGENCY · EST. 2012</span></div></section>
}

function Awards() {
  return <section className="awards section-pad" id="awards"><div className="section-kicker">WE PROUD THAT</div><div className="awards-head"><h2>Discover Our<br /><i>Awards</i></h2><p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from the runway heading towards a streamlined.</p></div><div className="award-list">{[['2019', 'Website of the day'], ['2021', 'National design contest'], ['2023', 'Apps of the day']].map(([year, title]) => <article className="award-item" key={year}><span>{year}</span><h3>Awwwards</h3><p>{title}</p><ArrowUpRight size={23} /></article>)}</div></section>
}

function Services() {
  const [active, setActive] = useState(0)
  return <section className="services section-pad" id="services"><div className="services-title"><div><div className="section-kicker">WHAT WE OFFER</div><h2>Most Experienced<br /><i>Services</i></h2></div><a className="text-link" href="#contact">View All Service <ArrowUpRight size={18} /></a></div>
    <div className="service-layout"><div className="service-tabs">{services.map((service, index) => <button key={service.n} className={active === index ? 'service-tab active' : 'service-tab'} onClick={() => setActive(index)}><span>{service.n}</span><b>{service.title}</b><ArrowRight size={22} /></button>)}</div><div className="service-detail"><div className="service-image"><Image src={services[active].image} alt={`${services[active].title} service`} fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="service-description"><p>We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.</p><ul><li>Legacy Modernization</li><li>Solution Design</li><li>Technology Enabling</li><li>Mobile-First Systems</li></ul></div></div></div>
  </section>
}

function Portfolio() {
  return <section className="portfolio section-pad" id="portfolio"><div className="portfolio-heading"><div className="section-kicker">SELECTED WORK</div><h2>Creative <i>portfolio</i></h2><a className="round-arrow" href="#contact" aria-label="View portfolio"><ArrowUpRight /></a></div><div className="portfolio-grid"><a className="work-card work-large" href="#contact"><Image src="/assets/img/case/study-grid1.png" alt="Brand identity project" fill sizes="60vw" /><span>Branding</span><h3>Transforming Challenges into Opportunities</h3><ArrowUpRight /></a><a className="work-card work-small" href="#contact"><Image src="/assets/img/case/study-grid2.png" alt="Social media campaign project" fill sizes="40vw" /><span>Creative</span><h3>A Simple Social Media Marketing Checklist</h3><ArrowUpRight /></a></div></section>
}

function Team() {
  return <section className="team section-pad"><div className="team-heading"><div><div className="section-kicker">OUR EXPERTS</div><h2>Meet our creative<br /><i>staff</i></h2></div><a className="text-link" href="#contact">View All Teams <ArrowUpRight size={18} /></a></div><div className="team-grid">{team.map(person => <article className="team-card" key={person.name}><div className="team-photo"><Image src={person.image} alt={person.name} fill sizes="(max-width: 700px) 80vw, 25vw" /></div><p>{person.role}</p><h3>{person.name}</h3><a href="#contact" aria-label={`Contact ${person.name}`}><ArrowUpRight size={18} /></a></article>)}</div></section>
}

function Testimonial() {
  return <section className="testimonial section-pad" id="story"><div className="testimonial-photo"><Image src="/assets/img/testimonial/t-version01.png" alt="Xstar client" fill sizes="40vw" /></div><div className="testimonial-copy"><div className="section-kicker">CLIENT&apos;S TESTIMONIAL</div><h2>Words from our<br /><i>partners</i></h2><blockquote>“Posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada.”</blockquote><div className="quote-by"><b>Daniel Smith</b><span>Senior engineer</span></div><div className="quote-controls"><button aria-label="Previous testimonial"><ArrowRight className="flip" /></button><button aria-label="Next testimonial"><ArrowRight /></button></div></div></section>
}

function Journal() {
  return <section className="journal section-pad" id="journal"><div className="team-heading"><div><div className="section-kicker">BLOG &amp; NEWS</div><h2>Check Our Company<br /><i>Inside Story</i></h2></div><a className="text-link" href="#contact">View all Article <ArrowUpRight size={18} /></a></div><div className="journal-grid">{posts.map((post, i) => <article className="journal-card" key={post.title}><a className="journal-image" href="#contact"><Image src={post.image} alt={post.title} fill sizes="(max-width: 700px) 90vw, 33vw" /></a><div className="journal-meta"><span>Creative</span><span>MARCH 24, 2024</span></div><h3><a href="#contact">{post.title}</a></h3><a className="journal-arrow" href="#contact" aria-label={`Read ${post.title}`}><ArrowUpRight /></a></article>)}</div></section>
}

function Footer() {
  return <footer className="footer section-pad" id="contact"><div className="footer-cta"><div className="section-kicker">HAVE A PROJECT IN MIND?</div><h2>Let&apos;s make<br /><i>it happen.</i></h2><a className="footer-arrow" href="mailto:hello@xstar.agency" aria-label="Email Xstar" suppressHydrationWarning><ArrowUpRight size={34} /></a></div><div className="footer-bottom"><a className="brand" href="#top"><Image src="/assets/img/logo/logo.png" alt="Xstar" width={145} height={40} /></a><p>Independent digital agency<br />building what&apos;s next.</p><a href="mailto:hello@xstar.agency" suppressHydrationWarning>hello@xstar.agency <ArrowUpRight size={16} /></a><span>© 2024 Xstar. All rights reserved.</span></div></footer>
}

export default function XstarSite() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '.section-kicker, .awards-head, .award-item, .services-title, .service-tab, .service-detail, .portfolio-heading, .work-card, .team-heading, .team-card, .testimonial-photo, .testimonial-copy, .journal-card, .footer-cta',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )
    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll')
      const siblingIndex = Array.from(element.parentElement?.children ?? []).indexOf(element)
      element.style.setProperty('--reveal-delay', `${Math.min(Math.max(siblingIndex, 0) * 75, 300)}ms`)
      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return <main className="xstar-site">
    <div className="electric-atmosphere" aria-hidden="true">
      <span className="ambient-orb ambient-orb-one" />
      <span className="ambient-orb ambient-orb-two" />
      <span className="ambient-orb ambient-orb-three" />
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="electric-silver" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#dce8f0" stopOpacity=".9" />
            <stop offset="75%" stopColor="#ffffff" stopOpacity=".35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="electric-glow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <g className="electric-line-glow" filter="url(#electric-glow)">
          <path d="M-80 155 L110 155 L170 122 L300 122 L352 190 L500 190 L568 135 L710 135 L770 176 L930 176 L1010 112 L1160 112 L1218 164 L1520 164" />
          <path d="M-80 670 L120 670 L182 714 L310 714 L374 650 L520 650 L586 708 L740 708 L815 635 L970 635 L1030 694 L1195 694 L1260 648 L1520 648" />
        </g>
        <g className="electric-lines">
          <path className="electric-line electric-line-one" d="M-80 155 L110 155 L170 122 L300 122 L352 190 L500 190 L568 135 L710 135 L770 176 L930 176 L1010 112 L1160 112 L1218 164 L1520 164" />
          <path className="electric-line electric-line-two" d="M-80 670 L120 670 L182 714 L310 714 L374 650 L520 650 L586 708 L740 708 L815 635 L970 635 L1030 694 L1195 694 L1260 648 L1520 648" />
          <path className="electric-line electric-line-three" d="M-80 420 L180 420 L240 382 L420 382 L486 452 L650 452 L706 405 L860 405 L930 468 L1080 468 L1142 410 L1520 410" />
        </g>
        <g className="electric-nodes">
          <circle cx="352" cy="190" r="3" />
          <circle cx="770" cy="176" r="3" />
          <circle cx="374" cy="650" r="3" />
          <circle cx="815" cy="635" r="3" />
          <circle cx="706" cy="405" r="3" />
          <circle cx="1142" cy="410" r="3" />
        </g>
      </svg>
    </div>
    <Hero /><Awards /><Services /><Portfolio /><Team /><Testimonial /><Journal /><Footer />
  </main>
}
