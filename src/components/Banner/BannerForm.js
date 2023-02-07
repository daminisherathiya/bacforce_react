import ButtonLink from "@/ui/ButtonLink";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

const BannerForm = () => {
  return (
    <div className="col-span-6 bg-white p-[max(20px,2.500vw)] text-center shadow 2xl:col-span-5">
      <h3 className="mb-[max(35px,2.500vw)] font-bold">
        Schedule A Developer Interview and Get 15 Days Risk-Free Trial
      </h3>
      <div className="space-y-3">
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
