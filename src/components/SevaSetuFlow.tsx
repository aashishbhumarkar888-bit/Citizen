"use client";
import { Mic, Search, Upload, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function SevaSetuFlow({ activeStep = 1 }: { activeStep?: number }) {
  const steps = [
    { num: 1, label: 'Ask', icon: Mic },
    { num: 2, label: 'Understand', icon: Search },
    { num: 3, label: 'Prepare', icon: Upload },
    { num: 4, label: 'Apply', icon: FileText },
  ];

  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto relative px-4">
      <div className="absolute top-6 left-8 right-8 h-1 bg-[#0F172A]/10 -z-10 rounded-full overflow-hidden">
         <motion.div 
           className="h-full bg-[#F97316]"
           initial={{ width: 0 }}
           animate={{ width: `${((activeStep - 1) / 3) * 100}%` }}
           transition={{ duration: 0.5, ease: "easeInOut" }}
         />
      </div>
      
      {steps.map(step => {
        const Icon = step.icon;
        const isActive = step.num === activeStep;
        const isPast = step.num < activeStep;
        
        return (
          <div key={step.num} className="flex flex-col items-center gap-2 relative">
            <motion.div 
              className={clsx(
                "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300 z-10 bg-white",
                isActive ? "border-[#F97316] text-[#F97316]" : 
                isPast ? "border-[#15803D] text-[#15803D] bg-green-50" : "border-[#0F172A]/20 text-[#0F172A]/40"
              )}
              initial={false}
              animate={{
                scale: isActive ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Icon className="w-5 h-5" />
            </motion.div>
            <span className={clsx("text-xs font-semibold", isActive ? "text-[#F97316]" : isPast ? "text-[#15803D]" : "text-[#0F172A]/40")}>
              {step.label}
            </span>
            {isActive && (
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 text-[10px] font-bold text-[#F97316] uppercase tracking-wider whitespace-nowrap"
              >
                You are here
              </motion.span>
            )}
          </div>
        );
      })}
    </div>
  );
}
