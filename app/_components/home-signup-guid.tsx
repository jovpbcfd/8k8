"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { data } from "@/data/signup-guide";
// import Image from "next/image";

export default function StepsGuide() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(".step");
      let currentStep = 1;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          currentStep = index + 1;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-6xl mx-auto text-white p-2 md:p-0 lg:sections-gutter-y">
      <div className="md:mt-5">
        <h3 className="font-[900] text-[#04494C] uppercase text-center text-lg lg:mb-8 lg:text-2xl">
          Detailed Step-by-Step Guide on Joining Panalobet Casino
        </h3>
        <p className="mb-2 text-black md:mb-4">
          Joining Panalobet Casino lets you start playing your preferred games
          in no time by a simple and fast approach. Here is a thorough, exact
          tutorial on how to register for your account and savor the fascinating
          universe of online gaming.
        </p>
        <div className="relative w-full p-2 md:p-6 md:mt-4">
          <div className="relative flex flex-col w-full">
            <div className="hidden absolute top-0 bottom-0 left-[50%] w-[2px] bg-gradient-to-r from-[#04494C] via-[#09ABB2] to-[#04494C] lg:flex"></div>
            {data.map((step) => (
              <motion.div
                key={step.id}
                className={cn(
                  "relative flex flex-col items-stretch gap-4 step py-8 md:py-12 lg:flex-row",
                  activeStep === step.tag ? "font-[400]" : "text-gray-500"
                )}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: activeStep === step.tag ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full md:w-[45%] flex items-center justify-center">
                  <div className="w-full h-[300px] text-black border border-black/80 rounded-md border-dashed flex items-center justify-center">
                    Image 1128x600
                  </div>
                </div>

                <div className="hidden relative lg:flex lg:flex-col lg:items-center w-[10%]">
                  <div
                    className={cn(
                      "z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all",
                      activeStep === step.tag
                        ? "bg-[#04494C] text-white border-[#04494C] font-bold"
                        : "bg-[#04494C]/90 text-white/90 border-gray-300"
                    )}
                  >
                    0{step.tag}
                  </div>
                </div>

                <div className="w-full md:w-[45%] flex flex-col items-start">
                  <h3 className="text-md text-[#04494C] uppercase font-bold text-center md:text-left md:font-[800] md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-justify text-black text-pretty md:mt-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
