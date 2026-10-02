import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────
//  EDIT EVERYTHING HERE
// ─────────────────────────────────────────────
const CONFIG = {
  formEmbedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfE7LOfsQLKAbAr1JcxOb0iNXryGj_cHsc7T1skf7UloxYzww/viewform?embedded=true',
  formLink:
    'https://docs.google.com/forms/d/e/1FAIpQLSfE7LOfsQLKAbAr1JcxOb0iNXryGj_cHsc7T1skf7UloxYzww/viewform',
  rsvpDeadline: '2026-10-05T20:00:00-04:00',
  eventDate: 'Friday, October 30',
  entryTime: '6:30 PM',
  houseTime: '5:00 PM',
  houseAddress: '15 Dylan Court, Glen Mills, PA',
  venueName: 'The Bates Motel at Arasapha Farm',
  venueAddress: '1835 Middletown Rd, Glen Mills, PA',
  venuePhone: '610-459-0647',
  organizer: 'Laura',
  organizerContact: 'YOUR EMAIL OR PHONE HERE',
  venmo: '@Laura-Cecconi',
  heldTickets: 20,
  heldPrice: 25,
  yearLabel: 'Year Three · Est. 2024',
}
// ─────────────────────────────────────────────

function useCountdown(target) {
  const [left, setLeft] = useState(() => new Date(target) - new Date())
  useEffect(() => {
    const t = setInterval(() => setLeft(new Date(target) - new Date()), 1000)
    return () => clearInterval(t)
  }, [target])
  if (left <= 0) return null
  return {
    days: Math.floor(left / 86400000),
    hours: Math.floor((left / 3600000) % 24),
    mins: Math.floor((left / 60000) % 60),
    secs: Math.floor((left / 1000) % 60),
  }
}

