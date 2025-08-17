"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { reviews, type Review } from "@/data/reviews";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What Our Clients Say
          </h2>

          {/* Review Content */}
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevReview}
                className="shrink-0 hover:bg-accent"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              {/* Review Content */}
              <div className="flex-1 mx-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center gap-8 md:flex-row md:gap-12"
                  >
                    {/* Client Photo - Top on mobile, left on desktop */}
                    <div className="shrink-0 order-1 md:order-1">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-border">
                        <Image
                          src={reviews[currentReview].image}
                          alt={`${reviews[currentReview].name} profile photo`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 96px, 128px"
                        />
                      </div>
                    </div>

                    {/* Review Text - Below photo on mobile, right on desktop */}
                    <div className="flex-1 text-center md:text-left order-2 md:order-2">
                      {/* Review Text */}
                      <blockquote className="text-lg md:text-xl text-foreground mb-4 leading-relaxed">
                        &ldquo;{reviews[currentReview].text}&rdquo;
                      </blockquote>

                      {/* Client Name and Service */}
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">
                          {reviews[currentReview].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {reviews[currentReview].service} Photography
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={nextReview}
                className="shrink-0 hover:bg-accent"
                aria-label="Next review"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Review Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {reviews.map((review: Review, index: number) => (
                <button
                  key={review.id}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
