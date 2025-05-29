import Header from "@/components/Header";
import "./globals.css";
import {Inter} from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subset :["latin"]});

export const metadata = {
  title: "FinSage",
  description: "Personal Finance Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${inter.className}`}
        >
        <Header />
        {children}
        <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">Made with 💗 by Manu
              <p></p>
            </div>
        </footer>
      </body>
    </html>

    </ClerkProvider>
  );
}
