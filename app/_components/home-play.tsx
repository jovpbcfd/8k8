import GridDisplay from "@/components/ui/grid-display";
import { data } from "@/data/why-play";

const makeListToElements = data.map((item, index) => (
  <div key={index} className="bg-white shadow-lg rounded-xl text-center p-6">
    {item.image}
    <div>
      <strong>{item.title} </strong>
      <p>{item.content}</p>
    </div>
  </div>
));

export default function WhyShouldPlay() {
  return (
    <div className="lg:mt-6">
      <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-5 lg:text-xl">
        Why Should You Play Slots at 8k8?
      </h3>
      <GridDisplay alignment="3/2" items={makeListToElements} />
    </div>
  );
}
