import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Main Footer Content */}
      <div className="w-full flex flex-col md:flex-row min-h-[500px]">
        
        <div className="w-full md:w-[45%] bg-[#F3EAE1] p-10 md:p-16 flex flex-col justify-between font-optima text-gray-900">
          
          {/* Logo */}
          <div className="mb-10">
            <Image 
              src="/logo.png" 
              alt="Exotica Logo" 
              width={160} 
              height={45} 
              className="object-contain" 
            />
          </div>

          {/* Address Section */}
          <div className="py-8 border-b border-gray-300">
            <h4 className="font-bold text-xl mb-3">Corporate Office</h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
              H-63, Sector 63, Noida,<br />
              Uttar Pradesh 201301
            </p>
          </div>

          {/* Contact Details Section */}
          <div className="py-8 border-b border-gray-300 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-xl mb-3">Phone Number</h4>
              <p className="text-gray-600 text-sm">123456789</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3">Email</h4>
              <a href="mailto:info@exoticahousing.in" className="text-gray-600 text-sm hover:text-black transition-colors">
                info@vkrealtor.in
              </a>
            </div>
          </div>

          {/* Socials & App Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-3">
              <SocialIcon icon="fb" />
              <SocialIcon icon="ig" />
              <SocialIcon icon="yt" />
              <SocialIcon icon="x" />
              <SocialIcon icon="in" />
            </div>

            {/* App Badges */}
            {/* <div className="flex gap-3">
              <Image src="/app-store-badge.png" alt="App Store" width={110} height={35} className="cursor-pointer" />
              <Image src="/play-store-badge.png" alt="Google Play" width={110} height={35} className="cursor-pointer" />
            </div> */}
          </div>
        </div>

        <div className="w-full md:w-[55%] bg-[#4e7153] flex items-center justify-center text-white py-20 md:py-0 relative">
          
          {/* Center Column Links - Grid ki jagah simple flex column lagaya */}
          <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full">
            <FooterLink href="/about" text="About Us" />
            <FooterLink href="/residential" text="Residential" />
            <FooterLink href="/commercial" text="Commercial" />
            <FooterLink href="/plots" text="Plots" />
          </div>

        </div>
      </div>

      {/* === BOTTOM COPYRIGHT BAR === */}
      <div className="bg-black border-t border-white/10 text-[#fff] text-[10px] md:text-xs py-5 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-2 font-optima tracking-wider">
        <Link href="/disclaimer" className="hover:text-white transition-colors">
          Disclaimer
        </Link>
        <p className="text-[#fff]">Copyright 2026, All Right Reserved vkrealtor.</p>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link 
      href={href} 
      className="font-freight text-3xl md:text-4xl tracking-wide hover:text-gray-400 hover:scale-105 transition-all duration-300"
    >
      {text}
    </Link>
  );
}

// Sub-component for Social Icons
function SocialIcon({ icon }: { icon: string }) {
  const icons = {
    fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    ig: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M21.5 6.5l.01-.011 M17.5 2h-11A4.5 4.5 0 0 0 2 6.5v11A4.5 4.5 0 0 0 6.5 22h11a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 17.5 2z",
    yt: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
    x: "M4 4l11.73 16h5L9 4zm11 14l-9-12h-3l9 12z", 
    in: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
  };

  return (
    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
        <path d={icons[icon as keyof typeof icons]}></path>
      </svg>
    </a>
  );
}