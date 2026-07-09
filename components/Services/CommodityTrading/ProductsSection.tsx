import Image from 'next/image';

import { PRODUCTS } from './Data';

export default function ProductsSection() {
  return (
    <section id="commodities" className="mx-auto mt-24 max-w-4xl scroll-mt-24">
      <h2 className="font-hero text-2xl leading-tight text-black md:text-3xl">
        Our Agro Commodity Trading Products
      </h2>
      <p className="mt-4 text-sm font-normal leading-relaxed text-black md:text-base">
        At Vaultman House Agro Commodities, we trade a range of agro-commodities.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="rounded-3xl bg-[#FEF4CC] px-5 py-5"
          >
            <div className="relative overflow-hidden rounded-3xl">
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
            <p className="mt-4 text-base font-bold leading-tight text-black">
              {product.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
