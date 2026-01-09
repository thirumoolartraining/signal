import { Link } from "react-router-dom";
import { insights } from "@/data/insights";

const Insights = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <span className="caption text-muted-foreground opacity-0 animate-fade-up">
              Insights
            </span>
            <h1 className="headline-hero mt-6 opacity-0 animate-fade-up animate-delay-100">
              Thinking
            </h1>
            <p className="body-large text-muted-foreground mt-8 max-w-2xl opacity-0 animate-fade-up animate-delay-200">
              Essays and frameworks on strategy, design, and building brands that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Insights List - Editorial, title-forward */}
      <section className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            {insights.map((insight, index) => (
              <Link
                key={insight.id}
                to={`/insights/${insight.id}`}
                className="group block"
              >
                <article className={`py-10 ${index < insights.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="caption">
                      {insight.type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="caption">
                      {insight.category}
                    </span>
                  </div>
                  <h2 className="headline-lg group-hover:opacity-70 transition-opacity duration-300">
                    {insight.title}
                  </h2>
                  <span className="body-small text-muted-foreground mt-3 block">
                    {insight.date}
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Conversion */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="body-large text-muted-foreground">
              If this perspective resonates, we may be a good fit.
            </p>
            <Link
              to="/proposal"
              className="inline-block body-base text-muted-foreground hover:text-foreground transition-colors duration-300 mt-4"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
