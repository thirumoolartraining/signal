import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const beliefs = [
  {
    number: "01",
    title: "Clarity is strategy",
    body: "Most brands fail not from lack of effort, but from lack of focus. We believe the first job of strategy is to create clarity—to identify what matters most and pursue it with conviction. When you know exactly who you serve and why you exist, every decision becomes easier. Clarity compounds. It's not just a starting point; it's an ongoing discipline.",
  },
  {
    number: "02",
    title: "Design is thinking made visible",
    body: "We don't separate strategy from execution. Design is not decoration applied after decisions are made—it's a way of working through problems. Every visual choice, every interaction, every word reflects underlying thinking. When design is treated as strategy made tangible, the result is work that communicates before it needs to be explained.",
  },
  {
    number: "03",
    title: "Restraint outperforms excess",
    body: "Addition is easy. Subtraction requires judgment. The brands that endure know what to leave out. They resist the temptation to chase every trend, serve every audience, or add every feature. We believe in building deliberately—choosing constraints that create distinction rather than capabilities that create confusion.",
  },
  {
    number: "04",
    title: "Partnership, not production",
    body: "We're not an agency that takes orders and delivers assets. We're strategic partners who work alongside leadership teams to solve real problems. This requires honesty, shared accountability, and a willingness to challenge assumptions—including our own. The best work emerges from genuine collaboration.",
  },
  {
    number: "05",
    title: "Long-term value over short-term metrics",
    body: "Quick wins are seductive but often hollow. We focus on building foundations that create compounding returns—brand equity that appreciates, systems that scale, and relationships that deepen. This means sometimes saying no to what would work today in favor of what will matter in five years.",
  },
];

const Philosophy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <span className="caption text-muted-foreground opacity-0 animate-fade-up">
              Philosophy
            </span>
            <h1 className="headline-hero mt-6 opacity-0 animate-fade-up animate-delay-100">
              How we think shapes what we build.
            </h1>
            <p className="body-large text-muted-foreground mt-8 max-w-2xl opacity-0 animate-fade-up animate-delay-200">
              These aren't values on a wall. They're working principles that guide every decision, every project, every conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto">
            {beliefs.map((belief, index) => (
              <div
                key={belief.number}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-16 ${
                  index !== beliefs.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="md:col-span-2">
                  <span className="caption text-muted-foreground">
                    {belief.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h2 className="headline-xl mb-6">
                    {belief.title}
                  </h2>
                  <p className="body-large text-muted-foreground">
                    {belief.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition to Work */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <Link
              to="/work"
              className="body-large text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              See how this thinking translates into work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophy;
