import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commodity Trading | Vaultman House',
  description:
    'Explore Vaultman House commodity trading services, capabilities, and traded agro-commodities.',
};

const SERVICE_LINKS = [
  { label: 'Commodity Trading', href: '/services/commodity-trading', active: true },
  { label: 'Exportation', href: '/services' },
  { label: 'Processing', href: '/services' },
];

const TRADING_SERVICES = [
  {
    id: '01',
    title: 'Sourcing',
    description:
      'We work closely with farmers and suppliers to source high-quality agro-commodities, ensuring the right products for export and local trade.',
  },
  {
    id: '02',
    title: 'Trading',
    description:
      'We connect buyers and sellers through structured agro-commodity trading, pricing, and market-ready supply channels for dependable transactions.',
  },
  {
    id: '03',
    title: 'Logistics',
    description:
      'We manage transport planning, loading, and coordination so commodities reach their destination in a timely and efficient manner.',
  },
  {
    id: '04',
    title: 'Risk Management',
    description:
      'Our team supports safer trade execution with due diligence, supply oversight, and practical market awareness across each trading cycle.',
  },
];

const PRODUCTS = [
  { name: 'Corn', image: '/images/corn.png' },
  { name: 'Soybeans', image: '/images/soybeans.jpg' },
  { name: 'Cashew', image: '/images/cashew.jpg' },
  { name: 'Shea Nuts', image: '/images/sheanuts.jpg' },
  { name: 'Sesame Seeds', image: '/images/sesame%20seeds.png' },
  { name: 'Peanuts', image: '/images/peanuts.webp' },
];

export default function CommodityTradingPage() {
  return (
    <div className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 flex flex-col gap-4 pt-6">
              {SERVICE_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                    item.active ? 'text-[#2D2926]' : 'text-[#2D2926]/45 hover:text-[#2D2926]/75'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <main className="mx-auto w-full max-w-4xl">
            <section>
              <h1 className="font-hero text-4xl leading-tight md:text-5xl">
                Commodity Trading
              </h1>
              <h2 className="mt-6 font-hero text-2xl leading-tight md:text-3xl">
                Agro commodity trading; connecting farmers, suppliers, and buyers
              </h2>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
                At Vaultman House Agro Commodities, we specialize in agro commodity
                trading that connects farmers, suppliers, and buyers across Ghana,
                Burkina Faso, Mali, and beyond. Our expertise in the agricultural
                sector enables us to provide a seamless and efficient trading
                experience, ensuring that high quality agro commodities reach their
                destination in a timely and cost-effective manner.
              </p>
            </section>

            <section className="mt-12">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_16px_40px_rgba(45,41,38,0.08)]">
                <div className="relative aspect-[1.65/1]">
                  <Image
                    src="/images/field.webp"
                    alt="Commodity trading operations"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 900px"
                  />
                </div>
              </div>
            </section>

            <section className="mt-14">
              <h2 className="font-hero text-2xl leading-tight md:text-3xl">
                Our Agro-Commodity Trading Services
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
                At Vaultman House Agro Commodities, we offer a range of agro
                commodity trading services, including:
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {TRADING_SERVICES.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-[1.5rem] bg-[#8F9A80] p-6 text-white"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3E287] text-[10px] font-bold text-[#2D2926]">
                        {item.id}
                      </span>
                      <h3 className="font-hero text-2xl leading-tight text-white/95">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-16">
              <h2 className="font-hero text-2xl leading-tight md:text-3xl">
                Our Agro Commodity Trading Products
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
                At Vaultman House Agro Commodities, we trade a range of agro-commodities.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {PRODUCTS.map((product) => (
                  <article key={product.name}>
                    <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_12px_30px_rgba(45,41,38,0.06)]">
                      <div className="relative aspect-square">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-[#2D2926]/80">{product.name}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-14 max-w-3xl">
              <p className="text-sm leading-relaxed text-[#2D2926]/75 md:text-base">
                Agro commodity trading is a vital component of the global food
                system, connecting farmers, suppliers, and buyers across the world.
                At Vaultman House Agro Commodities, we specialize in agro commodity
                trading, providing a range of services including sourcing, trading,
                logistics, and risk management. With our extensive network,
                competitive pricing, reliable logistics, and personalized service,
                we are the perfect partner for farmers, suppliers, and buyers
                looking to trade agro commodities. Contact us today to learn more
                about our agro commodity trading services and how we can help you
                achieve your goals.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
