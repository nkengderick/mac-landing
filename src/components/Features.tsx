"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Features: FC = () => {
  const t = useTranslations();

  const features = [
    "multilingual_support",
    "security_trust",
    "chat_bot",
    "analytics_insights"
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          {t("features.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature} className="hover:shadow-lg transition-shadow flex-col justify-center duration-300">
              <CardHeader className="flex justify-center items-center h-32"> {/* Adjust height as needed */}
                <Image
                  src={t(`features.${feature}.image`)}
                  alt={t(`features.${feature}.title`)}
                  width={80}
                  height={80}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {t(`features.${feature}.title`)}
                </CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  {t(`features.${feature}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
