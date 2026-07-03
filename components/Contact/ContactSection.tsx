import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

export default function ContactSection() {
  return (
    <>
      <section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.9fr)] lg:items-start lg:gap-16">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
      <ContactMap />
    </>
  );
}
