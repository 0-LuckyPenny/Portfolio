"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageSrc: string
  link: string
  githubLink?: string
  delay?: number
}

export function ProjectCard({
  title,
  description,
  tags = [], // Provide default empty array
  imageSrc,
  link,
  githubLink,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border h-full flex flex-col"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title || "Project"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{title || "Untitled Project"}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description || "No description available"}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags &&
              tags.map((tag, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                  {tag}
                </span>
              ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Code
                <Github className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
