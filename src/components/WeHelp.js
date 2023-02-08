import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

const WeHelp = () => {
  return (
    <section className="bg-dark text-white">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex items-center">
          <h2 className="text-6xl">
            <span className="font-light">How Can <br/> We</span> Help?
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="grid md:grid-cols-2 gap-9">
            <div className="space-y-9">
              <Input type="text" placeholder="Full Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
            </div>
            <div>
              <Textarea placeholder="Message" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
