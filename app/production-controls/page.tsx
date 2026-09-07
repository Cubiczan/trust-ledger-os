import {
  evalHarnessStages,
  evalMetrics,
  driftMonitoringStages,
  guardrailRules,
  productionControlScaffold,
  productionControlAcceptanceCriteria,
} from "@/production-controls-kit/src";

export default function ProductionControlsPage() {
  return (
    <main>
      <div className="shell">
        <section className="hero">
          <div className="eyebrow">Phase 4 scaffold</div>
          <h1>Production controls kit</h1>
          <p className="lede">
            The final backlog phase packages eval harnesses, drift monitoring, tracing, guardrails, and approval gates into one reusable boundary.
          </p>
        </section>

        <section className="sections">
          <article className="section span-12">
            <h2>Package map</h2>
            <div className="tools">
              {productionControlScaffold.map((file) => (
                <div className="tool" key={file.path}>
                  <h3>{file.path}</h3>
                  <p>{file.purpose}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Eval harness</h2>
            <div className="timeline">
              {evalHarnessStages.map((stage, index) => (
                <div className="step" key={stage.name}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{stage.name}</h3>
                    <p>{stage.purpose}</p>
                    <p>{stage.inputs.join(' · ')}</p>
                    <p>{stage.outputs.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Evaluation metrics</h2>
            <div className="tools">
              {evalMetrics.map((metric) => (
                <div className="tool" key={metric.name}>
                  <h3>{metric.name}</h3>
                  <p>{metric.whyItMatters}</p>
                  <p>{metric.howToMeasure}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Drift monitoring</h2>
            <div className="timeline">
              {driftMonitoringStages.map((stage, index) => (
                <div className="step" key={stage.name}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{stage.name}</h3>
                    <p>{stage.purpose}</p>
                    <p>{stage.inputs.join(' · ')}</p>
                    <p>{stage.outputs.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Guardrail rules</h2>
            <div className="timeline">
              {guardrailRules.map((rule) => (
                <div className="step" key={rule.name}>
                  <span>{rule.name.slice(0, 1)}</span>
                  <div>
                    <h3>{rule.name}</h3>
                    <p>{rule.whenItRuns}</p>
                    <p>{rule.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Acceptance criteria</h2>
            <div className="timeline">
              {productionControlAcceptanceCriteria.map((criterion, index) => (
                <div className="step" key={criterion}>
                  <span>{index + 1}</span>
                  <p>{criterion}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
