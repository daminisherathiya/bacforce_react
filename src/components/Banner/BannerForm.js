import Form from "@/components/Form/Form";

const BannerForm = () => {
  return (
    <div className="bg-white p-9 shadow-blue md:col-span-5">
      <h3 className="mb-10 text-center">
        Schedule A Developer Interview and
        <span className="block font-bold text-light-blue">
          Get 15 Days Risk-Free Trial
        </span>
      </h3>
      <Form
        additionalClasses="space-y-3"
        column="column-1"
        buttonWidth="w-full"
      />
    </div>
  );
};

export default BannerForm;
