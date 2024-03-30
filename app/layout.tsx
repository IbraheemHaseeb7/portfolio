"use client";

import { store } from "@/state/store/store";
import "./globals.css";
import { Space_Mono } from "next/font/google";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={space_mono.className}>
                <Provider store={store}>
                    <Navbar />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
