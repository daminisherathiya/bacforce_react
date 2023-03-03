import Form from "@/components/Form/Form";
const WeHelp = () => {
  return (
    <section className="bg-dark md:text-left">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-6xl text-white">
            How Can We
            <span className="font-bold md:block"> Help?</span>
          </h2>
        </div>
        <div className="md:col-span-7">
          <Form additionalClasses="space-y-5" column="column-2" />
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
