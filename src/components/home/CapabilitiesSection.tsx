const capabilities = [
  {
    name: "Brand Systems",
    description: "Strategy, positioning, and visual identity that creates coherence across every touchpoint.",
  },
  {
    name: "Web Platforms",
    description: "Performance-first websites built to convert, scale, and reflect strategic intent.",
  },
  {
    name: "Digital Creatives",
    description: "Design and content that communicates with clarity and builds lasting impressions.",
  },
  {
    name: "SEO Foundations",
    description: "Technical and strategic groundwork for organic visibility and authority.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="section-padding bg-section-primary">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="caption text-muted-foreground">Capabilities</span>
            <h2 className="headline-section mt-4">
              What we build
            </h2>
            <p className="body-large text-muted-foreground mt-6 max-w-sm">
              Four interconnected systems designed to create clarity and drive considered growth.
            </p>
          </div>

          {/* Capabilities List */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {capabilities.map((capability, index) => (
                <div
                  key={capability.name}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 py-8 border-t border-border first:border-t-0 lg:first:border-t"
                >
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {capability.name}
                  </h3>
                  <p className="body-base text-muted-foreground">
                    {capability.description}
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
