export default function ContactMap() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="overflow-hidden rounded-[2rem] border border-[#2D2926]/8 bg-white shadow-[0_16px_45px_rgba(45,41,38,0.06)]">
        <iframe
          title="Vaultman House location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1300%2C5.6200%2C0.0600%2C5.7300&layer=mapnik&marker=5.6698%2C-0.0166"
          className="h-[300px] w-full grayscale md:h-[380px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
