import './globals.css';
import Link from 'next/link';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Chenyi Ye | Digital Craft Archive',description:'Portfolio of Chenyi Ye — Hand Engraver, Enamel Artist and Jewellery Designer. Selected works, craftsmanship and professional background.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><header className="museum-header"><div className="museum-header-inner"><Link className="museum-brand" href="/">CHENYI YE<span>DIGITAL CRAFT ARCHIVE</span></Link><nav aria-label="Main navigation"><Link href="/works">Works</Link><Link href="/craftsmanship">Craftsmanship</Link><Link href="/about">About</Link></nav></div></header>{children}<footer className="museum-footer"><Link href="/">CHENYI YE</Link><span>Hand Engraver · Enamel Artist · Jewellery Designer</span><Link href="/about">About / CV & Contact ↗</Link></footer></body></html>}
