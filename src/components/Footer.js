import Image from "next/image";
import india_flag from "../../public/images/footer/footer-flag/india-flag.jpg";
import usa_flag from "../../public/images/footer/footer-flag/usa-flag.jpg";
import canada_flag from "../../public/images/footer/footer-flag/canada-flag.jpg";
import australia_flag from "../../public/images/footer/footer-flag/australia-flag.jpg";
import uae_flag from "../../public/images/footer/footer-flag/uae-flag.jpg";
import sweden_flag from "../../public/images/footer/footer-flag/sweden-flag.jpg";
const Footer = () => {
  return (
    <section className="bg-gradient-to-b from-white to-water px-[max(20px,13.542vw)] py-[max(50px,5.208vw)]">
      <div className="grid grid-cols-6 gap-20">
        <div>
          <h4 className="mb-4 font-black">
            <Image
              className="mr-3 inline-block"
              src={india_flag}
              alt="Bacforce India"
            />
            <span>India (HQ)</span>
          </h4>
          <p>15-16, Times Corporate Park, Thaltej, Ahmedabad, Gujarat 380059</p>
        </div>
        <div>
          <h4 className="mb-4 font-black">
            <Image
              className="mr-3 inline-block"
              src={usa_flag}
              alt="Bacforce USA"
            />
            <span>USA</span>
          </h4>
          <p>4995 NW 72nd Ave, Suite 307 Miami, FL 33166</p>
        </div>
        <div>
          <h4 className="mb-4 font-black">
            <Image
              className="mr-3 inline-block"
              src={canada_flag}
              alt="Bacforce Canada"
            />
            <span>Canada</span>
          </h4>
          <p>71 Dawes Road, Brampton, On L6X 5N9, Toronto</p>
        </div>
        <div>
          <h4 className="mb-4 font-black">
            <Image
              className="mr-3 inline-block"
              src={australia_flag}
              alt="Bacforce Australia"
            />
            <span>Australia</span>
          </h4>
          <p>351A Hampstead Rd, Northfield SA 5085</p>
        </div>
        <div>
          <h4 className="mb-4 font-black">
            <Image
              className="mr-3 inline-block"
              src={uae_flag}
              alt="Bacforce UAE"
            />
            <span>UAE</span>
          </h4>
          <p>1608 Clover Bay, Business Bay, Dubai, UAE. PO Box 62049</p>
        </div>
        <div>
          <h4 className="mb-4 font-black">
            <Image
              className="mr-3 inline-block"
              src={sweden_flag}
              alt="Bacforce Sweden"
            />
            <span>Sweden</span>
          </h4>
          <p>Junkergatan 4, 126 53 Hagersten</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h4>A Bacancy Company</h4>
        </div>
        <div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
