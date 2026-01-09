import { Link } from "react-router-dom";

// Featured insights - title-forward, no excerpts
const insights = [
  {
    id: "clarity-compounds",
    title: "Clarity Compounds",
    type: "Essay",
    category: "Strategy",
  },
  {
    id: "restraint-as-strategy",
    title: "Restraint as Strategy",
    type: "Framework",
    category: "Positioning",
  },
  {
    id: "seo-without-compromise",
    title: "SEO Without Compromise",
    type: "Playbook",
    category: "SEO",
  },
];

export function InsightsSection() {
  return (
    <section className="section-padding bg-section-secondary">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="caption text-muted-foreground">Insights</span>
            <h2 className="headline-section mt-4">
              Thinking
            </h2>
          </div>
          <Link
            to="/insights"
            className="body-small link-underline"
          >
            View all insights
          </Link>
        </div>

        {/* Insights List - Title-forward, minimal */}
        <div className="max-w-2xl">
          {insights.map((insight, index) => (
            <Link
              key={insight.id}
              to={`/insights/${insight.id}`}
              className="group block"
            >
              <article className={`py-6 ${index < insights.length - 1 ? "border-b border-border" : ""}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="caption text-muted-foreground">
                    {insight.type}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span className="caption text-muted-foreground">
                    {insight.category}
                  </span>
                </div>
                <h3 className="headline-card group-hover:opacity-70 transition-opacity duration-300">
                  {insight.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
