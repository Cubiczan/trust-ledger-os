import {
  benchmarkCases,
  benchmarkFrameworks,
  frameworkBenchmarkScaffold,
  benchmarkAcceptanceCriteria,
  scoringRows,
} from "@/framework-benchmark-suite/src";

export default function FrameworkBenchmarkPage() {
  return (
    <main>
      <div className="shell">
        <section className="hero">
          <div className="eyebrow">Phase 2 scaffold</div>
          <h1>Framework benchmark suite</h1>
          <p className="lede">
            The second backlog phase is now a real package boundary for comparing finance agent frameworks on the same tasks with the same rubric.
          </p>
        </section>

        <section className="sections">
          <article className="section span-12">
            <h2>Package map</h2>
            <div className="tools">
              {frameworkBenchmarkScaffold.map((file) => (
                <div className="tool" key={file.path}>
                  <h3>{file.path}</h3>
                  <p>{file.purpose}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Framework profiles</h2>
            <div className="tools">
              {benchmarkFrameworks.map((framework) => (
                <div className="tool" key={framework.name}>
                  <h3>{framework.name}</h3>
                  <p>{framework.bestFor}</p>
                  <p>{framework.tradeoff}</p>
                  <p>{framework.notes}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Benchmark cases</h2>
            <div className="timeline">
              {benchmarkCases.map((item, index) => (
                <div className="step" key={item.scenario}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{item.scenario}</h3>
                    <p>{item.whyItMatters}</p>
                    <p>{item.expectedOutput}</p>
                    <p>{item.goodFitFrameworks.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Scoring rubric</h2>
            <div className="timeline">
              {scoringRows.map((row) => (
                <div className="step" key={row.dimension}>
                  <span>{row.dimension.slice(0, 1).toUpperCase()}</span>
                  <div>
                    <h3>{row.dimension}</h3>
                    <p>{row.whatToScore}</p>
                    <p>{row.howToMeasure}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="section span-6">
            <h2>Acceptance criteria</h2>
            <div className="timeline">
              {benchmarkAcceptanceCriteria.map((criterion, index) => (
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
