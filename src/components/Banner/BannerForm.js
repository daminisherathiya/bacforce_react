import ButtonLink from "@/ui/ButtonLink";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

const BannerForm = () => {
  return (
    <div className="md:col-span-4 bg-white p-9 text-center shadow">
      <h3 className="mb-12 font-bold">
        Schedule A Developer Interview and Get 15 Days Risk-Free Trial
      </h3>
      <div className="space-y-4">
        <Input type="name" placeholder="Your Name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="tel" placeholder="Phone Number" />
        <Textarea placeholder="Your Message" />
        <ButtonLink additionalClasses="bg-secondary inline-block">
          INQUIRE NOW
        </ButtonLink>
      </div>
    </div>
  );
};

export default BannerForm;
