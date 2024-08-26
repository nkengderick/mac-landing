"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Services: FC = () => {
  const t = useTranslations();

  const services = [
    "sell",
    "learn",
    "export",
    "promotions"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
          {t("services.title")}
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {services.map((service) => (
            <Card key={service} className="hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
              
              {/* Image on the Left */}
              <CardHeader className="md:w-1/3 flex justify-center items-center p-6">
                <Image
                  src={t(`services.items.${service}.image`)}
                  alt={t(`services.items.${service}.title`)}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </CardHeader>
              
              {/* Content on the Right */}
              <CardContent className="md:w-2/3 p-6">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {t(`services.items.${service}.title`)}
                </CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  {t(`services.items.${service}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
