"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SkillBar } from "@/components/skill-bar"
import { Button } from "@/components/ui/button"

interface SkillsTabsProps {
  skills: {
    category: string
    items: {
      name: string
      percentage: number
    }[]
  }[]
}

export function SkillsTabs({ skills }: SkillsTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {skills.map((category, index) => (
          <Button
            key={index}
            variant={activeTab === index ? "default" : "outline"}
            onClick={() => setActiveTab(index)}
            className="rounded-full"
          >
            {category.category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 col-span-1 md:col-span-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills[activeTab].items.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} delay={0.1 * (index + 1)} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
