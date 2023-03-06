import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MAIL_API_URL = "/mail.php";
/*
1) Run the below command on terminal:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
2) Start the XAMPP server
3) Start the Gulp server
4) Start the React server
*/
// const MAIL_API_URL = "http://localhost:3000/mindforce/mail.php";

const Form = ({ additionalClasses, column, buttonWidth }) => {
  const allClasses = additionalClasses ? " " + additionalClasses : "";

  // Todo: Background color of inputs changes when auto filledconst [success, setsuccess] = useState(false);
  const [success, setsuccess] = useState(false);
  const [failed, setfailed] = useState(false);
  const [failedmsg, setfailedmsg] = useState("Failed");
  const [submitting, setsubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

    // console.log(response.status);

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

  const submitHandler = (data) => {
    const contactInformation = {
      contactName: data.name,
      contactEmail: data.email,
      contactPhone: data.phone,
      contactMessage: "", //todo
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
      <form className={allClasses} onSubmit={handleSubmit(submitHandler)}>
        {column === "column-1" && (
          <>
            <div>
              <Input
                registerProps={register("fullName", {
                  required: "Please enter a name!",
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: "Please enter a valid name!",
                  },
                })}
                errorMessage={errors.fullName?.message}
                placeholder="Your Name"
              />
            </div>
            <div>
              <Input
                registerProps={register("email", {
                  required: "Please enter a email!",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email!",
                  },
                })}
                errorMessage={errors.email?.message}
                placeholder="Email Address"
              />
            </div>
            <div>
              <Input
                registerProps={register("phoneNumber", {
                  required: "Please enter a phone number!",
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "This is not a valid phone number, try again!",
                  },
                  minLength: {
                    value: 6,
                    message: "This number is too short, try again",
                  },
                  maxLength: {
                    value: 12,
                    message:
                      "And now it's too damn long, make sure the number is right, would you?",
                  },
                })}
                errorMessage={errors.phoneNumber?.message}
                placeholder="Phone Number"
              />
            </div>
          </>
        )}
        {column === "column-2" && (
          <>
            <div>
              <Input
                registerProps={register("fullName", {
                  required: "Please enter a name!",
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: "Please enter a valid name!",
                  },
                })}
                errorMessage={errors.fullName?.message}
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-5 sm:flex sm:space-x-5 sm:space-y-0">
              <div className="w-full">
                <Input
                  registerProps={register("email", {
                    required: "Please enter a email!",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter a valid email!",
                    },
                  })}
                  errorMessage={errors.email?.message}
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full">
                <Input
                  registerProps={register("phoneNumber", {
                    required: "Please enter a phone number!",
                    pattern: {
                      value: /^[0-9+-]+$/,
                      message: "This is not a valid phone number, try again!",
                    },
                    minLength: {
                      value: 6,
                      message: "This number is too short, try again",
                    },
                    maxLength: {
                      value: 12,
                      message:
                        "And now it's too damn long, make sure the number is right, would you?",
                    },
                  })}
                  errorMessage={errors.phoneNumber?.message}
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </>
        )}
        {column === "column-3" && (
          <>
            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="w-full text-left">
                <Input
                  registerProps={register("fullName", {
                    required: "Please enter a name!",
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: "Please enter a valid name!",
                    },
                  })}
                  errorMessage={errors.fullName?.message}
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full text-left">
                <Input
                  registerProps={register("email", {
                    required: "Please enter a email!",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter a valid email!",
                    },
                  })}
                  errorMessage={errors.email?.message}
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full text-left">
                <Input
                  registerProps={register("phoneNumber", {
                    required: "Please enter a phone number!",
                    pattern: {
                      value: /^[0-9+-]+$/,
                      message: "This is not a valid phone number, try again!",
                    },
                    minLength: {
                      value: 6,
                      message: "This number is too short, try again",
                    },
                    maxLength: {
                      value: 12,
                      message:
                        "And now it's too damn long, make sure the number is right, would you?",
                    },
                  })}
                  errorMessage={errors.phoneNumber?.message}
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </>
        )}
        <Textarea placeholder="Your Message" />
        <Button
          additionalClasses={`bg-secondary hover:bg-secondary-hover ${
            buttonWidth ? buttonWidth : ""
          }`}
          type="submit"
        >
          {submitting ? "Submitting..." : "Inquire Now"}
        </Button>
      </form>
    </>
  );
};
export default Form;
