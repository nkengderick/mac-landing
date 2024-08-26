"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"; // Adjust the import path as necessary

const Partners: FC = () => {
  const t = useTranslations();

  // Define categories
  const categories = [
    "influencers",
    "flight_agencies",
    "rtv_stations",
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

        <Carousel>
          <CarouselContent>
            {categories.map((category) => (
              Object.keys(t(`partners.categories.${category}.partners`)).map((key) => {
                const imagePath = t(`partners.categories.${category}.partners.${key}.image`);
                const imageAlt = t(`partners.categories.${category}.partners.${key}.name`);

                // Ensure imagePath is a valid URL or starts with a leading slash
                if (!imagePath.startsWith('/') && !/^https?:\/\//.test(imagePath)) {
                  console.error(`Invalid image path: ${imagePath}`);
                  return null;
                }

                return (
                  <CarouselItem key={key}>
                    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
                      {/* Partner Logo */}
                      <CardHeader className="md:w-1/4 flex justify-center items-center p-6">
                        <Image
                          src={imagePath}
                          alt={imageAlt}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </CardHeader>

                      {/* Partner Information */}
                      <CardContent className="md:w-3/4 p-6">
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {t(`partners.categories.${category}.partners.${key}.name`)}
                        </CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          {t(`partners.categories.${category}.partners.${key}.description`)}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="p-2 bg-gray-700 text-white rounded-full">Prev</button>
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="p-2 bg-gray-700 text-white rounded-full">Next</button>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
