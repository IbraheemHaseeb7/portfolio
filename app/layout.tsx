import "./globals.css";
import { Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import CursorTracker from "@/components/CursorTracker";
import ReduxProvider from "@/components/ReduxProvider";
import Options from "@/components/Options";
import { Analytics } from "@vercel/analytics/react";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "IbraheemH Portfolio",
        template: "%s | IbraheemH",
    },
    description:
        "Hi, this is Ibraheem Bin Haseeb. Full Stack Engineer and a Tech Enthusiast. I love to build things and solve problems.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={space_mono.className}
                style={{ width: "100%", overflowX: "hidden" }}
            >
                <ReduxProvider>
                    <Analytics />
                    <Navbar />
                    <CursorTracker />
                    <Options />
                    {children}
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    );
}
