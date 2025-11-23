import './globals.css';

export const metadata = {
  title: 'Kailash Reverie',
  description: 'A serene depiction of a pilgrim resting at Mount Kailash beneath the grace of Lord Shiva.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
