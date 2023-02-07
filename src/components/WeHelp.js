const { default: Input } = require("@/ui/Input")
const { default: Textarea } = require("@/ui/Textarea")

const WeHelp = () => {
  return (
    <section className="bg-green-blue px-[max(20px,13.542vw)] py-[max(50px,5.208vw)] text-center text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <h4>How Can We Help?</h4>
        </div>
        <div className="col-span-7">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Input type="text" placeholder="Full Name"/>
              <Input type="email" placeholder="Email"/>
              <Input type="tel" placeholder="Phone Number"/>
            </div>
            <div>
              <Textarea placeholder="Message"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
