import Image from "next/image";
import logo from "../../public/images/logo.png";
import sales_1 from "../../public/images/header/sales-1.jpeg";
import gmail_icon from "../../public/images/header/gmail-icon.png";
import call_icon from "../../public/images/header/call-yellow-icon.png";
import wp_icon from "../../public/images/header/wp-icon.png";
import Button from "../ui/Button";
const Header = () => {
  return (
    <div className="container relative bg-gradient-to-r from-white to-water py-6 px-5 ">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={logo}
            alt="Bacforce"
            className="2xl:w-50 xl:w-45 lg:w-40 3xl:w-52 w-36"
          />
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="text-charcoal">
              <a href="https://bacforce.com/about-us">About Us</a>
            </li>
            <li className="text-charcoal">
              <a>Salesforce Services</a>
              <div className="container absolute left-0 top-full bg-white px-5 md:px-7 xl:px-9 2xl:px-11 3xl:px-14">
                <div className="grid grid-cols-4 3xl:p-7 xl:p-5 p-3 text-charcoal">
                  <div className="space-y-5">
                    <p className="font-semibold text-black">
                      Salesforce Services
                    </p>
                    <a href="" className="block">
                      Salesforce Consulting
                    </a>
                    <a href="" className="block">
                      Salesforce Customization
                    </a>
                    <a href="" className="block">
                      Salesforce Implementation
                    </a>
                    <a href="" className="block">
                      Salesforce Integration
                    </a>
                    <a href="" className="block">
                      Salesforce Data Migration
                    </a>
                  </div>
                  <div className="space-y-5">
                    <p></p>
                    <a href="" className="block">
                      Salesforce Managed
                    </a>
                    <a href="" className="block">
                      Salesforce Support
                    </a>
                    <a href="" className="block">
                      Salesforce CPQ
                    </a>
                  </div>
                  <div className="col-span-2">
                    <div className="relative">
                      <Image src={sales_1} alt="Bacforce" />
                      <div className="absolute top-1/2 -translate-y-2/4 p-6">
                        <h2 className="3xl:text-4xl xl:text-3xl lg:text-xl text-lg leading-normal">
                          Let’s grow together
                          <b className="block">Partner with us</b>
                        </h2>
                        <a className="uppercase">get quote</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-charcoal border-opacity-30 3xl:p-7 xl:p-5 p-3">
                  <div className="grid grid-cols-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ghost-white">
                        <Image src={gmail_icon} alt="Gmail" />
                      </div>
                      <div>
                        <p>Email Us</p>
                        <a>solutions@bacforce.com</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ghost-white">
                        <Image src={call_icon} alt="Phone" />
                      </div>
                      <div>
                        <p>USA</p>
                        <a>+1 347 441 4161</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ghost-white">
                        <Image src={wp_icon} alt="Phone" />
                      </div>
                      <div>
                        <p>Canada</p>
                        <a>+1 416 907 6738</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="text-charcoal">
              <a>Salesforce Cloud</a>
            </li>
            <li className="text-charcoal">Expertise</li>
          </ul>
          <Button additionalClasses="bg-green-blue" type="submit">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
