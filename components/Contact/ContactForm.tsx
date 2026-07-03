import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <div className="rounded-[2rem] bg-[#ECEBEA] p-8 shadow-[0_18px_50px_rgba(45,41,38,0.08)] md:p-10 lg:p-12">
      <div className="max-w-md">
        <h2 className="font-hero text-3xl leading-tight text-[#2D2926] md:text-[2.5rem]">
          Get in Touch
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/62 md:text-[15px]">
          Define your goals and identify areas where Vaultman House can add value to
          your business.
        </p>
      </div>

      <form className="mt-10 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <Input
              name="fullName"
              type="text"
              placeholder="Full name"
              autoComplete="name"
              required
              className="h-12 rounded-none border-x-0 border-t-0 border-b border-[#2D2926]/14 bg-transparent px-0 placeholder:text-[#2D2926]/42 focus-visible:border-[#59644D]/15 focus-visible:ring-0"
            />
          </label>

          <label className="block">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              className="h-12 rounded-none border-x-0 border-t-0 border-b border-[#2D2926]/14 bg-transparent px-0 placeholder:text-[#2D2926]/42 focus-visible:border-[#59644D]/15 focus-visible:ring-0"
            />
          </label>
        </div>

        <label className="block">
          <Input
            name="phone"
            type="tel"
            placeholder="Phone"
            autoComplete="tel"
            required
            className="h-12 rounded-none border-x-0 border-t-0 border-b border-[#2D2926]/14 bg-transparent px-0 placeholder:text-[#2D2926]/42 focus-visible:border-[#59644D]/15 focus-visible:ring-0"
          />
        </label>

        <label className="block">
          <Textarea
            name="message"
            placeholder="Message"
            required
            className="min-h-28 rounded-none border-x-0 border-t-0 border-b border-[#2D2926]/14 bg-transparent px-0 py-3 placeholder:text-[#2D2926]/42 focus-visible:border-[#59644D]/15 focus-visible:ring-0"
          />
        </label>

        <div className="pt-4">
          <Button variant="dark" className="min-w-44 px-7 py-3">
            Send a message
          </Button>
        </div>
      </form>
    </div>
  );
}
