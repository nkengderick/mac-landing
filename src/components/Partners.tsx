"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Partners: FC = () => {
  const t = useTranslations();

  // Define categories
  const categories = [
    "influencers",
    "delivery_services",
    "intellectual_property",
    "arts_creators",
    "payment_gateways"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
          {t("partners.title")}
        </h2>

        {/* Grid layout for partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) =>
            Object.keys(t(`partners.categories.${category}.partners`)).map((key) => {
              const imagePath = t(`partners.categories.${category}.partners.${key}.image`);
              const imageAlt = t(`partners.categories.${category}.partners.${key}.name`);

              // Ensure imagePath is a valid URL or starts with a leading slash
              if (!imagePath.startsWith('/') && !/^https?:\/\//.test(imagePath)) {
                console.error(`Invalid image path: ${imagePath}`);
                return null;
              }

              return (
                <Card key={key} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  {/* Partner Logo */}
                  <CardHeader className="flex justify-center items-center p-6">
                    <Image
                      src={imagePath}
                      alt={imageAlt}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </CardHeader>

                  {/* Partner Information */}
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {t(`partners.categories.${category}.partners.${key}.name`)}
                    </CardTitle>
                    <CardDescription className="text-gray-700 mt-2">
                      {t(`partners.categories.${category}.partners.${key}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Partners;
