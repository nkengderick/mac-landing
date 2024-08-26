"use client";

import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Galleries: FC = () => {
  const t = useTranslations();

  // Define gallery keys or fetch dynamically if possible
  const galleryKeys = ['0', '1', '2']
  const galleryItems = galleryKeys.map((key) => ({
    title: t(`galleries.items.${key}.title`),
    image: t(`galleries.items.${key}.image`),
    description: t(`galleries.items.${key}.description`),
  }));

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
          {t("galleries.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((gallery, index) => (
            <Card key={index} className="flex flex-col bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <CardHeader className="relative w-full h-60">
                <Image
                  src={gallery.image}
                  alt={gallery.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                  <CardTitle className="text-xl font-semibold">{gallery.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">{gallery.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galleries;
