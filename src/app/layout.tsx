export const metadata = {
  title: "Resumez | Automated Job Applications",
  description: "Automated Job Applications",
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
