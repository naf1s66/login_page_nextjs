// layout.js
import "./globals.css";
import React from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
    title: "Login",
    description: "Users can sign in",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

