import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="mt-16 md:mt-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
}
