import Image from "next/image";
import { salesforce_developers } from "@/data/features";
import challanges from "../../public/images/trusted-company-logo/challanges.jpg";
const Challenges = () => {
  return (
    <section className="px-[max(20px,13.542vw)] py-[max(50px,5.208vw)]">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Image src={challanges} alt="Challenges Re-Solved by Our Professional Salesforce Developer" />
        </div>
        <ul className="style-hyphen space-y-[max(10px,1.250vw)]">
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
