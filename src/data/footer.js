import mail from "../../public/images/footer/mail.png";
import map_pin from "../../public/images/footer/map-pin.png";
import phone from "../../public/images/footer/phone.png";

export const contacts = [
  {
    id: 1,
    src: map_pin,
    alt: "Map Pin",
    name: "USA Address",
    connect:
      "601 Brickell Key Drive, Suite 700,<br/> Miami, Florida, 33131, USA",
    bgColor: "dark",
    href: "https://www.google.com/maps/place/601+Brickell+Key+Dr+%23700,+Miami,+FL+33131,+USA/data=!4m2!3m1!1s0x88d9b4286b844fdf:0x6217270840a053e3?sa=X&ved=2ahUKEwjLspXAnab9AhWHXGwGHaseAdoQ8gF6BAgJEAI",
  },
  {
    id: 2,
    src: phone,
    alt: "Phone",
    name: "Contact Number",
    connect: "+1 347 441 4161",
    bgColor: "dark",
    href: "tel:+13474414161",
  },
  {
    id: 3,
    src: mail,
    alt: "Mail",
    name: "Email Us",
    connect: "solutions@bacforce.com",
    bgColor: "dark",
    href: "mailto:solutions@bacforce.com",
  },
];
