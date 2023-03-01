import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

const MAIL_API_URL = "/mail.php";
/*
1) Run the below command on terminal:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
2) Start the XAMPP server
3) Start the Gulp server
4) Start the React server
*/
// const MAIL_API_URL = "http://localhost:3000/mindforce/mail.php";

export const FormCol1 = () => {
  // Todo: Background color of inputs changes when auto filled
  const [success, setsuccess] = useState(false);
  const [failed, setfailed] = useState(false);
  const [failedmsg, setfailedmsg] = useState("Failed");
  const [submitting, setsubmitting] = useState(false);

  const [formInputsValidity, setformInputsValidity] = useState({
    name: true,
    email: true,
    phone: true,
  });
  const validateForm = () => {
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);

    setformInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
    });
    return enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid;
  };
  const onChangeHandler = () => {
    validateForm();
  };

  const addContactInformationHandler = async (contectInformation) => {
    setsubmitting(true);
    setsuccess(false);
    setfailed(false);

    var form_data = new FormData();
    for (var key in contectInformation) {
      form_data.append(key, contectInformation[key]);
    }

    const response = await fetch(MAIL_API_URL, {
      method: "POST",
      body: form_data,
    });

    console.log(response.status);

    if (response.ok) {
      let data = await response.text();
      data = data.replace(/(\r\n|\n|\r)/gm, "");

      console.log(data);

      if (data === "Success") {
        setsuccess(true);
        setfailed(false);
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 500);
      } else if (data == "Upload failed") {
        setsuccess(false);
        setfailed(true);
        setfailedmsg("File Upload Failed");
      } else if (data == "file information not match") {
        setsuccess(false);
        setfailed(true);
        setfailedmsg(
          "Only formats are allowed pdf, doc and docx and Allow less than 5MB"
        );
      } else {
        setsuccess(false);
        setfailed(true);
        setfailedmsg("Failed");
      }
    } else {
      setsuccess(false);
      setfailed(true);
      setfailedmsg("Failed");
    }
    setsubmitting(false);
  };

  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const messageRef = useRef("");
  const submitHandler = (event) => {
    event.preventDefault();

    const formIsValid = validateForm();

    if (!formIsValid) {
      return;
    }

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

    addContactInformationHandler(contactInformation);
  };
  return (
    <>
      {success && (
        <div className="mb-3 bg-secondary p-4 text-center font-bold text-white">
          Success
        </div>
      )}
      {failed && (
        <div className="mb-3 bg-[#f8d7da] p-4 text-center font-bold text-[#721c24]">
          {failedmsg}
        </div>
      )}
      <form
        className="space-y-3"
        onSubmit={submitHandler}
        onChange={onChangeHandler}
      >
        <div>
          <Input
            type="name"
            additionalClasses={!formInputsValidity.name && "border-[#e42d3f]"}
            placeholder="Your Name"
            innerRef={nameRef}
          />
          {!formInputsValidity.name && (
            <p className="pl-2 text-base text-[#e42d3f]">
              Please enter a valid name!
            </p>
          )}
        </div>
        <div>
          <Input
            type="email"
            additionalClasses={!formInputsValidity.name && "border-[#e42d3f]"}
            placeholder="Email Address"
            innerRef={emailRef}
          />
          {!formInputsValidity.email && (
            <p className="pl-2 text-base text-[#e42d3f]">
              Please enter a valid email!
            </p>
          )}
        </div>
        <div>
          <Input
            type="tel"
            additionalClasses={!formInputsValidity.name && "border-[#e42d3f]"}
            placeholder="Phone Number"
            innerRef={phoneRef}
          />
          {!formInputsValidity.phone && (
            <p className="pl-2 text-base text-[#e42d3f]">
              Please enter a valid phone number!
            </p>
          )}
        </div>
        <Textarea placeholder="Your Message" innerRef={messageRef} />
        <Button
          additionalClasses="bg-secondary hover:bg-secondary-hover w-full"
          type="submit"
        >
          {submitting ? "Submitting..." : "Inquire Now"}
        </Button>
      </form>
    </>
  );
};
export const FormCol2 = () => {
  // Todo: Background color of inputs changes when auto filled
  const [success, setsuccess] = useState(false);
  const [failed, setfailed] = useState(false);
  const [failedmsg, setfailedmsg] = useState("Failed");
  const [submitting, setsubmitting] = useState(false);

  const addContactInformationHandler = async (contectInformation) => {
    setsubmitting(true);
    setsuccess(false);
    setfailed(false);

    var form_data = new FormData();
    for (var key in contectInformation) {
      form_data.append(key, contectInformation[key]);
    }

    const response = await fetch(MAIL_API_URL, {
      method: "POST",
      body: form_data,
    });

    console.log(response.status);

    if (response.ok) {
      let data = await response.text();
      data = data.replace(/(\r\n|\n|\r)/gm, "");

      console.log(data);

      if (data === "Success") {
        setsuccess(true);
        setfailed(false);
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 500);
      } else if (data == "Upload failed") {
        setsuccess(false);
        setfailed(true);
        setfailedmsg("File Upload Failed");
      } else if (data == "file information not match") {
        setsuccess(false);
        setfailed(true);
        setfailedmsg(
          "Only formats are allowed pdf, doc and docx and Allow less than 5MB"
        );
      } else {
        setsuccess(false);
        setfailed(true);
        setfailedmsg("Failed");
      }
    } else {
      setsuccess(false);
      setfailed(true);
      setfailedmsg("Failed");
    }
    setsubmitting(false);
  };

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

    addContactInformationHandler(contactInformation);
  };
  return (
    <>
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
      <form className="space-y-5" onSubmit={submitHandler}>
        <Input type="text" placeholder="Full Name" innerRef={nameRef} />
        <div className="space-y-5 sm:flex sm:space-x-5 sm:space-y-0">
          <Input type="email" placeholder="Email" innerRef={emailRef} />
          <Input type="tel" placeholder="Phone Number" innerRef={phoneRef} />
        </div>
        <Textarea placeholder="Message" innerRef={messageRef} />
        <Button
          additionalClasses="bg-secondary hover:bg-secondary-hover w-full"
          type="submit"
        >
          {submitting ? "Submitting..." : "Inquire Now"}
        </Button>
      </form>
    </>
  );
};
export const FormCol3 = () => {
  // Todo: Background color of inputs changes when auto filled
  const [success, setsuccess] = useState(false);
  const [failed, setfailed] = useState(false);
  const [failedmsg, setfailedmsg] = useState("Failed");
  const [submitting, setsubmitting] = useState(false);

  const addContactInformationHandler = async (contectInformation) => {
    setsubmitting(true);
    setsuccess(false);
    setfailed(false);

    var form_data = new FormData();
    for (var key in contectInformation) {
      form_data.append(key, contectInformation[key]);
    }

    const response = await fetch(MAIL_API_URL, {
      method: "POST",
      body: form_data,
    });

    console.log(response.status);

    if (response.ok) {
      let data = await response.text();
      data = data.replace(/(\r\n|\n|\r)/gm, "");

      console.log(data);

      if (data === "Success") {
        setsuccess(true);
        setfailed(false);
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 500);
      } else if (data == "Upload failed") {
        setsuccess(false);
        setfailed(true);
        setfailedmsg("File Upload Failed");
      } else if (data == "file information not match") {
        setsuccess(false);
        setfailed(true);
        setfailedmsg(
          "Only formats are allowed pdf, doc and docx and Allow less than 5MB"
        );
      } else {
        setsuccess(false);
        setfailed(true);
        setfailedmsg("Failed");
      }
    } else {
      setsuccess(false);
      setfailed(true);
      setfailedmsg("Failed");
    }
    setsubmitting(false);
  };

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

    addContactInformationHandler(contactInformation);
  };
  return (
    <>
      {success && (
        <div className="mb-3 bg-secondary p-4 text-center font-bold text-white">
          Success
        </div>
      )}
      {failed && (
        <div className="mb-3 bg-[#f8d7da] p-4 text-center font-bold text-[#721c24]">
          {failedmsg}
        </div>
      )}
      <form className="space-y-4" onSubmit={submitHandler}>
        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <Input type="text" placeholder="Full Name" innerRef={nameRef} />
          <Input type="email" placeholder="Email" innerRef={emailRef} />
          <Input type="tel" placeholder="Phone Number" innerRef={phoneRef} />
        </div>
        <Textarea placeholder="Message" innerRef={messageRef} />
        <Button
          additionalClasses="bg-secondary hover:bg-secondary-hover"
          type="submit"
        >
          {submitting ? "Submitting..." : "Inquire Now"}
        </Button>
      </form>
    </>
  );
};
