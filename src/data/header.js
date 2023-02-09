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
    href: "mailto:solutions@bacforce.com"
  },
  {
    id: 2,
    src: call_icon,
    alt: "Phone",
    name: "USA",
    connect: "+1 347 441 4161",
    bgColor: "light",
    href: "tel:+13474414161"
  },
  {
    id: 3,
    src: wp_icon,
    alt: "Phone",
    name: "Canada",
    connect: "+1 416 907 6738",
    bgColor: "light",
    href: "tel:+14169076738"
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
        { name: "Salesforce Consulting", href: "https://bacforce.com/salesforce-consulting-services" },
        { name: "Salesforce Customization", href: "https://bacforce.com/salesforce-customization" },
        { name: "Salesforce Implementation", href: "https://bacforce.com/salesforce-implementation-services" },
        { name: "Salesforce Integration", href: "https://bacforce.com/salesforce-integration-services" },
        { name: "Salesforce Data Migration", href: "https://bacforce.com/salesforce-migration-services" },
      ],
      [
        { name: "Salesforce Managed", href: "https://bacforce.com/salesforce-managed-services" },
        { name: "Salesforce Support", href: "https://bacforce.com/salesforce-support-services" },
        { name: "Salesforce CPQ", href: "https://bacforce.com/salesforce-cpq" },
      ],
    ],
    img: sales_1,
  },
  {
    id: 3,
    title: "Salesforce Cloud",
    links: [
      [
        { name: "Service Cloud", href: "https://bacforce.com/salesforce-service-cloud" },
        { name: "Marketing Cloud", href: "https://bacforce.com/salesforce-marketing-cloud" },
        { name: "Sales Cloud", href: "https://bacforce.com/salesforce-sales-cloud" },
      ],
      [
        { name: "Vaccine Cloud ", href: "https://bacforce.com/salesforce-vaccine-cloud" },
        { name: "Commerce Cloud", href: "https://bacforce.com/salesforce-commerce-cloud" },
        { name: "Financial Cloud", href: "https://bacforce.com/salesforce-financial-services-cloud" },
      ],
    ],
    img: sales_2,
  },
  {
    id: 4,
    title: "Expertise",
    links: [
      [
        { name: "Salesforce Development", href: "https://bacforce.com/salesforce-development-services" },
        { name: "Marketing Cloud", href: "https://bacforce.com/hire-salesforce-developer" },
        { name: "Hire Mulesoft Developer", href: "https://bacforce.com/hire-mulesoft-developer" },
      ],
      [
        { name: "Salesforce AppExchange ", href: "https://bacforce.com/salesforce-appexchange-development-services" },
        { name: "Salesforce App Developer", href: "https://bacforce.com/salesforce-app-development" },
      ],
    ],
    img: sales_3,
  },
];
