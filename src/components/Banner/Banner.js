import { salesforce_developers } from "@/data/features";
import BannerForm from "@/components/Banner/BannerForm";

// const MAIL_API_URL = "https://bacforce.com/mail.php";
/*
1) Run the below command on terminal:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
2) Start the XAMPP server
3) Start the Gulp server
4) Start the React server
*/
const MAIL_API_URL = "http://localhost:3000/mindforce/mail.php";

const Banner = () => {
  const addContactInformationHandler = async (contectInformation) => {
    var form_data = new FormData();
    for ( var key in contectInformation ) {
        form_data.append(key, contectInformation[key]);
    }

    const response = await fetch(MAIL_API_URL, {
      method: "POST",
      body: form_data,
    });
    if(response.ok) {
      window.location.href = "/thank-you";
    }
    // const data = await response.text();
    
    // console.log(data);
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
        <BannerForm onAddContactInformation={addContactInformationHandler} />
      </div>
    </section>
  );
};

export default Banner;
