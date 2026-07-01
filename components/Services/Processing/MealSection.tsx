export default function MealSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Soybean Meal Production
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
        Soybean meal is produced as a premium-quality animal feed supplement rich
        in protein, energy, and essential nutrients for poultry, livestock, and
        aquaculture applications.
      </p>

      <div className="mt-8 rounded-[1.75rem] border border-[#2D2926]/8 bg-white p-8 shadow-[0_12px_30px_rgba(45,41,38,0.05)]">
        <p className="text-sm leading-relaxed text-[#2D2926]/75 md:text-base">
          The process begins with dehulling to remove the outer shell, which
          helps increase protein content and reduce fiber. The dehulled soybeans
          are then crushed, extracted, toasted, and pelleted into a convenient,
          easy-to-handle form that supports healthy animal growth, development,
          and performance across feed applications.
        </p>
      </div>
    </section>
  );
}
