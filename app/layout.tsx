import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', // шаблон для всіх сторінок
    default: 'Acme Dashboard',       // заголовок за замовчуванням
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://your-domain.com'), // свій домен
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
