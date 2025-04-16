"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

interface ProjectFilterProps {
  projects: {
    id: number
    title: string
    description: string
    tags: string[]
    imageSrc: string
    link: string
    githubLink?: string
    category: string
  }[]
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "ui", label: "UI/UX Design" },
    { id: "mobile", label: "Mobile" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <motion.div key={filter.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageSrc={project.imageSrc}
              link={project.link}
              githubLink={project.githubLink}
              delay={0.1 * (index + 1)}
            />
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
