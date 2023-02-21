import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import { useRef } from "react";

const BannerForm = ({
  onAddContactInformation,
  success,
  failed,
  failedmsg,
  submitting,
}) => {
  // Todo: Background color of inputs changes when auto filled
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const messageRef = useRef("");
  const submitHandler = (event) => {
    event.preventDefault();

    const contactInformation = {
      contactName: nameRef.current.value,
      contactEmail: emailRef.current.value,
      contactPhone: phoneRef.current.value,
      contactMessage: messageRef.current.value,
      contactBtn: "",
      type: "contactUs",
      page: window.location.href,
      leadingPage: "http://bacforce.com/",
    };

    onAddContactInformation(contactInformation);
  };
  return (
    <div className="bg-white p-9 text-center shadow-blue md:col-span-4">
      <h3 className="mb-10">
        Schedule A Developer Interview and
        <span className="block font-bold text-light-blue">
          Get 15 Days Risk-Free Trial
        </span>
      </h3>
      {success && (
        <div className="mb-3 bg-secondary p-4 font-bold text-white">
          Success
        </div>
      )}
      {failed && (
        <div className="mb-3 bg-[#f8d7da] p-4 font-bold text-[#721c24]">
          {failedmsg}
        </div>
      )}
      <form className="space-y-3" onSubmit={submitHandler}>
        <Input type="name" placeholder="Your Name" innerRef={nameRef} />
        <Input type="email" placeholder="Email Address" innerRef={emailRef} />
        <Input type="tel" placeholder="Phone Number" innerRef={phoneRef} />
        <Textarea placeholder="Your Message" innerRef={messageRef} />
        <Button
          additionalClasses="bg-secondary hover:bg-secondary-hover w-full"
          type="submit"
        >
          {submitting? "Submitting..." : "Inquire Now"}
        </Button>
      </form>
    </div>
  );
};

export default BannerForm;
