import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

const BannerForm = () => {
  return (
    <div className="bg-white p-9 text-center shadow-blue md:col-span-4">
      <h3 className="mb-12 font-bold">
        Schedule A Developer Interview and<span className="block text-light-blue">Get 15 Days Risk-Free Trial</span>
      </h3>
      <form className="scroll-mt-96 space-y-4" id="contactForm">
        <Input type="name" placeholder="Your Name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="tel" placeholder="Phone Number" />
        <Textarea placeholder="Your Message" />
        <Button
          additionalClasses="bg-secondary hover:bg-secondary-hover w-100"
          href="#contactForm"
        >
          Inquire Now
        </Button>
      </form>
    </div>
  );
};

export default BannerForm;
