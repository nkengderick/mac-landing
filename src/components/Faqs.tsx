"use client";

import { FC } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { useTranslations } from "next-intl";

const FAQs: FC = () => {
  const t = useTranslations('FAQs');

  const faqs = [
    { question: t('faq1.question'), answer: t('faq1.answer') },
    { question: t('faq2.question'), answer: t('faq2.answer') },
    { question: t('faq3.question'), answer: t('faq3.answer') },
    { question: t('faq4.question'), answer: t('faq4.answer') },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold text-gray-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
