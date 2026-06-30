import Image from 'next/image';

export default function CommodityTradingFeatureImage() {
  return (
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
  );
}
