"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeServiceCardData } from "@/data/services";

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional photography and videography services tailored to your
            needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {homeServiceCardData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  {service.price}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
