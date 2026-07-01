import Image from 'next/image';

export default function FeatureImage() {
  return (
    <section className="mt-12">
      <div className="relative overflow-hidden rounded-4xl shadow-[0_16px_40px_rgba(45,41,38,0.08)]">
        <div className="relative aspect-5/2.5">
          <Image
            src="/images/processing02.webp"
            alt="Soybean processing operations"
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
