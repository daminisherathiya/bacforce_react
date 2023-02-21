import Image from "next/image";
import usa_flag from "../../public/images/footer/footer-flag/usa-flag.jpg";
import facebook from "../../public/images/footer/facebook.png";
import twitter from "../../public/images/footer/twitter.png";
import linkedin from "../../public/images/footer/linkedin.png";
import Contacts from "@/components/Contacts";
import { contacts } from "@/data/footer";
const Footer = () => {
  return (
    <section className="bg-light-blue">
      <div className="space-y-28 bg-footer bg-contain bg-top bg-no-repeat">
        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:justify-between lg:space-x-6 lg:space-y-0">
          <h2 className="font-light text-primary">
            A <span className="font-bold">Bacancy</span><br className="hidden lg:block"/> Company
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
            <Contacts contacts={contacts} />
          </div>
        </div>

        <div>
          <div className="items-center justify-between space-y-14 border-b border-gray pb-6 md:flex md:flex-row-reverse md:space-y-0">
            <ul className="flex justify-center">
              <li>
                <a href="https://www.facebook.com/people/Bacforce/100087627767991/">
                  <Image src={facebook} alt="Facebook" className="h-11 w-11" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bacforce">
                  <Image src={twitter} alt="Twitter" className="h-11 w-11" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/bacforce/">
                  <Image src={linkedin} alt="Linkedin" className="h-11 w-11" />
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap justify-center space-x-12 text-base">
              <li className="mb-2 sm:mb-0">
                <a href="https://bacforce.com/about-us">About Us</a>
              </li>
              <li className="mb-2 sm:mb-0">
                <a href="https://bacforce.com/contactus">Contact Us</a>
              </li>
              <li className="mb-2 sm:mb-0">
                <a href="#">Sitemap</a>
              </li>
              <li className="mb-2 sm:mb-0">
                <a href="https://bacforce.com/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="pt-6 text-center">
            © Bacforce, 2022. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
