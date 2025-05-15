import { BonusesAndPromotion } from "@/data/bonusesAndPromotion";

export default function BandPList({ data }: { data: BonusesAndPromotion[] }) {
  return (
    <>
      {data.map((item) => (
        <li
          className="bg-[linear-gradient(to_bottom,_#47898c,_#b1d5ce)] flex flex-col items-center justify-center p-2 rounded-lg
            lg:flex-row
            lg:gap-5 lg:p-4 lg:30px lg:mt-6"
          key={item.id}
        >
          <div
            className="w-full h-full lg:w-[300px] lg:h-[300px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 300x300
          </div>
          <div className="text-[#04494C] w-full space-y-2 lg:w-3/4">
            <h3 className="flex items-center gap-2">
              <span className="font-[900] text-[3rem] inline-block lg:text-[4.664rem] leading-none">
                {item.id}
              </span>
              <span className="font-[900] text-lg/7 inline-block align-bottom uppercase lg:text-xl lg:self-end lg:leading-6">
                {item.title}
              </span>
            </h3>
            {item.content}
          </div>
        </li>
      ))}
    </>
  );
}
