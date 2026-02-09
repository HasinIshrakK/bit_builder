import React, { useState } from "react";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const SmartFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do you take on client projects?",
      answer:
        "Yes, but we work on a limited number of projects to ensure quality is never compromised. We focus on depth, not just delivery.",
      tag: "Services",
    },
    {
      question: "Can students join your team?",
      answer:
        "Absolutely. A strong learning mindset matters more to us than formal degrees. Curiosity and commitment come first.",
      tag: "Community",
    },
    {
      question: "How do you handle complex tech stacks?",
      answer:
        "We don’t chase trends. We choose the right tools for the right problems to ensure long-term stability and maintainability.",
      tag: "Technical",
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Area */}
        <SectionTitle
          title={"People Ask Us "}
          subTitle={"// Real questions. Honest answers."}
        />

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-white/10 transition-all duration-500 ${openIndex === index ? "pb-8" : "pb-4"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-slate-500">
                    0{index + 1}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl font-bold transition-colors ${openIndex === index ? "text-fuchsia-400" : "text-white group-hover:text-fuchsia-300"}`}
                  >
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`p-2 rounded-full border transition-all ${openIndex === index ? "border-fuchsia-500 rotate-180" : "border-white/20"}`}
                >
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              {/* Expandable Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="pl-12 flex gap-4 items-start">
                  <CheckCircle2
                    className="text-fuchsia-500 mt-1 shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-md bg-fuchsia-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      Verified Answer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartFAQ;
