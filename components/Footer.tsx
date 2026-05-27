import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      
      {/* === MAIN FOOTER (Black Background, Less Height) === */}
      <div className="w-full bg-[#0a0a0a] py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* COLUMN 1: Logo & About */}
          <div className="flex flex-col gap-6">
            <Image 
              src="/logo1.png" // Apni logo file ka path check kar lena
              alt="VK Realtor Logo" 
              width={140} 
              height={40} 
              className="object-contain" 
            />
            <p className="font-optima text-gray-400 text-sm leading-relaxed max-w-[250px]">
              Empowering dreams with leading infrastructure and thoughtful premium living spaces.
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-freight text-xl text-[#dcb153] mb-2 tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/residential" text="Residential" />
              <FooterLink href="/commercial" text="Commercial" />
              <FooterLink href="/plots" text="Plots" />
            </div>
          </div>

          {/* COLUMN 3: Address & Social Icons */}
          <div className="flex flex-col gap-4">
            <h4 className="font-freight text-xl text-[#dcb153] mb-2 tracking-wide">Contact Us</h4>
            
            <div className="font-optima text-gray-400 text-sm leading-relaxed">
              <p className="text-gray-400">H-63, Sector 63, Noida,</p>
              <p className="text-gray-400">Uttar Pradesh 201301</p>
            </div>
            
            <div className="font-optima text-gray-400 text-sm mt-2">
              <a href="tel:123456789" className="hover:text-white transition-colors block mb-1">Phone: +91 123456789</a>
              <a href="mailto:info@vkrealtor.in" className="hover:text-white transition-colors block">Email: info@vkrealtor.in</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <SocialIcon icon="fb" />
              <SocialIcon icon="ig" />
              <SocialIcon icon="yt" />
              <SocialIcon icon="x" />
            </div>
          </div>

          {/* COLUMN 4: Google Map */}
          <div className="flex flex-col gap-4 h-full">
            <h4 className="font-freight text-xl text-[#dcb153] mb-2 tracking-wide">Find Us</h4>
            {/* Map Container - Grayscale for premium look */}
            <div className="w-full h-[150px] lg:h-full min-h-[150px] rounded-sm overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.285490799308!2d77.38222627629573!3d28.62120027567085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50367355099%3A0x6e902b4d75d40a23!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* === BOTTOM COPYRIGHT BAR (Green Background) === */}
      <div className="bg-[#4e7153] text-[#e8e8e8] py-0 px-6 flex flex-col md:flex-row justify-center items-center gap-2 font-optima text-xs tracking-widest uppercase">
        <p className="text-white">Copyright 2026, All Right Reserved VK Realtor.</p>
      </div>
      
    </footer>
  );
}

// --- Helper Components ---

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link 
      href={href} 
      className="font-optima text-gray-400 text-sm hover:text-[#dcb153] transition-colors duration-300 w-fit"
    >
      {text}
    </Link>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const icons = {
    fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    ig: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M21.5 6.5l.01-.011 M17.5 2h-11A4.5 4.5 0 0 0 2 6.5v11A4.5 4.5 0 0 0 6.5 22h11a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 17.5 2z",
    yt: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
    x: "M4 4l11.73 16h5L9 4zm11 14l-9-12h-3l9 12z", 
  };

  return (
    <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={icons[icon as keyof typeof icons]}></path>
      </svg>
    </a>
  );
}