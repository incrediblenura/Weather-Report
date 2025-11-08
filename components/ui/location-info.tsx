import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaLocationDot, FaHouse } from "react-icons/fa6";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";

export default function LocationInfo({ location }: { location: any }) {
  const info = [
    {
        index: 0,
      icon: FaHouse,
      name: location.name,
      title: "City",
    },
    {
        index: 1,
      icon: FaLocationDot,
      name: location.country,
      title: "Country",
    },
    {
        index: 2,
      icon: TbWorldLatitude,
      name: location.lat,
      title: "Latitude",
    },
    {
        index: 3,
      icon: TbWorldLongitude,
      name: location.lon,
      title: "Longitude",
    },
  ];
  return (
      <div className="flex justify-around">
        {info.map((item) => (
          <div key={item.index} className="flex flex-col m-6 border w-70 text-3xl justify-around h-50 rounded-xl items-center">
            <item.icon />
            <h1>{item.name}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
  );
}
