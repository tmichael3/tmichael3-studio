"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProjectCard } from "../ProjectCard";
import { motion } from "framer-motion";
import { getRecentProjects, type Project } from "@/lib/projects";
import { CustomLightbox } from "../Lightbox";

export default function RecentWork() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const recentProjects = getRecentProjects();

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our latest photography and videography projects showcasing
            our diverse range of work across all specialties.
          </p>

          {/* Recent Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Button asChild size="lg" className="px-8 py-3">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <CustomLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        project={currentProject}
        initialIndex={currentImageIndex}
      />
    </section>
  );
}
