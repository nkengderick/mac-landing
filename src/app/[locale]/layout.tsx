import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className="relative">
        <NextIntlClientProvider messages={messages}>
          <div className="pt-16"> {/* Adjust padding-top based on header height */}
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
