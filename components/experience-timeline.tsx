"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      role: "Senior Full Stack Engineer",
      company: "Bluetronix",
      period: "2021 - Present",
      description:
          ["Led the development of a cloud-based SaaS platform, overseeing the full application lifecycle from front-end (React/Next.js) to back-end (Python/FastAPI) and deployment (AWS/GCP).",
          "Integrated machine learning models for personalized user experiences, leveraging TensorFlow and PyTorch for recommendation systems.",
          "Implemented CI/CD pipelines with Jenkins and GitLab CI for seamless integration and deployment.",
          "Optimized database performance with PostgreSQL and Redis, ensuring quick data retrieval and handling high traffic loads.",
          "Coordinated with cross-functional teams to improve application scalability using Docker and Kubernetes.",
          "Spearheaded performance monitoring with Prometheus and Grafana, ensuring high availability and quick issue resolution."],
      technologies: ["FastAPI", "Next.js", "PyTorch", "CI/CD pipeline", "Docker", "Kubernetes"],
    },
    {
      id: 2,
      role: "Full Stack Engineer",
      company: "Leidos",
      period: "2019 - 2021",
      description:
        ["Developed web applications using Django for the back-end and React.js for the front-end, ensuring seamless interactions between components.",
          "Built RESTful APIs and optimized SQL queries for high performance and reliability.",
          "Led efforts in transitioning legacy applications to cloud infrastructure using AWS services like EC2, RDS, and S3.",
          "Collaborated with the DevOps team to containerize the application with Docker and orchestrate deployments with Kubernetes.",
          "Conducted rigorous unit and integration testing using PyTest and Jest to maintain high-quality code.",
          "Worked within Agile teams, contributing to sprint planning, reviews, and retrospectives to improve the development process.",],
      technologies: ["Django", "React", "EC2", "Kubernetes", "Pytest"],
    },
    {
      id: 3,
      role: "AI/ML Engineer",
      company: "Symbio",
      period: "2017 - 2019",
      description:
        [
        "Designed and developed machine learning models for predictive analytics and natural language processing using TensorFlow and PyTorch.",
        "Deployed and monitored models with MLflow and Kubeflow, ensuring scalability and reliability in production.",
        "Utilized Scikit-learn for data preprocessing and model selection, achieving up to 95% model accuracy on certain projects.",
        "Developed data pipelines with Pandas and NumPy to clean and process large datasets for training and evaluation.e",
        "Implemented NLP algorithms using spaCy and HuggingFace transformers for automated text classification.",
        "Provided detailed reports on model performance, data analysis, and improvement strategies to key stakeholders.",
        ],
      technologies: ["TensorFlow", "MLflow", "NumPy", "Pandas", "NLP algorithms"],
    },
    {
      id: 4,
      role: "Data Scientist",
      company: "Netsmartz",
      period: "2017 - 2019",
      description:
        ["Led data analysis and machine learning model development projects, working with large datasets to extract valuable insights for decision-making.",
          "Built predictive models using Scikit-learn and deployed them on Apache Spark clusters for scalability.",
          "Used SQL and Pandas for data extraction, manipulation, and cleaning, ensuring high-quality datasets for analysis.",
          "Visualized data insights using Matplotlib and Seaborn, presenting findings in clear, actionable formats for non-technical stakeholders.",
          "Developed and optimized ETL pipelines for data processing, improving data flow and system efficiency.",
          "Collaborated with engineering teams to deploy models in production, using Jenkins for continuous integration and deployment."
          ],
      technologies: ["ETL pipelines", "Jenkins", "Pandas", "Scikit-learn", "SQL"],
    },
    {
      id: 5,
      role: "Python Engineer",
      company: "Cognizant ",
      period: "2017 - 2019",
      description:
        [ "Developed and maintained back-end applications using Python with Flask and Django, ensuring optimal performance and scalability.",
          "Designed and implemented RESTful APIs, working with PostgreSQL and MySQL to ensure efficient data storage and retrieval.",
          "Contributed to containerization and deployment processes using Docker and Kubernetes, streamlining the development workflow.",
          "Participated in code reviews, ensuring code quality and best practices through the use of TDD and unit testing frameworks.",
          "Utilized AWS services for application deployment, including EC2, Lambda, and RDS, ensuring high availability and scalability.",
          ],
      technologies: ["Flask", "Python", "PostgreSQL", "Docker", "TDD"],
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-4 top-0 bottom-0 w-0.5 bg-border" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative flex flex-col md:flex-row gap-8 mb-12"
        >
          {/* Timeline dot */}
          <div className="absolute left-4 md:left-4 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>

          {/* Content */}
          <div className="pl-16 md:pl-16">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-muted-foreground mb-4">
                {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs text-primary">✓</span>
                      </div>
                      <span className="text-sm sm:text-base">{desc}</span>
                    </li>
                ))}
              </p>
              <div className="flex flex-wrap gap-2 justify-start">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
