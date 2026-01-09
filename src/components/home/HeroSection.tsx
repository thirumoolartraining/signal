import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center bg-section-primary">
      <div className="container-editorial">
        <div className="max-w-4xl">
          <h1 className="headline-hero opacity-0 animate-fade-up">
            Strategy before scale.
          </h1>
          <p className="body-large text-muted-foreground mt-8 max-w-xl opacity-0 animate-fade-up animate-delay-200">
            We partner with considered brands to build clarity, not noise.
          </p>
          <div className="mt-12 opacity-0 animate-fade-up animate-delay-400">
            <Link
              to="/proposal"
              className="inline-block body-small border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