function Countdown() {
  const t = useCountdown(CONFIG.rsvpDeadline)

  if (!t) {
    return (
      <div className="mx-auto mt-7 max-w-md rounded-lg border border-blood bg-crypt p-5 text-center">
        <p className="font-scream text-3xl text-gore">Sign-ups are closed</p>
        <p className="mt-1 text-sm text-ash">
          Contact {CONFIG.organizer} directly if you still want in.
        </p>
      </div>
    )
  }

  const units = [
    ['Days', t.days],
    ['Hours', t.hours],
    ['Min', t.mins],
    ['Sec', t.secs],
  ]

  return (
    <div className="mx-auto mt-7 max-w-md rounded-lg border border-blood bg-crypt p-5 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ash">Sign-ups close in</p>
      <div className="grid grid-cols-4 gap-2">
        {units.map(([label, val]) => (
          <div key={label}>
            <div className="font-scream text-4xl leading-none tabular-nums text-bone">
              {String(val).padStart(2, '0')}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ash">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-line py-8">
      {title && (
        <h2 className="mb-4 font-scream text-4xl tracking-wide text-pumpkin">{title}</h2>
      )}
      {children}
    </section>
  )
}

const plan = [
  [
    CONFIG.houseTime,
    'Pizza at the house',
    `${CONFIG.houseAddress}. Pizza's on us. We eat, then convoy over.`,
  ],
  ['6:00 PM', 'Head to the farm', 'Short drive. We park and get in line together.'],
  [
    CONFIG.entryTime,
    'Entry time',
    `${CONFIG.venueName}. Combo ticket: haunted hayride, the Bates Motel, and the corn trail.`,
  ],
  ['~10:00 PM', 'Done', "Pick-up at the farm, or back at the house. We'll confirm closer to the day."],
]

export default function App() {
  return (
    <div className="fog min-h-screen">
      <div className="mx-auto max-w-2xl px-5 pb-12">
        {/* ───────── HERO ───────── */}
        <header className="pb-8 pt-14 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-ash">{CONFIG.yearLabel}</p>
          <h1 className="glow mt-4 animate-flicker font-scream text-6xl leading-[0.95] text-gore sm:text-8xl">
            Wildcats After Dark
          </h1>
          <p className="mt-3 text-lg text-bone">The Annual 6th Grade Bates Motel Night</p>
          <div className="mt-6 inline-block rounded border-2 border-pumpkin px-4 py-1 font-scream text-2xl tracking-wider text-pumpkin">
            No Vacancy
          </div>
          <p className="mt-5 font-semibold text-harvest">
            {CONFIG.eventDate} · {CONFIG.entryTime} entry
          </p>
          <Countdown />
          <a
            href="#rsvp"
            className="mt-6 inline-block rounded-md bg-gore px-6 py-3 font-semibold text-bone transition hover:bg-blood focus:outline-none focus-visible:ring-2 focus-visible:ring-harvest"
          >
            RSVP now
          </a>
        </header>

        {/* ───────── THE PLAN ───────── */}
        <Section id="plan" title="The Plan">
          <div className="grid gap-4">
            {plan.map(([time, what, detail]) => (
              <div key={what} className="grid gap-1 sm:grid-cols-[92px_1fr] sm:gap-4">
                <span className="font-bold tabular-nums text-harvest">{time}</span>
                <div className="min-w-0">
                  <h3 className="font-semibold">{what}</h3>
                  <p className="text-ash">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ───────── HEADS UP ───────── */}
        <Section id="heads-up">
          <div className="rounded-lg border border-blood bg-blood/20 p-5">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-gore">
              Parents, read this bit
            </h3>
            <p>
              This is a full-intensity haunt. It's loud, it's dark, and the actors get right in
              your face. Most kids love it. If yours hasn't done something like this before, have a
              chat first.
            </p>
          </div>
        </Section>

        {/* ───────── MONEY ───────── */}
        <Section id="money" title="The Money">
          <div className="space-y-4">
            <p className="max-w-prose">
              I'm holding {CONFIG.heldTickets} discounted tickets at ${CONFIG.heldPrice}. If we need
              more, and I hope we do, I'll buy the rest at regular price. Parents who want to come
              through the haunt with us are welcome. Just count yourself when you sign up.
            </p>
            <p className="max-w-prose">
              We split the whole cost evenly across every ticket. Nobody pays less for signing up
              first. Here's how it works, using made-up numbers:
            </p>

            <div className="rounded-lg border border-line bg-crypt p-4 tabular-nums">
              <div className="flex justify-between gap-3">
                <span>20 tickets × $25.00</span>
                <span>$500.00</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>18 tickets × $40.00</span>
                <span>$720.00</span>
              </div>
              <div className="mt-2 flex justify-between gap-3 border-t border-line pt-2 font-bold text-harvest">
                <span>$1,220 ÷ 38 tickets</span>
                <span>$32.25 each</span>
              </div>
              <p className="mt-2 text-sm text-ash">
                Example only. Your real amount comes by email after sign-ups close October 9. A
                family with 2 tickets pays 2 × that.
              </p>
            </div>

            <div className="rounded-lg bg-slab p-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-ash">Pay by Venmo</p>
              <p className="my-1 text-2xl font-bold text-harvest">{CONFIG.venmo}</p>
              <p className="text-sm text-ash">
                Put your child's name in the note. Wait for the invoice email before sending.
              </p>
            </div>

            <p className="text-sm text-ash">
              This covers the ticket only. Send cash if your kid wants food or extras at the farm.
            </p>
          </div>
        </Section>

        {/* ───────── RSVP ───────── */}
        <Section id="rsvp" title="RSVP">
          <p className="mb-4 text-ash">
            One form per child. Sign-ups close October 9 at 8 PM.
          </p>
          <div className="overflow-hidden rounded-lg bg-white">
            <iframe
              src={CONFIG.formEmbedUrl}
              title="Wildcats After Dark RSVP form"
              className="h-[1900px] w-full sm:h-[1600px]"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
          <p className="mt-3 text-center text-sm text-ash">
            Form not loading?{' '}
            <a
              href={CONFIG.formLink}
              target="_blank"
              rel="noreferrer"
              className="text-harvest underline"
            >
              Open it in a new tab
            </a>
          </p>
        </Section>

        {/* ───────── FOOTER ───────── */}
        <footer className="space-y-2 border-t border-line pt-6 text-center text-sm text-ash">
          <p>
            Questions? {CONFIG.organizer} · {CONFIG.organizerContact}
          </p>
          <p>
            {CONFIG.venueName} · {CONFIG.venueAddress} · {CONFIG.venuePhone}
          </p>
          <p>Not a school event. Organized by parents, for our kids.</p>
        </footer>
      </div>
    </div>
  )
}
