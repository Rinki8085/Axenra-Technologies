import Image from "next/image";
import GIF from "../public/logo_gif.gif";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <Image
        src={GIF}
        alt="Loading..."
        width={200}
        height={200}
        unoptimized
      />
    </div>
  );
}