const tools = [
  {
    name: 'PRISM',
    text: 'Runtime observability for agent calls, approvals, and latency.',
  },
  {
    name: 'Prelint',
    text: 'Pre-merge product review for policy drift, bad defaults, and risky logic.',
  },
  {
    name: 'GIDE',
    text: 'Secure offline editing and emergency fixes when the network is not trusted.',
  },
];

const steps = [
  'Capture a code change, spend request, or agent action.',
  'Review it against product policy and trust rules.',
  'Attach a PRISM trace to the runtime decision.',
  'Produce an approve / deny / counter outcome.',
  'Store the decision in a ledger future runs can reuse.',
];

export default function Page() {
  return (
    <main>
      <div className="shell">
        <section className="hero">
          <div className="eyebrow">BuilderBase · Trust and Risk</div>
          <h1>Trust Ledger OS</h1>
          <p className="lede">
            A trust and risk control plane for AI teams. Every high-impact change is
            reviewed, traced, and recorded before it reaches customers or cash.
          </p>

          <div className="hero-grid">
            <div className="panel">
              <h2>Problem</h2>
              <p>
                AI teams are shipping code, spend, and agent actions faster than humans can
                review them. Existing tools catch bugs or logs, but not product policy drift,
                runtime risk, and approval history in one place.
              </p>
            </div>

            <div className="panel">
              <h2>What it does</h2>
              <div className="mini-grid">
                <div className="stat">
                  <span className="label">Runtime</span>
                  <strong>PRISM traces</strong>
                </div>
                <div className="stat">
                  <span className="label">Review</span>
                  <strong>Prelint checks</strong>
                </div>
                <div className="stat">
                  <span className="label">Offline</span>
                  <strong>GIDE edits</strong>
                </div>
                <div className="stat">
                  <span className="label">Ledger</span>
                  <strong>Approve / deny</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sections">
          <article className="section span-6">
            <h2>How it works</h2>
            <div className="timeline">
              {steps.map((step, index) => (
                <div className="step" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Tool stack</h2>
            <div className="tools">
              {tools.map((tool) => (
                <div className="tool" key={tool.name}>
                  <h3>{tool.name}</h3>
                  <p>{tool.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-8">
            <h2>BuilderBase fit</h2>
            <p>
              Trust Ledger OS closes the gap between shipping fast and staying in control.
              It makes every high-impact change reviewed, traced, and recorded before it
              reaches customers or cash.
            </p>
          </article>

          <article className="section span-4">
            <h2>Demo deliverables</h2>
            <ul className="list">
              <li>2-minute FFmpeg video</li>
              <li>PRISM trace view</li>
              <li>Prelint review scene</li>
              <li>Decision ledger screenshot</li>
            </ul>
          </article>
        </section>

        <div className="footer">
          Repo base: `trust-ledger-os` · Mirrors to `icohangar-ops` and `Cubiczan`
        </div>
      </div>
    </main>
  );
}
