import "./globals.css";
import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Open_Sans } from "next/font/google";
import Footer from "../components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400"],
});

const openSans = Open_Sans({
    variable: "--font-opensans",
    subsets: ["latin"],
    weight: ["400"],
});

const title = "UWB ACM";
const description =
    "ACM UWB is a student-run club at the University of Washington Bothell that aims to provide a community for students to learn and grow in the computer science field.";
// const url = "https://acm.uwb.edu/";

export const metadata: Metadata = {
    title,
    description,
    // alternates: {
    //     canonical: url,
    // },
    // twitter: {
    //     title,
    //     description,
    //     card: "summary_large_image",
    //     images: {
    //         url: "https://uwbhacks.com/card-image.webp",
    //         width: 1984,
    //         height: 1208,
    //     },
    // },
    openGraph: {
        // url,
        title,
        description,
        locale: "en_US",
        // images: {
        //     url: "https://uwbhacks.com/card-image.webp",
        //     width: 1984,
        //     height: 1208,
        // },
    },
    robots: "max-image-preview:large",
};

export const viewport: Viewport = {
    themeColor: "#000000",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${openSans.variable} antialiased w-full`}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
