import './globals.scss';

export const metadata = {
  title: 'ANNEX',
  description: 'Let’s Give Your Brand Some Character.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
