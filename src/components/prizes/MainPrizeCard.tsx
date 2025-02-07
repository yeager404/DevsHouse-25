import Image from "next/image";

type MainPrizeProp = {
  src: string; // image src link
  width: number;
  height: number;
  price: string; // Ex: 30,000
  alt: string; // 1st, 2nd or 3rd
};

export default function MainPrizeCard({ src, width, height, price, alt }: MainPrizeProp) {
  const gradientStyle = () => {
    switch (alt) {
      case "1st":
        return {
          background: "linear-gradient(120deg, #FFCC49, #FFFF72)", 
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        };
      case "2nd":
        return {
          background: "linear-gradient(120deg, #4394EA, #B5FFFF)", 
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        };
      case "3rd":
        return {
          background: "linear-gradient(270deg, #89A1C5, #FFFFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        };
      default:
        return {};
    }
  };

  return (
    <div className="flex flex-col justify-end">
      <div className="text-center text-white text-xs font-bold md:text-[24px] whitespace-nowrap">
        <h1
          className={`font-bold font-space ${
            alt === "1st" ? "text-2xl md:text-7xl md:mr-5" : "text-xl md:text-5xl"
          }`}
          style={gradientStyle()}
        >
          {price}
        </h1>
      </div>
      <Image src={src} alt={`${alt} place`} width={width} height={height} className="shadow" />
      <div className="text-center text-white text-xs font-bold md:text-[24px]  whitespace-nowrap">
        {/* <h1 >INR {price}</h1> */}
        <h1 className="bold text-xl md:text-5xl font-space mt-20">{alt} {" "} Prize</h1>
      </div>
    </div>
  );
}
