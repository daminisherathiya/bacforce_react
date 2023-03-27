import { ratePerHour, ratePerMonth } from "@/data/constant";
export const pricingBox = [
  {
    price: `<span class="text-4xl">${ratePerHour}</span> Hourly (USD)`,
    description:
      "We&apos;ll provide a fully signed NDA for your Project&apos;sconfidentiality",
    heightSmall: true,
  },
  {
    price: `<span class="text-4xl">${ratePerMonth}</span> Monthly (USD)`,
    description: "4+ Years of Exp. Salesforce Developer - 160 hours per month",
    heightBig: true,
  },
];
