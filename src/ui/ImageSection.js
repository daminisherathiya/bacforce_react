import Image from "next/image";
const ImageSection = ({ divClasses, imageClasses, imageSrc, imageAlt }) => {
  return (
    <div className={divClasses}>
      <Image className={imageClasses} src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default ImageSection;
