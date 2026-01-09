import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const projects = caseStudies.slice(0, 3);

export function WorkSection() {
  return (
    <section className="section-padding bg-section-muted relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="caption text-muted-foreground">Selected Work</span>
            <h2 className="headline-section mt-4">
              Proof, not promises
            </h2>
          </div>
          <Link
            to="/work"
            className="body-small link-underline"
          >
            View all projects
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="block group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-14 border-t border-border hover:bg-card transition-colors duration-300 -mx-6 px-6 lg:-mx-12 lg:px-12">
                <div className="lg:col-span-1">
                  <span className="caption text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="headline-card group-hover:opacity-70 transition-opacity duration-300">
                    {project.client}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="body-base text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
