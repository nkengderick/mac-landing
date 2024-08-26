"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Subscribe: FC = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          {t("subscribe.title")}
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          {t("subscribe.subtitle")}
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center">
          <Input 
            type="email" 
            placeholder={t("subscribe.placeholder")} 
            className="w-full mb-4 sm:mb-0 sm:mr-4"
          />
          <Button variant="default" className="w-full sm:w-auto">
            {t("subscribe.button_text")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
