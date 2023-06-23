import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: [
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
    ],
});

export const metadata = {
    title: "PT  Sabreena Amaa Karya",
    description:
        "PT  Sabreena Amaa Karya adalah perusahaan yang mengkhususkan diri dalam bidang kontraktor rumah dan gedung, serta penyedia ornamen besi, ornamen krawangan masjid, ornamen plafond, dan pembuatan sumur bor. Kami memiliki tim ahli yang terampil dan berpengalaman dalam membangun rumah dan gedung dengan standar yang tinggi serta memastikan kepuasan pelanggan.",
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body
                className={
                    poppins.className
                }
            >
                {children}
            </body>
        </html>
    );
}
