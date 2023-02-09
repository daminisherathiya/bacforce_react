import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

const WeHelp = () => {
  return (
    <section className="bg-dark text-white text-center md:text-left">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 md:flex md:items-center">
          <h2 className="text-6xl">
            <span className="font-light">How Can <br className="hidden md:inline"/> We</span> Help?
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="grid md:grid-cols-2 gap-9">
            <div className="space-y-9">
              <Input type="text" placeholder="Full Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
            </div>
            <div className="space-y-9 md:text-right">
              <Textarea placeholder="Message" />
              <Button additionalClasses="bg-secondary hover:bg-secondary-hover">INQUIRE NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
