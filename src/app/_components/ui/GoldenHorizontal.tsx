//GoldenHorizontal.tsx
import { ReactNode } from "react";
import GridFourPic from "./GridFourPic";
import GridOnePic from "./GridOnePic";
import GridThreePic from "./GridThreePic";
import GridTwoPic from "./GridTwoPic";
import TextScroll from "./TextScroll";

export default function GoldenHorizontal({
  topTitle = false,
  textRight = false,
  picturesCount,
  children,
  pics,
}: {
  topTitle?: boolean;
  picturesCount?: number; // 1, 2, 3, 4
  textRight?: boolean;
  children: ReactNode;
  pics?: any;
}) {
  const renderGridComponent = () => {
    switch (picturesCount) {
      case 1:
        return <GridOnePic pic={pics[0].fields.file} />;
      case 2:
        return <GridTwoPic />;
      case 3:
        return <GridThreePic />;
      case 4:
        return <GridFourPic />;
      default:
        return null; // O puedes retornar un componente por defecto
    }
  };

  console.log(pics[0].fields.file);

  return (
    <section
      className={`flex w-full h-screen pb-8 px-16 gap-4 pt-16 ${
        textRight ? `flex-row-reverse` : ``
      }`}
    >
      <div className="row w-[38%] h-full">
        <TextScroll>{children}</TextScroll>
      </div>
      <div className="w-[62%] h-full">{renderGridComponent()}</div>
    </section>
  );
}
