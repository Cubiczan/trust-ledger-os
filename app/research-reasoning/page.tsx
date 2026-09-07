import {
  reasoningPatterns,
  researchPipelineStages,
  researchReasoningScaffold,
  researchReasoningAcceptanceCriteria,
  researchReasoningUseCases,
} from "@/research-reasoning-kit/src";

export default function ResearchReasoningPage() {
  return (
    <main>
      <div className="shell">
        <section className="hero">
          <div className="eyebrow">Phase 3 scaffold</div>
          <h1>Research and reasoning kit</h1>
          <p className="lede">
            The third backlog phase packages the finance research pipeline and the reusable reasoning paradigms into one importable scaffold.
          </p>
        </section>

        <section className="sections">
          <article className="section span-12">
            <h2>Package map</h2>
            <div className="tools">
              {researchReasoningScaffold.map((file) => (
                <div className="tool" key={file.path}>
                  <h3>{file.path}</h3>
                  <p>{file.purpose}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Research pipeline</h2>
            <div className="timeline">
              {researchPipelineStages.map((stage, index) => (
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
            <h2>Reasoning patterns</h2>
            <div className="timeline">
              {reasoningPatterns.map((pattern) => (
                <div className="step" key={pattern.name}>
                  <span>{pattern.name.slice(0, 1)}</span>
                  <div>
                    <h3>{pattern.name}</h3>
                    <p>{pattern.whenToUse}</p>
                    <p>{pattern.financeUse}</p>
                    <p>{pattern.guardrail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Starter use cases</h2>
            <div className="tools">
              {researchReasoningUseCases.map((item) => (
                <div className="tool" key={item.scenario}>
                  <h3>{item.scenario}</h3>
                  <p>{item.whyItMatters}</p>
                  <p>{item.outputs.join(' · ')}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Acceptance criteria</h2>
            <div className="timeline">
              {researchReasoningAcceptanceCriteria.map((criterion, index) => (
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
