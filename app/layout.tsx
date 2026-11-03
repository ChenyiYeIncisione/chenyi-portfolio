import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = { title:'CHENYI YE — Digital Craft Archive',description:'The portfolio of Chenyi Ye — hand engraver, enamel artist and jewellery designer.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><header className="site-header"><Link className="brand" href="/" aria-label="Chenyi Ye homepage"><span>CHENYI YE</span><small>DIGITAL CRAFT ARCHIVE</small></Link><nav aria-label="Main navigation"><Link href="/works">Works</Link><Link href="/craftsmanship">Craftsmanship</Link><Link href="/about">About</Link></nav></header>{children}<footer className="footer"><span>CHENYI YE <small>© {new Date().getFullYear()}</small></span><span>Hand Engraving · Enamelling · Jewellery Design</span><Link href="/about">About / Contact ↗</Link></footer></body></html>}
