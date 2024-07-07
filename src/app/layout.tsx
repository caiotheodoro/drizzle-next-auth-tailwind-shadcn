import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/lib/query-provider"
import Nav from "@/components/nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<ComponentProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 lg:px-48">
          <Providers>
            <Nav />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
