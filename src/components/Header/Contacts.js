import Image from "next/image";

const Contacts = ({ contacts }) => {
  return contacts.map((contact) => {
    return (
      <div key={contact.id} className="flex items-center space-x-4">
        <div className="flex h-[max(40px,2.917vw)] w-[max(40px,2.917vw)] items-center justify-center rounded-full bg-ghost-white">
          <Image
            src={contact.src}
            alt={contact.alt}
            className="h-[max(20px,1.250vw)] w-[max(20px,1.250vw)]"
          />
        </div>
        <div>
          <p>{contact.name}</p>
          <a>{contact.connect}</a>
        </div>
      </div>
    );
  });
};

export default Contacts;
