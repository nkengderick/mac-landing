"use client";

import { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const Blogs: FC = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

  const handleOpen = (blogKey: string) => {
    setSelectedBlog(blogKey);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBlog(null);
  };

  const blog = t(`blogs.articles.${selectedBlog}`, {}, { fallback: {} });

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          {t("blogs.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(t("blogs.articles")).map((key) => (
            <Card key={key} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex justify-center items-center p-4">
                <Image
                  src={t(`blogs.articles.${key}.image`)}
                  alt={t(`blogs.articles.${key}.title`)}
                  width={100}
                  height={100}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {t(`blogs.articles.${key}.title`)}
                </CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  {t(`blogs.articles.${key}.summary`)}
                </CardDescription>
                <Button variant="default" className="mt-4" onClick={() => handleOpen(key)}>
                  Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen} className="relative">
          <DialogTitle className="text-2xl font-bold">{blog.title}</DialogTitle>
          <DialogContent className="p-6">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={300}
              className="object-cover mb-4"
            />
            <p>{blog.content}</p>
            <Button variant="outline" className="mt-4" onClick={handleClose}>
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Blogs;
