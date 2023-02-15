import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

const WeHelp = () => {
  return (
    <section className="bg-dark text-center md:text-left">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-6xl text-white">
            How Can We
            <span className="font-bold md:block"> Help?</span>
          </h2>
        </div>
        <div className="md:col-span-7">
          <form className="space-y-5">
            <Input type="text" placeholder="Full Name" />
            <div className="flex space-x-5">
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
            </div>
            <Textarea placeholder="Message" />
            <Button additionalClasses="bg-secondary hover:bg-secondary-hover w-full">
              Inquire Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
