import { Leaf, ShoppingBag, Search, ChevronRight, Menu } from 'lucide-react';
import Button from './ui/Button';

const NAV_ITEMS = ['Home', 'Pages', 'Blog', 'Portfolio', 'Shop', 'Contacts'];
const NO_CHEVRON = ['Portfolio', 'Shop', 'Contacts'];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-[#2D2926]/5">
      <div className="flex items-center gap-2 font-serif text-2xl font-bold cursor-pointer transition-transform hover:scale-105">
        <Leaf className="w-8 h-8 text-[#41533B]" />
        <span>VerdaAgro</span>
      </div>

      <nav className="font-ui hidden lg:flex items-center gap-8 text-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="flex items-center gap-1 hover:text-[#8F9A80] transition-colors relative group"
          >
            {item}
            {!NO_CHEVRON.includes(item) && (
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#8F9A80] transition-colors rotate-90" />
            )}
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
  );
}
