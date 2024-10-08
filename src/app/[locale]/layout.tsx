import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body suppressHydrationWarning={true} className="relative">
          <div className="pt-20"> {/* Adjust padding-top based on header height */}
            <div className='fixed left-0 top-4 z-50'>
            </div>
            {children}
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
