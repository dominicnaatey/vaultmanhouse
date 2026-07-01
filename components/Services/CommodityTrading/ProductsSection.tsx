import Image from 'next/image';

import { PRODUCTS } from './Data';

export default function ProductsSection() {
  return (
    <section className="mt-24 max-w-4xl mx-auto">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Our Agro Commodity Trading Products
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
        At Vaultman House Agro Commodities, we trade a range of agro-commodities.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article key={product.name}>
            <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_12px_30px_rgba(45,41,38,0.06)]">
              <div className="relative aspect-5/4">
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
  );
}
