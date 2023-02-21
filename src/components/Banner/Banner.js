import { salesforce_developers } from "@/data/features";
import BannerForm from "@/components/Banner/BannerForm";
import { useState } from "react";

// const MAIL_API_URL = "/mail.php";
/*
1) Run the below command on terminal:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
2) Start the XAMPP server
3) Start the Gulp server
4) Start the React server
*/
const MAIL_API_URL = "http://localhost:3000/mindforce/mail.php";

const Banner = () => {
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
    const data = await response.text();
    if (response.ok) {
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

  return (
    <section className="bg-light-blue pt-60 pb-40" id="Form">
      <div className="grid gap-16 md:grid-cols-9 md:gap-5">
        <div className="flex flex-col justify-center space-y-8 md:col-span-5 lg:pr-24">
          <h1 className="text-6xl text-dark">
            Hire Certified
            <span className="font-bold"> Salesforce Developers</span>
          </h1>
          <h4>
            Our certified Salesforce consultants are backed by 11+ years of
            experience in SFDC consulting, integration, customization, and
            support.
          </h4>
          <ul className="space-y-6">
            {salesforce_developers.banner.map((feature) => (
              <li
                key={feature}
                className="after:content[''] relative pl-7 after:absolute after:left-0 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-y-2/4 after:rounded after:bg-primary after:bg-contain after:bg-center after:bg-no-repeat"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <BannerForm
          onAddContactInformation={addContactInformationHandler}
          success={success}
          failed={failed}
          failedmsg={failedmsg}
          submitting={submitting}
        />
      </div>
    </section>
  );
};

export default Banner;
