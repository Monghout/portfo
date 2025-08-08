import Image from "next/image";
import Body from "@/home/body";
import { ModeToggle } from "@/components/ui/modeToggle";

export default function Home() {
  return (
    <div>
      <div className="w-full h-full">
        <Body />
      </div>
    </div>
  );
}
