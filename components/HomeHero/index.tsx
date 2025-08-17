"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export default function HomeHero() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  return (
    <section>
      <div className="md:container md:mx-auto md:px-4">
        <div className="h-[65vh] md:h-[55vh] lg:h-[65vh] flex flex-col md:flex-row overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative flex-1 group cursor-pointer overflow-hidden"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredButton === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} photography service`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end items-center p-8 md:p-12 text-white text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {service.title}
                  </h2>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 w-fit"
                    onMouseEnter={() => setHoveredButton(index)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <Link href={service.href}>{service.description}</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
