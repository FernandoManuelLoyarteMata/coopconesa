import Image from "next/image";

export default function GridOnePic({ pic }: { pic: any }) {
  console.log(pic);

  return (
    <div className="bg-primary w-full h-full relative overflow-hidden">
      <Image
        src={`http://${pic.url}`}
        alt="foto"
        width={pic.details.image.width}
        height={pic.details.image.height}
        className="absolute object-contain"
      />
    </div>
  );
}
