import Image from "next/image";

const ImageSection = ({ divClasses, imageClasses, imageSrc, imageAlt, priority }) => {
  return (
    <div className={divClasses}>
      <Image
        className={imageClasses}
        src={imageSrc}
        alt={imageAlt}
        priority = {priority}
      />
    </div>
  );
};

export default ImageSection;
