import { FormCol1 } from "@/components/Form"

const BannerForm = () => {
  return (
    <div className="bg-white p-9 shadow-blue md:col-span-5">
      <h3 className="mb-10 text-center">
        Schedule A Developer Interview and
        <span className="block font-bold text-light-blue">
          Get 15 Days Risk-Free Trial
        </span>
      </h3>
      <FormCol1/>
    </div>
  );
};

export default BannerForm;
