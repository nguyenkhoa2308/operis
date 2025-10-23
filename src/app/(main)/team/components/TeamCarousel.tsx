"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Code, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { TeamMember } from "@/types";

interface TeamCarouselProps {
  team: TeamMember[];
}

export default function TeamCarousel({ team }: TeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { align: "center" },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden px-4 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-6 md:py-8" ref={emblaRef}>
        <div className="flex">
          {team.map((member, index) => {
            const centerIndex = selectedIndex % team.length;
            const isCenter = index === centerIndex;
            return (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] min-w-0 px-2 sm:px-3 md:px-4"
                onClick={() => scrollToIndex(index)}
              >
                <div className="py-3 sm:py-4 md:py-6">
                  <Card
                    className={`border-2 border-gray-100 hover:border-[#7A77FF] hover:shadow-lg transition-all h-full cursor-pointer select-none ${
                      isCenter
                        ? "md:scale-110 border-[#7A77FF] shadow-xl"
                        : "md:scale-90 md:opacity-70"
                    }`}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gradient-to-br from-[#7A77FF]/20 to-[#3DDAB4]/20">
                        <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#7A77FF]">
                          {member.name.charAt(0)}
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="font-bold mb-1 text-sm sm:text-base">{member.name}</h3>
                        <p className="text-xs sm:text-sm text-[#3DDAB4] font-semibold mb-2 sm:mb-3">
                          {member.role}
                        </p>

                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs text-gray-600 mb-1.5 sm:mb-2">
                          <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{member.expertise}</span>
                        </div>

                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs text-gray-500">
                          <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{member.projects}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center hover:border-[#3DDAB4] hover:bg-[#3DDAB4] hover:text-white transition-all z-30"
        title="Lùi 1 thẻ"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center hover:border-[#3DDAB4] hover:bg-[#3DDAB4] hover:text-white transition-all z-30"
        title="Tiến 1 thẻ"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}
