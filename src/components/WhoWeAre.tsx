"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const WhoWeAre: FC = () => {
    const t = useTranslations();

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">

                {/* Left Side - Text Content */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        {t("who_we_are.title")}
                    </h2>
                    <p className="text-2xl font-semibold text-gray-600 mb-6">
                        {t("who_we_are.tagline")}
                    </p>
                    <p className="text-lg text-gray-700">
                        {t("who_we_are.description")}
                    </p>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    className="md:w-1/2 mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={t("who_we_are.image_url")}
                        alt={t("who_we_are.image_alt")}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg self-center"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAre;
