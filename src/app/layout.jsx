import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "THEO_AB.",
  description: "Theodore Abitbol's portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--bg)] text-[var(--text)]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
