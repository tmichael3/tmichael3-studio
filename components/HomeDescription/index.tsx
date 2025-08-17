"use client";

import { motion } from "framer-motion";

export default function HomeDescription() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Photography & Videography with a Personal Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Offering professional personal, corporate, and wedding photography
            services tailored to your unique needs. We blend technical expertise
            with artistic vision to create timeless images that tell your story.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
