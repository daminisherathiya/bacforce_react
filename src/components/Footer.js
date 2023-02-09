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
    <section className="bg-gradient-to-b from-water to-white">
      <div className="space-y-14 bg-footer bg-contain bg-top bg-no-repeat">
        <div className="grid gap-16 lg:gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray pb-14">
          <div>
            <h4 className="mb-4 flex items-center font-black">
              <Image
                className="mr-3 inline-block w-[max(28px,1.667vw)] h-[max(16px,1.042vw)]"
                src={india_flag}
                alt="Bacforce India"
              />
              <span>India (HQ)</span>
            </h4>
            <p>
              15-16, Times Corporate Park, Thaltej, Ahmedabad, Gujarat 380059
            </p>
          </div>
          <div>
            <h4 className="mb-4 flex items-center font-black">
              <Image
                className="mr-3 inline-block w-[max(28px,1.667vw)] h-[max(16px,1.042vw)]"
                src={usa_flag}
                alt="Bacforce USA"
              />
              <span>USA</span>
            </h4>
            <p>4995 NW 72nd Ave, Suite 307 Miami, FL 33166</p>
          </div>
          <div>
            <h4 className="mb-4 flex items-center font-black">
              <Image
                className="mr-3 inline-block w-[max(28px,1.667vw)] h-[max(16px,1.042vw)]"
                src={canada_flag}
                alt="Bacforce Canada"
              />
              <span>Canada</span>
            </h4>
            <p>71 Dawes Road, Brampton, On L6X 5N9, Toronto</p>
          </div>
          <div>
            <h4 className="mb-4 flex items-center font-black">
              <Image
                className="mr-3 inline-block w-[max(28px,1.667vw)] h-[max(16px,1.042vw)]"
                src={australia_flag}
                alt="Bacforce Australia"
              />
              <span>Australia</span>
            </h4>
            <p>351A Hampstead Rd, Northfield SA 5085</p>
          </div>
          <div>
            <h4 className="mb-4 flex items-center font-black">
              <Image
                className="mr-3 inline-block w-[max(28px,1.667vw)] h-[max(16px,1.042vw)]"
                src={uae_flag}
                alt="Bacforce UAE"
              />
              <span>UAE</span>
            </h4>
            <p>1608 Clover Bay, Business Bay, Dubai, UAE. PO Box 62049</p>
          </div>
          <div>
            <h4 className="mb-4 flex items-center font-black">
              <Image
                className="mr-3 inline-block w-[max(28px,1.667vw)] h-[max(16px,1.042vw)]"
                src={sweden_flag}
                alt="Bacforce Sweden"
              />
              <span>Sweden</span>
            </h4>
            <p>Junkergatan 4, 126 53 Hagersten</p>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center">
            <h3 className="font-light text-dark">
              A <span className="font-black">Bacancy</span> Company
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-14">
            <Contacts contacts={contacts} />
          </div>
        </div>
        <div className="items-center justify-between border-b border-gray pb-6 md:flex md:flex-row-reverse space-y-14 md:space-y-0">
          <ul className="flex justify-center">
            <li>
              <a href="https://www.facebook.com/people/Bacforce/100087627767991/">
                <Image src={facebook} alt="Facebook" className="w-11 h-11" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bacforce">
                <Image src={twitter} alt="Twitter" className="w-11 h-11" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/bacforce/">
                <Image src={linkedin} alt="Linkedin" className="w-11 h-11" />
              </a>
            </li>
          </ul>
          <ul className="flex space-x-12 text-base justify-center">
            <li>
              <a href="https://bacforce.com/about-us">About Us</a>
            </li>
            <li>
              <a href="https://bacforce.com/contactus">Contact Us</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="https://bacforce.com/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <a>© Bacforce, 2022. All rights reserved.</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
