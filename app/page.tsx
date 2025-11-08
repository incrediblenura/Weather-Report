import Link from "next/link";
import './globals.css';
import { Separator }from '@/components/ui/separator';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import CurrentData from "@/components/ui/currentdata";
import LocationInfo from "@/components/ui/location-info";''

export default async function Home() {
  //http://api.weatherapi.com/v1/current.json?key=225a105054c7450fa91132735250711&q=23.00,83.50
  const data = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=225a105054c7450fa91132735250711&q=Bilaspur",
    {
      cache: "no-store",
    }
  );

  if (!data.ok) {
    throw new Error("I told you there should be an error.");
  }

  const info = await data.json();
  
  const location = info.location;
  const current = info.current;
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center flex-col px-5">
        <div className="flex items-center w-full h-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Weather Report</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Realtime </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="flex flex-col px-5">
        <h1 className="text-4xl py-5">Location Info</h1>
        <LocationInfo location={location}/>
        <Separator className="my-4"/>
        <CurrentData current={current}/>
      </div>
    </div>
  );
}
