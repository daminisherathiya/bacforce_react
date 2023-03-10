import Image from "next/image";

const Contacts = ({ contacts }) => {
  return contacts.map((contact) => (
    <div key={contact.id} className="flex space-x-4 text-left">
      <div
        className={`flex h-[max(40px,2.917vw)] w-[max(40px,2.917vw)] items-center justify-center rounded-full bg-${contact.bgColor}`}
      >
        <Image
          src={contact.src}
          alt={contact.alt}
          className="h-[max(18px,1.25vw)] w-[max(18px,1.25vw)]"
        />
      </div>
      <div>
        <p>{contact.name}</p>
        <a
          href={contact.href}
          onClick={!contact.onClick && ((e) => e.preventDefault())}
          className="text-xl font-bold"
          dangerouslySetInnerHTML={{ __html: contact.connect }}
        ></a>
      </div>
    </div>
  ));
};

export default Contacts;
