import Image from "next/image";
import { salesforce_developers } from "@/data/features";
import challanges from "../../public/images/trusted-company-logo/challanges.jpg";
const Challenges = () => {
  return (
    <section>
      <h2 className="mb-16 font-bold text-dark text-center">
        <span className="font-light">Challenges Re-Solved by</span> Our
        Professional Salesforce Developer
      </h2>
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <Image
            src={challanges}
            alt="Challenges Re-Solved by Our Professional Salesforce Developer"
          />
        </div>
        <ul className="style-hyphen space-y-6">
          {salesforce_developers.challenges_re_solved.map((feature) => (
            <li key={feature} className="relative pl-7">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Challenges;
