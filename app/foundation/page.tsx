import {
  foundationDecisionRules,
  foundationUseCases,
  modelToolMatrix,
  promptSkeletons,
  scaffoldFiles,
  foundationAcceptanceCriteria,
} from "@/foundation-kit/src";

export default function FoundationPage() {
  return (
    <main>
      <div className="shell">
        <section className="hero">
          <div className="eyebrow">Phase 1 scaffold</div>
          <h1>Foundation kit</h1>
          <p className="lede">
            The first backlog phase now exists as a real repo scaffold with shared types, decision rules, prompt skeletons, and a package boundary future work can import.
          </p>
        </section>

        <section className="sections">
          <article className="section span-12">
            <h2>Package map</h2>
            <div className="tools">
              {scaffoldFiles.map((file) => (
                <div className="tool" key={file.path}>
                  <h3>{file.path}</h3>
                  <p>{file.purpose}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Decision rules</h2>
            <div className="timeline">
              {foundationDecisionRules.map((rule, index) => (
                <div className="step" key={rule}>
                  <span>{index + 1}</span>
                  <p>{rule}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Starter use cases</h2>
            <div className="tools">
              {foundationUseCases.map((item) => (
                <div className="tool" key={item.scenario}>
                  <h3>{item.scenario}</h3>
                  <p>{item.decision} agent path</p>
                  <p>{item.rationale}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Model and tool matrix</h2>
            <div className="tools">
              {modelToolMatrix.map((row) => (
                <div className="tool" key={row.modelFamily}>
                  <h3>{row.modelFamily}</h3>
                  <p>{row.bestFor}</p>
                  <p>{row.toolAccess}</p>
                  <p>{row.guardrail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Prompt skeletons</h2>
            <div className="timeline">
              {promptSkeletons.map((prompt) => (
                <div className="step" key={prompt.role}>
                  <span>{prompt.role.slice(0, 1)}</span>
                  <div>
                    <h3>{prompt.role}</h3>
                    <p>{prompt.job}</p>
                    <p>{prompt.sections.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-12">
            <h2>Acceptance criteria</h2>
            <div className="timeline">
              {foundationAcceptanceCriteria.map((criterion, index) => (
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
