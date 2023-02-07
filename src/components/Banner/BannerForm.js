import ButtonLink from "@/ui/ButtonLink"
import Input from "@/ui/Input"
import Textarea from "@/ui/Textarea"

const BannerForm = () => {
  return (
    <div className="bg-white p-[max(20px,2.500vw)] text-center col-span-6 2xl:col-span-5 shadow">
      <h3 className="text-[max(18px,1.250vw)] mb-[max(35px,2.500vw)]">Schedule A Developer Interview and Get 15 Days Risk-Free Trial</h3>
      <div className="space-y-3">
        <Input type="name" placeholder="Your Name"/>
        <Input type="email" placeholder="Email Address"/>
        <Input type="tel" placeholder="Phone Number"/>
        <Textarea placeholder="Your Message"/>
        <ButtonLink additionalClasses="bg-green inline-block">INQUIRE NOW</ButtonLink>
      </div>
    </div>
  )
}

export default BannerForm
