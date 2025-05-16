import { WhyPickType } from "@/data/why-pick";

export default function WhyPick8k8({ data }: { data: WhyPickType[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
      {data.map((item) => (
        <div key={item.id} className="bg-white lg:min-h-[70px]">
          <div className="flex">
            <div className="bg-[#04494C] flex items-center justify-center lg:min-w-[100px] lg:flex-none">
              <span className="font-bold text-2xl text-white">{item.id}</span>
            </div>
            <div className="bg-[#04494C] lg:w-full lg:ml-2 lg:flex lg:items-center lg:flex-1">
              <h4 className="font-[900] text-[24px] uppercase text-[#D2EDE8] lg:ml-5">
                {item.title}
              </h4>
            </div>
          </div>
          <div className="bg-[#D2EDE8] lg:min-h-[220px] lg:p-5 lg:mt-2">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
