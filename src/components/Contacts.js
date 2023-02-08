import Image from "next/image";

const Contacts = ({ contacts }) => {
  return contacts.map((contact) => (
    <div key={contact.id} className="flex items-center space-x-4">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-${
          contact.bgColor
        }`}
      >
        <Image src={contact.src} alt={contact.alt} className="h-6 w-6" />
      </div>
      <div>
        <p>{contact.name}</p>
        <a>{contact.connect}</a>
      </div>
    </div>
  ));
};

export default Contacts;
