import { RealMoneyType } from "@/data/real-money";

export default function PlayWithRealMoney({ data }: { data: RealMoneyType[] }) {
  return (
    <div className="bg-white">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col mb-2 rounded-md lg:rounded-none lg:flex-row lg:mb-0 lg:mt-2 lg:min-h-[76px]"
        >
          <div className="bg-[#04494C] hidden lg:min-w-[100px] text-center lg:flex lg:items-center lg:justify-center lg:flex-none">
            <span className="font-bold text-2xl text-white">{item.id}</span>
          </div>
          <div className="bg-[#D2EDE8] p-2 text-[#04494C] flex items-center lg:p-0 lg:min-w-[360px] lg:ml-2">
            <h4 className="font-[900] text-[16px] uppercase text-pretty lg:my-auto lg:text-[18px] lg:ml-5">
              {item.title}
            </h4>
          </div>
          <div className="bg-[#D2EDE8] w-full px-2 pb-2 lg:w-64 lg:p-0 lg:mx-2 lg:flex-1 lg:flex lg:items-center">
            <span className="text-balance lg:ml-5">{item.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
