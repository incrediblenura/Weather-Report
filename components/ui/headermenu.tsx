import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { SidebarTrigger } from "./sidebar";
import Image from "next/image";

export default function HeaderMenu(){
    return(
<Menubar>
    <SidebarTrigger />
  <MenubarMenu>
    <Image src="/weatherapi_logo.png" width={80} height={40} alt="Weather API"/>
        <MenubarTrigger>Weather Report App</MenubarTrigger>
  </MenubarMenu>
</Menubar>);
}