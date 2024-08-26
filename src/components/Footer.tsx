"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer: FC = () => {
  const t = useTranslations();

  return (
    <footer className="py-10 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">
              {t("footer.about_us")}
            </h3>
            <p className="text-gray-400 max-w-xs">
              We are MAC (Marketing Arts and Culture), the Home of Creativity. Our mission is to boost cultural exports by connecting local artisans with global enthusiasts.
            </p>
          </div>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t("footer.contact_us")}
              </h3>
              <ul>
                <li className="mb-2">
                  <Link href="/contact" legacyBehavior>
                    <a className="hover:underline">{t("footer.contact_us")}</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/privacy-policy" legacyBehavior>
                    <a className="hover:underline">{t("footer.privacy_policy")}</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/terms-of-service" legacyBehavior>
                    <a className="hover:underline">{t("footer.terms_of_service")}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500">
          {t("footer.rights_reserved")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
