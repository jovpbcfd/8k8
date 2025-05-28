import { data } from "@/data/why-play";

export default function WhyShouldPlay() {
  const firstEl = data.slice(0, 3);
  const lastEl = data.slice(3);

  return (
    <div className="lg:mt-6">
      <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-5 lg:text-2xl">
        Why Should You Play Slots at 8k8?
      </h3>
      <div className="w-full max-w-6xl py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {firstEl.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#cdfbf5] to-[#7fb1b0] shadow-lg rounded-xl text-center p-6"
            >
              <div>{item.image}</div>
              <div className="text-[#04494C]">
                <strong className="font-[900] uppercase text-inherit lg:text-lg">
                  {item.title}
                </strong>
                <p className="text-inherit">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-[750px] flex flex-col justify-center gap-4 lg:flex-row">
          {lastEl.map((item, index) => (
            <div
              key={index}
              className="w-full bg-gradient-to-b from-[#cdfbf5] to-[#7fb1b0] shadow-lg rounded-xl text-center p-6"
            >
              <div>{item.image}</div>
              <div className="text-[#04494C]">
                <strong className="font-[900] uppercase text-inherit lg:text-lg">
                  {item.title}
                </strong>
                <p className="text-inherit">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
