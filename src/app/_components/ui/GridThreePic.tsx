export default function GridThreePic() {
  return (
    <div className=" w-full h-full flex flex-col flex-wrap">
      <div className="h-full w-1/2 pr-2">
        <div className="w-full h-full bg-primary"></div>
      </div>
      <div className=" h-[62%] w-1/2 pl-2 pb-2">
        <div className="w-full h-full bg-primary"></div>
      </div>
      <div className=" h-[38%] w-1/2 pl-2 pt-2">
        <div className="w-full h-full bg-primary"></div>
      </div>
    </div>
  );
}
