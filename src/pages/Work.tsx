import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <span className="caption text-muted-foreground opacity-0 animate-fade-up">
              Work
            </span>
            <h1 className="headline-hero mt-6 opacity-0 animate-fade-up animate-delay-100">
              Selected projects
            </h1>
            <p className="body-large text-muted-foreground mt-8 max-w-2xl opacity-0 animate-fade-up animate-delay-200">
              Each engagement represents a strategic partnership. We share the thinking, not just the deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/work/${study.id}`}
              className="block group"
            >
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-16 lg:py-20 border-b border-border last:border-b-0">
                <div className="lg:col-span-1">
                  <span className="caption text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="headline-card group-hover:text-muted-foreground transition-colors duration-300">
                    {study.client}
                  </h2>
                  <span className="caption text-muted-foreground mt-2 block">
                    {study.year}
                  </span>
                </div>
                <div className="lg:col-span-7">
                  <p className="body-base text-muted-foreground">
                    {study.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Thinking */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <span className="caption text-muted-foreground">Related thinking</span>
            <nav className="mt-6 flex flex-col gap-4">
              <Link
                to="/insights/clarity-compounds"
                className="body-base text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Clarity Compounds
              </Link>
              <Link
                to="/insights/restraint-as-strategy"
                className="body-base text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Restraint as Strategy
              </Link>
              <Link
                to="/insights/design-systems-scale"
                className="body-base text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                How Design Systems Scale Trust
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border bg-section-dark text-primary-foreground">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="headline-section">
              Your project could be next
            </h2>
            <p className="body-large mt-6 opacity-70">
              We take on a limited number of engagements each quarter.
            </p>
            <div className="mt-10">
              <Link
                to="/proposal"
                className="inline-block body-small border border-current px-10 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
              >
                Get a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
