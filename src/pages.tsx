import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'

const CONTACT_EMAIL = 'md.mizan235@gmail.com'

const SOCIAL_LINKS = ['Instagram', 'TikTok', 'YouTube']

const JOBS = [
  {
    title: 'Pharmacy Manager',
    org: 'Shah Ali Pharmacy',
    location: null,
    period: '2025 – 2026',
    bullets: [
      'Managed pharmacy operations, inventory, and procurement',
      'Handled medication counseling and prescription dispensing',
      'Coordinated pharmacy staff and daily billing and customer service',
      'Ensured regulatory compliance and medication safety throughout operations',
    ],
  },
  {
    title: 'Owner & Managing Pharmacist',
    org: 'Dream Pharmacy',
    location: null,
    period: '2022 – 2025',
    bullets: [
      'Managed daily pharmacy operations, sales, administration, and staff coordination',
      'Handled medicine purchasing, suppliers, stock, and inventory management',
      'Assisted customers with OTC medicines, dosage, and basic health advice',
      'Provided basic first aid and referred patients when medical attention was needed',
      'Managed billing, sales, and customer relationships',
    ],
  },
  {
    title: 'Office Aide',
    org: 'Life Line Hospital Pvt.',
    location: null,
    period: '2022',
    bullets: [
      "Documented vital signs, behaviors, and medications in clients' medical records",
      "Ensured clients' optimal health by overseeing medication administration and all doctor's appointments",
    ],
  },
  {
    title: 'Certified Medical Assistant',
    org: 'Kashipur Al-Habib Hospital Pvt.',
    location: null,
    period: '2019 – 2022',
    bullets: [
      'Compassionate and detail-oriented medical assistant in fast-paced clinical settings',
      'Skilled in patient triage, vital signs monitoring, routine lab procedures, and electronic health records (EHR) management',
      'Committed to maintaining high standards of patient comfort, administrative accuracy, and seamless clinical operations',
    ],
  },
  {
    title: 'Field Training',
    org: '250 Bed General Hospital, Noakhali',
    location: null,
    period: '2017',
    bullets: [
      'Gained hands-on experience in patient care, medical equipment operation, and healthcare procedures in a clinical environment',
    ],
  },
]

function Page({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <main className="min-h-[100dvh] bg-black px-6 pb-28 pt-28 font-hn text-cream sm:px-10 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">{kicker}</p>
        <h1 className="mt-3 text-5xl leading-none sm:text-6xl">{title}</h1>
        <div className="mt-8 h-0.5 w-16 bg-cream" />
        {children}
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-xl uppercase tracking-[0.2em] text-cream/80">{title}</h2>
      <div className="mt-6 space-y-8">{children}</div>
    </section>
  )
}

