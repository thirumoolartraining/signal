import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    title: "Clarity is strategy",
    description: "We distill complexity into focus. Every decision stems from understanding what matters most.",
  },
  {
    number: "02",
    title: "Design is thinking made visible",
    description: "Aesthetics follow intention. We craft systems that communicate before they decorate.",
  },
  {
    number: "03",
    title: "Restraint outperforms excess",
    description: "The brands that endure know what to leave out. We build deliberately, not abundantly.",
  },
  {
    number: "04",
    title: "Partnership, not production",
    description: "We work with, not for. Every engagement is a collaboration that elevates both sides.",
  },
];

export function PhilosophySection() {
  return (
    <section className="section-padding bg-section-secondary">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="caption text-muted-foreground">Philosophy</span>
            <h2 className="headline-section mt-4">
              How we think
            </h2>
            <Link
              to="/philosophy"
              className="inline-block body-small text-muted-foreground hover:text-foreground transition-colors duration-300 mt-8"
            >
              Read our philosophy
            </Link>
          </div>

          {/* Principles */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {principles.map((principle) => (
                <div key={principle.number} className="group">
                  <span className="caption text-muted-foreground">
                    {principle.number}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mt-3 mb-4">
                    {principle.title}
                  </h3>
                  <p className="body-base text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
