import gmail_icon from "../../public/images/header/gmail-icon.png";
import call_icon from "../../public/images/header/call-yellow-icon.png";
import wp_icon from "../../public/images/header/wp-icon.png";
import sales_1 from "../../public/images/header/sales-1.jpeg";
import sales_2 from "../../public/images/header/sales-2.jpeg";

export const contacts = [
  {
    id: 1,
    src: gmail_icon,
    alt: "Gmail",
    name: "Email Us",
    connect: "solutions@bacforce.com",
  },
  {
    id: 2,
    src: call_icon,
    alt: "Phone",
    name: "USA",
    connect: "+1 347 441 4161",
  },
  {
    id: 3,
    src: wp_icon,
    alt: "Phone",
    name: "Canada",
    connect: "+1 416 907 6738",
  },
];

export const salesforce_services = {
  title: "Salesforce Services",
  links: [
    [
      { name: "Salesforce Consulting", url: "" },
      { name: "Salesforce Customization", url: "" },
      { name: "Salesforce Implementation", url: "" },
      { name: "Salesforce Integration", url: "" },
      { name: "Salesforce Data Migration", url: "" },
    ],
    [
      { name: "Salesforce Managed", url: "" },
      { name: "Salesforce Support", url: "" },
      { name: "Salesforce CPQ", url: "" },
    ],
  ],
  img: sales_1,
};

export const salesforce_cloud = {
  title: "Salesforce Cloud",
  links: [
    [
      { name: "Service Cloud", url: "" },
      { name: "Marketing Cloud", url: "" },
      { name: "Sales Cloud", url: "" },
    ],
    [
      { name: "Vaccine Cloud ", url: "" },
      { name: "Commerce Cloud", url: "" },
      { name: "Financial Cloud", url: "" },
    ],
  ],
  img: sales_2,
};
