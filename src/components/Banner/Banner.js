import { salesforce_developers } from "@/data/features";
import { salesforce1BannerHeading } from "@/data/BannerHeading";
import BannerForm from "@/components/Banner/BannerForm";
import BulletPointList from "@/ui/BulletPointList";
import BannerHeading from "./BannerHeading";

const Banner = () => {
  return (
    <section className="bg-light-blue pt-60 pb-40" id="Form">
      <div className="grid gap-16 md:grid-cols-9 md:gap-5">
        <BannerHeading data={salesforce1BannerHeading}>
          <BulletPointList data={salesforce_developers} />
        </BannerHeading>
        <BannerForm />
      </div>
    </section>
  );
};

export default Banner;
