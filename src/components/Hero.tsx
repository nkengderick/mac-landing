"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const Hero: FC = () => {
  const t = useTranslations();

  return (
    <section className="relative h-1/2 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background-image.jpg')" }} // Update with your background image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 md:mb-0 md:w-1/2"
        >
          <img
            src="/assets/animated-image.png" // Update with your animated image path
            alt={t("hero.title")}
            className="w-full max-w-xs md:max-w-md"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            {t("hero.subtitle")}
          </p>

          <h2 className="text-white text-2xl md:text-3xl mb-6">
            {t("hero.hub_for")}
            <span className="block md:inline-block">
              <TypeAnimation
                className="pl-2 text-yellow-400"
                sequence={[
                  t("hero.animated_texts.0"),
                  1000,
                  t("hero.animated_texts.1"),
                  1000,
                  t("hero.animated_texts.2"),
                  1000,
                  t("hero.animated_texts.3"),
                  1000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </span>
          </h2>

          <div className="flex justify-center md:justify-start space-x-4">
            <Button variant="default" className="text-lg px-6 py-3">
              {t("hero.buttons.get_started")}
            </Button>
            <Button variant="outline" className="text-lg px-6 py-3">
              {t("hero.buttons.learn_more")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
