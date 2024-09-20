import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Interior Design Generator | Julian Re",
  description: "Generate interior design images with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="py-4 text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://julianre.vercel.app/"
              target="_blank"
              className="underline"
            >
              Julian Re
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
