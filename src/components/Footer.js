import Image from "next/image";
import india_flag from "../../public/images/footer/footer-flag/india-flag.jpg";
import usa_flag from "../../public/images/footer/footer-flag/usa-flag.jpg";
import canada_flag from "../../public/images/footer/footer-flag/canada-flag.jpg";
import australia_flag from "../../public/images/footer/footer-flag/australia-flag.jpg";
import uae_flag from "../../public/images/footer/footer-flag/uae-flag.jpg";
import sweden_flag from "../../public/images/footer/footer-flag/sweden-flag.jpg";
import facebook from "../../public/images/footer/facebook.png";
import twitter from "../../public/images/footer/twitter.png";
import linkedin from "../../public/images/footer/linkedin.png";
import Contacts from "@/components/Contacts";
import { contacts } from "@/data/footer";
const Footer = () => {
  return (
    <section className="bg-light-blue">
      <div className="space-y-28 bg-footer bg-contain bg-top bg-no-repeat">
        <div className="flex space-x-6 justify-between">
          <h3 className="font-light text-dark">
            A <span className="font-black">Bacancy</span> Company
          </h3>
          <div className="flex space-x-12">
            <div className="flex items-center">
              <h4 className="mr-6 flex shrink-0 items-center font-black">
                <Image
                  className="mr-3 inline-block h-[max(16px,1.042vw)] w-[max(28px,1.667vw)]"
                  src={usa_flag}
                  alt="Bacforce USA"
                />
                <span>USA</span>
              </h4>
              <p>4995 NW 72nd Ave,<br/>Suite 307 Miami, FL 33166</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <Contacts contacts={contacts} />
            </div>
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
