import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Search, ChevronRight, ArrowRight, ArrowDown, Mail, Leaf, Sprout, Tractor, Droplets, MapPin, BarChart3, Users, Menu } from 'lucide-react';

const Button = ({ children, className = '', variant = 'primary' }: { children: React.ReactNode, className?: string, variant?: 'primary' | 'outline' | 'white' | 'dark' }) => {
  const base = "inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition-all duration-300 text-sm hover:scale-105 active:scale-95";
  const variants = {
    primary: "bg-[#F3E287] text-[#2D2926] hover:bg-[#E5D474]",
    outline: "border border-[#2D2926] text-[#2D2926] hover:bg-[#2D2926] hover:text-[#F9F7F2]",
    white: "bg-white text-[#2D2926] hover:bg-[#F9F7F2]",
    dark: "bg-[#8F9A80] text-white hover:bg-[#7a856a]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-[#2D2926]/5">
        <div className="flex items-center gap-2 font-serif text-2xl font-bold cursor-pointer transition-transform hover:scale-105">
          <Leaf className="w-8 h-8 text-[#41533B]" />
          <span>VerdaAgro</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {['Home', 'Pages', 'Blog', 'Portfolio', 'Shop', 'Contacts'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center gap-1 hover:text-[#8F9A80] transition-colors relative group">
              {item}
              {!['Portfolio', 'Shop', 'Contacts'].includes(item) && <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#8F9A80] transition-colors rotate-90" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#Eae7de] rounded-full transition-colors hidden sm:block">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-[#Eae7de] rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <Button className="hidden md:inline-flex">Get in Touch</Button>
          <button className="lg:hidden p-2 hover:bg-[#Eae7de] rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-[#3B4631] text-white flex flex-col justify-between p-6 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 mix-blend-overlay">
          <Image src="https://placehold.co/1920x1080/3B4631/F3E287.webp?text=Golden+Wheat" fill className="object-cover" alt="Wheat field" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 mt-8">
          <h1 className="font-serif text-6xl md:text-8xl max-w-2xl leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">Rooted in<br/>the Land</h1>
          <div className="text-left md:text-right animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
             <div className="font-serif text-7xl md:text-8xl text-[#F3E287] leading-none mb-2">20<span className="text-4xl text-white font-sans align-top">k</span></div>
             <p className="text-sm font-medium opacity-90 max-w-[180px] md:ml-auto leading-tight">Hectares under sustainable cultivation</p>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-start gap-8 mt-auto mb-20 md:mb-0">
          <p className="text-lg md:text-xl max-w-xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
             We are committed to growing more than crops &mdash; we&apos;re growing a better future for people, communities, and the planet.
          </p>
        </div>
        <div className="absolute bottom-6 left-6 right-6 md:left-16 flex justify-between items-end z-20 pointer-events-none">
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
             <div className="bg-[#2B3521]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-[#2B3521] transition-colors cursor-pointer">
                <Sprout className="text-[#F3E287] w-8 h-8 flex-shrink-0" />
                <span className="text-sm font-medium leading-tight">Seed Supply &<br/>Crop Planning</span>
             </div>
             <div className="bg-[#59644D]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-[#59644D] transition-colors cursor-pointer">
                <Tractor className="text-white w-8 h-8 flex-shrink-0" />
                <span className="text-sm font-medium leading-tight">Crop Protection<br/>Services</span>
             </div>
          </div>
          <h1 className="hidden lg:block font-serif text-6xl md:text-8xl leading-none text-right opacity-90 pointer-events-auto absolute right-0 bottom-0 pr-6">Driven by<br/>Innovation</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-16 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 w-max mb-4">About Company</span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full">
              <h2 className="font-serif text-4xl md:text-6xl text-[#2D2926] max-w-2xl leading-tight">Modern Solutions for Traditional Challenges</h2>
              <Button className="mb-2">Read More</Button>
            </div>
          </div>
          <div className="w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden relative mb-16 shadow-xl shadow-black/5 group">
            <Image src="https://placehold.co/1200x600/EAE7DE/A3B18A.webp?text=Harvester" alt="Harvester overview" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
             <p className="text-2xl lg:text-3xl text-[#2D2926] font-medium leading-normal">
               We don&apos;t just grow crops &mdash; we grow trust, opportunity, and a better future. We are dedicated to supporting farmers, enhancing food security, and promoting sustainable agriculture.
             </p>
             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
               With years of experience and a deep understanding of local and global challenges, we provide high-quality seeds, modern farming solutions, expert field support, and agri-tech innovations that empower growers to increase productivity and protect natural resources. Our mission is rooted in more than just farming &mdash; it&apos;s about building partnerships, preserving the land, and helping communities thrive.
             </p>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <div className="flex py-10 px-6 md:px-16 gap-4 bg-[#F9F7F2] overflow-x-auto pb-16">
        {[
          { img: "Crop", name: "Crop Planning" },
          { img: "Soil", name: "Soil Testing" },
          { img: "Machinery", name: "Farm Machinery" },
          { img: "Equipment", name: "Equipment Services" }
        ].map((item, i) => (
          <React.Fragment key={i}>
             <div className="min-w-[180px] h-14 rounded-full relative overflow-hidden shadow-sm flex-shrink-0 group">
                <Image src={`https://placehold.co/300x100/A3B18A/F9F7F2.webp?text=${item.img}`} fill alt={item.name} className="object-cover transition-transform duration-500 group-hover:scale-110" />
             </div>
             <div className="min-w-[180px] h-14 rounded-full bg-[#F3E287] flex items-center justify-center font-medium text-sm flex-shrink-0 text-[#2D2926] shadow-sm cursor-pointer hover:bg-[#E5D474] transition-colors">{item.name}</div>
          </React.Fragment>
        ))}
      </div>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-16 bg-[#8F9A80]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between lg:items-end gap-8 mb-16">
             <div>
                 <span className="text-xs font-bold uppercase tracking-wider text-white border border-white/30 rounded-full px-4 py-1.5 mb-6 inline-block">Farm Solutions</span>
                 <h2 className="font-serif text-4xl md:text-6xl text-white max-w-2xl leading-tight">What Our Agricultural Company Offers</h2>
             </div>
             <Button className="mb-2">Read More</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                 {id: '01', title: 'Planting Material'},
                 {id: '02', title: 'Soil Solutions'},
                 {id: '03', title: 'Crop Protection'},
                 {id: '04', title: 'Innovation Services'}
               ].map((item, i) => (
                 <div key={i} className="group relative h-[420px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
                     <Image src={`https://placehold.co/400x600/313c28/F9F7F2.webp?text=${item.title.replace(' ', '+')}`} fill alt={item.title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-3">
                         <span className="text-[#F3E287] text-sm font-mono tracking-widest">{item.id}</span>
                         <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                         <div className="w-10 h-10 rounded-full bg-[#F3E287] flex items-center justify-center mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <ArrowRight className="w-5 h-5 text-[#2D2926]" />
                         </div>
                     </div>
                 </div>
              ))}
          </div>
          {/* Logos Strip */}
          <div className="flex flex-wrap items-center justify-between gap-8 mt-24 opacity-70 px-4">
             {[{icon: <Leaf/>, text: 'SmartSeed'}, {icon: <Sprout/>, text: 'HARVEST'}, {icon: <Leaf/>, text: 'simpleaf'}, {icon: <Users/>, text: 'THE ORGANIC FARM'}, {icon: <Droplets/>, text: 'farmburst'}].map((item, i) => (
               <div key={i} className="flex items-center gap-2 text-white font-serif text-xl tracking-wide hover:opacity-100 transition-opacity cursor-pointer">
                 {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {className: "w-6 h-6 text-[#F3E287]"})} {item.text}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="flex flex-col lg:flex-row min-h-[650px]">
         <div className="w-full lg:w-1/2 relative min-h-[400px]">
             <Image src="https://placehold.co/800x800/EAE7DE/3B4631.webp?text=Tractor+Field" fill alt="Tractor" className="object-cover" />
         </div>
         <div className="w-full lg:w-1/2 bg-[#5F4B3C] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
             <span className="text-xs font-bold uppercase tracking-wider text-white/70 border border-white/20 rounded-full px-4 py-1.5 mb-10 w-max">Trusted Farming Solutions</span>
             <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight">From Field to Future</h2>
             <div className="flex flex-col gap-8">
                 <div className="border-b border-white/20 pb-8 group">
                     <div className="flex justify-between items-center mb-6 cursor-pointer">
                         <h3 className="text-2xl font-medium text-[#F3E287]">Higher Yields</h3>
                         <div className="w-8 h-8 rounded-full border border-[#F3E287] flex items-center justify-center">
                           <ArrowDown className="rotate-180 w-4 h-4 text-[#F3E287] transition-transform duration-300" />
                         </div>
                     </div>
                     <p className="text-sm md:text-base text-white/80 leading-relaxed pr-8 lg:pr-16 animate-in fade-in slide-in-from-top-2">
                         Our advanced seeds, soil care, and farming techniques help farmers produce more — with less. We promote eco-friendly practices that protect soil, water, and biodiversity for long-term success.
                     </p>
                 </div>
                 {['Cost Efficiency', 'Expert Support'].map((title) => (
                   <div key={title} className="border-b border-white/20 pb-8 flex justify-between items-center cursor-pointer group hover:border-white/50 transition-colors">
                       <h3 className="text-2xl font-medium group-hover:text-[#F3E287] transition-colors">{title}</h3>
                       <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#F3E287]">
                         <ArrowDown className="w-4 h-4 group-hover:text-[#F3E287] transition-colors" />
                       </div>
                   </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Grid Services "Your Agriculture Partner" */}
      <section className="py-32 px-6 md:px-16 bg-[#F9F7F2]">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
             <div className="w-full lg:w-1/3">
                 <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 mb-8 inline-block">Agricultural Support</span>
                 <h2 className="font-serif text-5xl md:text-6xl text-[#2D2926] leading-[1.1] sticky top-32">Your<br/>Agriculture<br/>Partner</h2>
             </div>
             <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mt-8 lg:mt-0">
                 {[
                     {icon: <Leaf/>, title: 'Nutrient\nManagement'},
                     {icon: <Sprout/>, title: 'Crop Planning\nSolutions'},
                     {icon: <Tractor/>, title: 'Farm\nMechanization'},
                     {icon: <Droplets/>, title: 'Irrigation & Water\nManagement'},
                     {icon: <MapPin/>, title: 'Post-Harvest &\nMarket Access'},
                     {icon: <BarChart3/>, title: 'Agri-Tech &\nPrecision Farming'}
                 ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-6 group cursor-pointer">
                          <div className="w-16 h-16 rounded-2xl bg-[#FDF3C8] flex items-center justify-center text-[#2D2926] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                              {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {className: "w-8 h-8"})}
                          </div>
                          <h3 className="text-2xl font-serif text-[#2D2926] whitespace-pre-line leading-tight group-hover:text-[#8F9A80] transition-colors">{item.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">From organic pest control to advanced fertilizers and micronutrients, our solutions protect crops and optimize soil health</p>
                      </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Portfolio/Cards Section */}
      <section className="py-32 px-6 md:px-16 bg-[#8F9A80]">
         <div className="max-w-7xl mx-auto">
             <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20 relative">
                <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-white leading-[1.1] tracking-tight">
                   From Seed<br/><span className="text-[#F3E287]">to Harvest</span>
                </h2>
                <div className="lg:absolute lg:right-0 lg:top-8 max-w-sm">
                    <p className="text-white/90 text-base md:text-lg lg:text-right font-medium leading-relaxed">
                       We are committed to growing more than crops &mdash; we&apos;re growing a better future for people.
                    </p>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                 {[
                   {img: "Harvester+Gold", title: "Harvesting Success", tags: ["Farming", "Organic"]},
                   {img: "Green+Shoot", title: "Seeds of Change", tags: ["Crop", "Farming"]},
                   {img: "Hands+Seeds", title: "Farming the Future", tags: ["Agriculture", "Harvesting"]}
                 ].map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative h-[480px] rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                            <Image src={`https://placehold.co/600x800/41533B/F9F7F2.webp?text=${item.img}`} fill alt={item.title} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="flex gap-2 mb-4">
                           {item.tags.map(tag => (
                               <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/50 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">{tag}</span>
                           ))}
                        </div>
                        <h3 className="text-3xl font-serif text-white group-hover:text-[#F3E287] transition-colors">{item.title}</h3>
                    </div>
                 ))}
             </div>
             <div className="mt-20 flex justify-center">
                 <Button>View All Cases</Button>
             </div>
         </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-32 px-6 md:px-16 bg-[#F9F7F2]">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col mb-16">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 mb-8 w-max">Latest News</span>
                  <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
                      <h2 className="font-serif text-5xl md:text-6xl text-[#2D2926] max-w-xl leading-[1.1]">Explore Our Latest News &amp; Tips</h2>
                      <Button variant="dark" className="mb-2">Read More</Button>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {[
                      {tag: "Harvest", date: "AUGUST 18, 2025", title: "Latest Updates in Global Agriculture"},
                      {tag: "Agriculture", date: "AUGUST 18, 2025", title: "How Technology Is Changing Agriculture"},
                      {tag: "Agri-Tech", date: "AUGUST 18, 2025", title: "Organic vs. Conventional Farming"}
                  ].map((item, i) => (
                      <div key={i} className="group cursor-pointer flex flex-col gap-5">
                          <div className="relative h-[280px] rounded-[2rem] overflow-hidden shadow-md">
                              <Image src={`https://placehold.co/600x400/EAE7DE/8F9A80.webp?text=News+${i+1}`} fill alt={item.title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                              <div className="absolute top-6 left-6 bg-[#F3E287] text-[#2D2926] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">{item.tag}</div>
                          </div>
                          <p className="text-xs font-mono font-medium tracking-wide text-gray-500 mt-2">{item.date}</p>
                          <h3 className="text-2xl font-serif text-[#2D2926] leading-tight group-hover:text-[#8F9A80] transition-colors">{item.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-[#2D2926] font-bold tracking-wide uppercase mt-2 group-hover:text-[#8F9A80] transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8F9A80]"></span> Read More
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#2D2926] text-white pt-40 pb-10 px-6 md:px-16 overflow-hidden min-h-[700px] flex flex-col justify-between">
          <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-overlay">
              <Image src="https://placehold.co/1920x1080/2D2926/F3E287.webp?text=Dark+Hay" fill alt="Background" className="object-cover" />
          </div>
          <div className="relative z-10 w-full mb-24 overflow-hidden flex justify-center -mt-10">
              <h1 className="font-serif text-[18vw] leading-[0.7] font-bold text-[#F3E287] text-center drop-shadow-2xl scale-y-110 tracking-tighter opacity-90">VerdaAgro</h1>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full bg-[#3B3833]/80 backdrop-blur-xl rounded-[2rem] p-10 md:p-20 flex flex-col lg:flex-row justify-between gap-16 border border-white/10 shadow-2xl mb-12">
              <div className="flex flex-col gap-8 lg:w-1/3">
                  <p className="text-base text-white/80 leading-relaxed font-medium">Driven by passion. Grounded in purpose. Focused on results.</p>
                  <div className="flex flex-col gap-2">
                      <a href="mailto:verda@mail.com" className="text-3xl font-serif hover:text-[#F3E287] transition-colors inline-block w-max">verda@mail.com</a>
                      <a href="tel:+18001234657" className="text-xl font-medium tracking-wide hover:text-[#F3E287] transition-colors inline-block w-max">+1 800 123 46 57</a>
                  </div>
                  <div className="flex gap-3 mt-4 flex-wrap">
                      {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map(social => (
                          <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/80 hover:text-[#2D2926] hover:bg-white border border-white/20 rounded-full px-4 py-2 transition-all">{social}</a>
                      ))}
                  </div>
              </div>
              <div className="lg:w-1/5">
                  <h4 className="text-xl font-serif mb-8 text-[#F3E287]">Useful Links</h4>
                  <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                      {['Company', 'Services', 'Features', 'FAQs', 'Getting Started'].map(link => (
                          <li key={link}><a href="#" className="hover:text-[#F3E287] transition-colors inline-block">{link}</a></li>
                      ))}
                  </ul>
              </div>
              <div className="lg:w-1/3">
                  <h4 className="text-xl font-serif mb-8 text-[#F3E287]">Subscribe</h4>
                  <form className="relative mb-6 group">
                     <input type="email" placeholder="Get news & updates" className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-sm font-medium outline-none placeholder-white/50 focus:border-[#F3E287] transition-colors" />
                     <button type="submit" className="absolute right-2 top-0 text-white/50 group-focus-within:text-[#F3E287] hover:text-[#F3E287] transition-colors">
                        <Mail className="w-5 h-5"/>
                     </button>
                  </form>
                  <p className="text-xs text-white/50 leading-relaxed font-medium max-w-sm">
                     Our expertise, as well as our passion for web design, sets us apart from other agencies.
                  </p>
              </div>
          </div>
          <div className="relative z-10 w-full flex justify-between items-center max-w-7xl mx-auto text-[10px] font-bold uppercase tracking-widest text-white/50 px-4 md:px-8">
              <p>© 2025 VerdaAgro by WebGeniusLab. All Rights Reserved</p>
              <button className="bg-white/10 hover:bg-[#F3E287] hover:text-[#2D2926] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300">
                  <ArrowDown className="rotate-180 w-5 h-5"/>
              </button>
          </div>
      </footer>
    </div>
  );
}
