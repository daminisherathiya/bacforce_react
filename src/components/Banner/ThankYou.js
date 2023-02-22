import ButtonLink from "@/ui/ButtonLink";
import Image from "next/image";
import thank_you from "../../../public/images/thank-you/thank-you.svg";

const ThankYou = () => {
  return (
    <section className="bg-light-blue pt-60 text-center">
      <div className="grid md:grid-cols-8">
        <div className="space-y-6 md:col-span-6 md:col-start-2">
          <Image
            src={thank_you}
            alt="Thank You For Connecting With Us."
            className="mx-auto mb-12 h-[max(160px,19.063vw)] w-[max(250px,34.063vw)]"
          />
          <h1 className="font-black">Thank You For Connecting With Us.</h1>
          <h4 className="md:px-12">
            Our salesforce Consultant will get back with a response as soon as
            possible. We would be delighted to assist you, whether you are an
            independent consultant, an enterprise, a start-up, or an IT
            organization; we look forward to working with you!
          </h4>
          <h4 className="font-bold">
            Have a Great Day Ahead, And Talk To You Soon!
          </h4>
          <ButtonLink
            additionalClasses="bg-secondary hover:bg-secondary-hover"
            href="https://bacforce.com/"
          >
            Back To Home Page
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
