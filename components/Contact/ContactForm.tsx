import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <div className="rounded-[2rem] border border-[#2D2926]/8 bg-white p-8 shadow-[0_20px_60px_rgba(45,41,38,0.08)] md:p-10">
      <div className="max-w-md">
        <span className="inline-flex items-center rounded-full border border-[#59644D]/15 bg-[#59644D]/6 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#59644D]">
          Send A Message
        </span>
        <h2 className="mt-6 font-hero text-3xl leading-tight text-[#2D2926] md:text-[2.35rem]">
          Tell us what you need and our team will get back to you.
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-[#2D2926]/68 md:text-base">
          Share the basics of your enquiry and we will respond with the right next
          step for your request.
        </p>
      </div>

      <form className="mt-10 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2.5 block text-sm font-medium text-[#2D2926]">
              Full name
            </span>
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
              className="h-13 rounded-[1.1rem] border-[#59644D]/12 bg-[#F9F7F2] px-5 focus-visible:border-[#59644D]/15 focus-visible:ring-[#59644D]/15"
            />
          </label>

          <label className="block">
            <span className="mb-2.5 block text-sm font-medium text-[#2D2926]">
              Email
            </span>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
              className="h-13 rounded-[1.1rem] border-[#59644D]/12 bg-[#F9F7F2] px-5 focus-visible:border-[#59644D]/15 focus-visible:ring-[#59644D]/15"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-[#2D2926]">
            Phone
          </span>
          <Input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            autoComplete="tel"
            required
            className="h-13 rounded-[1.1rem] border-[#59644D]/12 bg-[#F9F7F2] px-5 focus-visible:border-[#59644D]/15 focus-visible:ring-[#59644D]/15"
          />
        </label>

        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-[#2D2926]">
            Message
          </span>
          <Textarea
            name="message"
            placeholder="Tell us about your enquiry"
            required
            className="min-h-40 rounded-[1.5rem] border-[#59644D]/12 bg-[#F9F7F2] focus-visible:border-[#59644D]/15 focus-visible:ring-[#59644D]/15"
          />
        </label>

        <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-xs leading-relaxed text-[#2D2926]/55">
            By sending this message, you consent to being contacted by Vaultman
            House regarding your enquiry.
          </p>

          <Button variant="dark" className="w-full min-w-44 sm:w-auto">
            Submit enquiry
          </Button>
        </div>
      </form>
    </div>
  );
}
