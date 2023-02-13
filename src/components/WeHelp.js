import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

const WeHelp = () => {
  return (
    <section className="bg-dark text-center md:text-left">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-6xl text-white">
            <span className="font-light">
              How Can <br className="hidden md:inline" /> We
            </span>{" "}
            Help?
          </h2>
        </div>
        <div className="md:col-span-8">
          <form>
            <div className="grid gap-9">
              <div className="space-y-9 md:flex md:space-x-9 md:space-y-0">
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <div className="space-y-9 text-right">
                <Textarea placeholder="Message" />
                <Button additionalClasses="bg-secondary hover:bg-secondary-hover">
                  Inquire Now
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