function Entry({
  title,
  meta,
  bullets,
}: {
  title: string
  meta?: string
  bullets: string[]
}) {
  return (
    <div>
      <h3 className="text-lg">{title}</h3>
      {meta ? <p className="mt-1 text-sm text-cream/60">{meta}</p> : null}
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-cream/85 marker:text-cream/40">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid list-disc gap-2 pl-5 text-sm leading-relaxed text-cream/85 marker:text-cream/40 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function StoryPage() {
  return (
    <Page kicker="About" title="Story">
      <Section title="Professional Summary">
        <p className="text-sm leading-relaxed text-cream/85">
          Dedicated healthcare professional with four years of experience as a medical assistant in a
          well-known hospital in my hometown, alongside hospital administration experience, pharmacy
          training, and hands-on experience managing a community pharmacy. Qualified in Pharmaceutical
          Technology, Nursing, Health Technology &amp; Services, and Chemistry, with practical experience
          in patient support, hospital operations, pharmacy management, pharmaceutical inventory, and
          medicine-related services.
        </p>
        <p className="text-sm leading-relaxed text-cream/85">
          Currently serving as <span className="text-cream">Pharmacy Manager at Shah Ali
          Pharmacy</span>, with several years of practical experience in pharmaceutical and healthcare
          services.
        </p>
      </Section>

      <Section title="Education & Training">
        <Entry
          title="Bachelor of Science: Chemistry"
          meta="National University of Bangladesh — Noakhali, Bangladesh — 2016–2026"
          bullets={['Major: Chemistry']}
        />
        <Entry
          title="Certificate in Health Technology & Services"
          meta="Noakhali Paramedical College — Noakhali, Bangladesh — 2016–2017"
          bullets={['Concentration: Pharma Technology']}
        />
      </Section>

      <Section title="Certifications">
        <List
          items={[
            'Certificate in Health Technology & Services',
            'Computer Office Applications & Shorthand',
            'Certificate in Nursing',
            'Web Design & Development Course Management',
            'National Skills Certificate on Driving, Level-3',
          ]}
        />
      </Section>

      <Section title="Skills">
        <List
          items={[
            'Patient Assessment & Basic Clinical Evaluation',
            'Medication Administration',
            'Treatment Planning',
            'Patient Education',
            'Chronic Disease Management',
            'Emergency Care',
          ]}
        />
      </Section>

      <Section title="Career Objective">
        <p className="text-sm leading-relaxed text-cream/85">
          To utilize my combined experience in medical assistance, pharmacy practice, healthcare
          administration, pharmaceutical technology, and chemistry in a professional healthcare
          organization where I can contribute my practical experience while continuing to develop my
          medical and pharmaceutical knowledge.
        </p>
      </Section>

      <Section title="Professional Qualifications">
        <List
          items={[
            'Licensed Pharmacist',
            'Certified Chemist',
            'Medical Assistant',
            'Diploma in Pharmaceutical Technology',
            'Health Technology & Services training',
            '1-Year Nursing Certificate',
          ]}
        />
      </Section>

      <Section title="Professional Strengths">
        <List
          items={[
            'Patient-focused communication',
            'Pharmacy management',
            'Healthcare service',
            'Medical administration',
            'Teamwork',
            'Professional responsibility',
            'Pharmaceutical inventory management',
            'Problem solving',
            'Customer service',
            'Healthcare documentation',
            'Business and operational management',
          ]}
        />
      </Section>

      <Section title="Languages">
        <List
          items={[
            'Bangla — Native',
            'English — Professional',
            'Arabic — Working Knowledge',
            'Urdu/Hindi — Working Knowledge',
          ]}
        />
      </Section>

      <Section title="Contact Details">
        <List
          items={[
            'Location: Doha, Qatar',
            'Phone: +974 7194 5693',
            'Email: mizan321@hotmail.com',
          ]}
        />
      </Section>

      <Section title="References">
        <Entry
          title="Nazmul Hossain Sujan"
          bullets={['Accountant at Qatar Sports Club, Doha, Qatar']}
        />
      </Section>
    </Page>
  )
}

export function JobsPage() {
  return (
    <Page kicker="Experience" title="Jobs">
      <Section title="Experience Summary">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-cream/20">
                <th className="pb-3 pr-6 text-xs font-normal uppercase tracking-wider text-cream/60">
                  Position
                </th>
                <th className="pb-3 pr-6 text-xs font-normal uppercase tracking-wider text-cream/60">
                  Organization
                </th>
                <th className="pb-3 text-xs font-normal uppercase tracking-wider text-cream/60">
                  Period
                </th>
              </tr>
            </thead>
            <tbody>
              {JOBS.map((job) => (
                <tr key={job.title} className="border-b border-cream/10">
                  <td className="py-4 pr-6 text-sm text-cream">{job.title}</td>
                  <td className="py-4 pr-6 text-sm text-cream/85">{job.org}</td>
                  <td className="py-4 text-sm text-cream/60">{job.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Roles & Responsibilities">
        {JOBS.map((job) => (
          <Entry
            key={job.title}
            title={job.title}
            meta={[job.location, job.org, job.period].filter(Boolean).join(' — ')}
            bullets={job.bullets}
          />
        ))}
      </Section>
    </Page>
  )
}

export function MessagePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name.trim()}`)
    const body = encodeURIComponent(
      `${message.trim()}\n\n— ${name.trim()}${email.trim() ? ` (${email.trim()})` : ''}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full border-b border-cream/25 bg-transparent py-3 text-sm text-cream transition-colors placeholder:text-cream/40 focus:border-cream'

  return (
    <Page kicker="Contact" title="Message">
      <Section title="Send a Message">
        <p className="text-sm leading-relaxed text-cream/85">
          Have a question, an opportunity, or just want to say hello? Fill in the form below — it
          opens your email app with everything ready to send.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-cream/60">Name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-cream/60">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/60">Message</span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Write your message…"
              className={`${inputClass} resize-none`}
            />
          </label>
          <button
            type="submit"
            className="inline-block border border-cream/60 px-8 py-3 text-sm uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-black"
          >
            Send Message
          </button>
        </form>
        {sent ? (
          <p className="mt-6 text-sm text-cream/70">
            Thanks — your email app should open with the message ready to send.
          </p>
        ) : null}
      </Section>

      <Section title="Or Email Me Directly">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm text-cream/85 underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </Section>

      <Section title="Find Me">
        <div className="flex flex-wrap gap-6">
          {SOCIAL_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-sm text-cream/85 underline-offset-4 hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      </Section>
    </Page>
  )
}
