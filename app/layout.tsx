import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Azure (x13) — Software Developer + 3D Artist', description: 'Portfolio of Azure (x13), a software developer and digital artist based in Ottawa.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
