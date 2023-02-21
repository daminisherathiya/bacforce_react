import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import { useRef, useState } from "react";

// const MAIL_API_URL = "/mail.php";
/*
1) Run the below command on terminal:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
2) Start the XAMPP server
3) Start the Gulp server
4) Start the React server
*/
const MAIL_API_URL = "http://localhost:3000/mindforce/mail.php";

const WeHelp = () => {
  const [success, setsuccess] = useState(false);
  const [failed, setfailed] = useState(false);
  const [failedmsg, setfailedmsg] = useState("Failed");
  const [submitting, setsubmitting] = useState(false);

  const addContactInformationHandler = async (contectInformation) => {
    setsubmitting(true);
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
    <section className="bg-dark text-center md:text-left">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-6xl text-white">
            How Can We
            <span className="font-bold md:block"> Help?</span>
          </h2>
        </div>
        <div className="md:col-span-7">
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
            <div className="flex space-x-5">
              <Input type="email" placeholder="Email" innerRef={emailRef} />
              <Input
                type="tel"
                placeholder="Phone Number"
                innerRef={phoneRef}
              />
            </div>
            <Textarea placeholder="Message" innerRef={messageRef} />
            <Button
              additionalClasses="bg-secondary hover:bg-secondary-hover w-full"
              type="submit"
            >
              {submitting ? "Submitting..." : "Inquire Now"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
