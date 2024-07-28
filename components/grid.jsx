import Image from "next/image";
import data from "../public/data.json";

const Grid = ({ item }) => {
  return (
    <div className="flex flex-col rounded-2xl p-4 h-full">
      <div className="flex-1">
        <Image
          src={item.image_location}
          alt={item.alttext}
          width={420}
          height={300}
          className="rounded-t-2xl w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-900 p-4 rounded-b-2xl">
        <div className="text-2xl">{item.id}</div>
        <div className="italic font-light text-base md:text-xl lg:text-2xl">{item.text}</div>
      </div>
    </div>
  );
};

const GridContainer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((item) => (
            <div key={item.id} className="h-full">
            <Grid item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridContainer;
