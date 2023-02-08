import gmail_icon from "../../public/images/header/gmail-icon.png";
import call_icon from "../../public/images/header/call-yellow-icon.png";
import wp_icon from "../../public/images/header/wp-icon.png";
import sales_1 from "../../public/images/header/sales-1.jpeg";
import sales_2 from "../../public/images/header/sales-2.jpeg";
import sales_3 from "../../public/images/header/sales-3.jpeg";

export const contacts = [
  {
    id: 1,
    src: gmail_icon,
    alt: "Gmail",
    name: "Email Us",
    connect: "solutions@bacforce.com",
    bgColor: "light",
  },
  {
    id: 2,
    src: call_icon,
    alt: "Phone",
    name: "USA",
    connect: "+1 347 441 4161",
    bgColor: "light",
  },
  {
    id: 3,
    src: wp_icon,
    alt: "Phone",
    name: "Canada",
    connect: "+1 416 907 6738",
    bgColor: "light",
  },
];

export const services = [
  {
    id: 1,
    title: "About Us",
    href: "https://bacforce.com/about-us",
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    title: "Expertise",
    links: [
      [
        { name: "Salesforce Development", url: "" },
        { name: "Marketing Cloud", url: "" },
        { name: "Hire Mulesoft Developer", url: "" },
      ],
      [
        { name: "Salesforce AppExchange ", url: "" },
        { name: "Salesforce App Developer", url: "" },
      ],
    ],
    img: sales_3,
  },
];
