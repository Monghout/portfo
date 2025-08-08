import Image from "next/image";
import Body from "@/home/body";
import { ModeToggle } from "@/components/ui/modeToggle";

export default function Home() {
  return (
    <div>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <div className="w-full h-full">
        <Body />
      </div>
    </div>
  );
}
