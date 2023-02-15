import Image from "next/image";
import { salesforce_developers } from "@/data/features";
import challanges from "../../public/images/salesforce-developmentcompany/challanges.jpg";
const Challenges = () => {
  return (
    <section>
      <h2 className="mb-16 text-center text-dark">
        Challenges Re-Solved by
        <span className="font-bold">
          {" "}
          Our Professional Salesforce Developer
        </span>
      </h2>
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div className="mx-auto">
          <Image
            className="h-[max(198px,24.167vw)] w-[max(280px,34.167vw)]"
            src={challanges}
            alt="Challenges Re-Solved by Our Professional Salesforce Developer"
          />
        </div>
        <ul className="space-y-6">
          {salesforce_developers.challenges_re_solved.map((feature) => (
            <li
              key={feature}
              className="after:content[''] relative pl-7 after:absolute after:left-0 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-y-2/4 after:rounded after:bg-primary after:bg-contain after:bg-center after:bg-no-repeat"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Challenges;
