import { ProjectFilter } from "@/components/project-filter"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            All <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A comprehensive showcase of my work across various technologies and design disciplines.
          </p>
        </div>

        <ProjectFilter projects={projects} />
      </div>
    </main>
  )
}