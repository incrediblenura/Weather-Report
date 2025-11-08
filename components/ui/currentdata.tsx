"use client";
import { ScrollArea, ScrollBar } from "./scroll-area";
import InfoCard from "./info-card";
export default function CurrentData({current}: any) {
  return (
    <div className="">
      <div>
        <h1 className="text-4xl py-5">Current Data</h1>
      </div>
      <ScrollArea className="backdrop-blur-xl w-full h-64 rounded-xl border border-white/20">
        <div className="grid grid-rows-2 auto-cols-max grid-flow-col gap-4 p-4">
            {/* {current.map((prop:any)=>{
                <InfoCard title="Title" data={prop}/>
            })} */}
          <InfoCard title="Last Updated" data={current.last_updated} />
          <InfoCard title="Temperature(&deg; C)" data={current.temp_c} />
          <InfoCard title="Fahrenheit(&deg; F)" data={current.temp_f} />
          <InfoCard title="Feels like(&deg; C)" data={current.feelslike_c} />
          <InfoCard title="Windchill(&deg; C)" data={current.windchill_c} />
          <InfoCard title="Heat index(&deg; C)" data={current.heatindex_c} />
          <InfoCard title="Dew point(&deg; C)" data={current.dewpoint_c} />
          <InfoCard title="Condition" data={current.condition} />
          <InfoCard title="Wind speed(kph)" data={current.wind_kph} />
          <InfoCard title="Wind angle(&deg;)" data={current.wind_degree} />
          <InfoCard title="Wind direction" data={current.wind_dir} />
          <InfoCard title="Pressure(in)" data={current.pressure_in} />
          <InfoCard title="Precipitation(mm)" data={current.precip_mm} />
          <InfoCard title="Humidity" data={current.humidity} />
          <InfoCard title="Cloud(%)" data={current.cloud} />
          <InfoCard title="Day/Night" data={current.is_day} />
          <InfoCard title="UV Index" data={current.uv} />
          <InfoCard title="Gust Speed(kph)" data={current.gust_kph} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
