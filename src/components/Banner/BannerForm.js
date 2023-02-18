import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import { useRef, useReducer } from "react";
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const BannerForm = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
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

    props.onAddContactInformation(contactInformation);
  };
  return (
    <div className="bg-white p-9 text-center shadow-blue md:col-span-4">
      <h3 className="mb-10">
        Schedule A Developer Interview and
        <span className="block font-bold text-light-blue">
          Get 15 Days Risk-Free Trial
        </span>
      </h3>
      <form className="space-y-3" onSubmit={submitHandler}>
        <Input type="name" placeholder="Your Name" innerRef={nameRef} />
        <Input
          type="email"
          placeholder="Email Address"
          innerRef={emailRef}
          value ={emailState.value}
          isValid ={emailState.isValid}
          onChange={emailChangeHandler}
          onBlure={validateEmailHandler}
        />
        <Input type="tel" placeholder="Phone Number" innerRef={phoneRef} />
        <Textarea placeholder="Your Message" innerRef={messageRef} />
        <Button
          additionalClasses="bg-secondary hover:bg-secondary-hover w-full"
          type="submit"
        >
          Inquire Now
        </Button>
      </form>
    </div>
  );
};

export default BannerForm;
