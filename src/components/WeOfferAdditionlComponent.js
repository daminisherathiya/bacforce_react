import { bacforceYears, projectDelivered } from "@/data/constant";

const WeOfferAdditionlComponent = () => {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="border-r border-gray pr-3 xs:pr-12">
        <h3 className="font-bold text-dark">{bacforceYears}</h3>
        <p className="text-secondary">Years of CRM Experience</p>
      </div>
      <div className="border-r border-gray px-3 xs:px-12">
        <h3 className="font-bold text-dark">{projectDelivered}</h3>
        <p className="text-secondary">Salesforce Project Delivered</p>
      </div>
      <div className="pl-3 xs:pl-12">
        <h3 className="font-bold text-dark">24*7</h3>
        <p className="text-secondary">Technical Support</p>
      </div>
    </div>
  );
};

export default WeOfferAdditionlComponent;
