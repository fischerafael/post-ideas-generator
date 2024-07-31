import "./globals.css";

export const metadata = {
  title: "Post Ideas Generator",
  description: "Generate Posts Instantly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
