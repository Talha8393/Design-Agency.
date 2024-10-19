import "./globals.css";

export const metadata = {
  title: "UI/UX Design Services",
  description: "Get high-quality, productized UI/UX design services with fast delivery.Customized design packages crafted for businesses of all sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
