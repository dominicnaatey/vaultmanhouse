import ServiceRow from './ServiceRow';
import { SERVICES } from './services-data';

export default function ServicesList() {
  return (
    <section className="mt-20 md:mt-36 space-y-18 md:space-y-24">
      {SERVICES.map((service, index) => (
        <ServiceRow
          key={service.title}
          service={service}
          isTextFirst={index % 2 === 0}
        />
      ))}
    </section>
  );
}
