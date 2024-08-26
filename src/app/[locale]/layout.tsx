import { NextIntlClientProvider } from 'next-intl';
import '../globals.css'
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
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <div className="">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}