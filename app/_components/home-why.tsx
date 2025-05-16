import WhyPick8k8 from "./home-why-pick";
import { data } from "@/data/why-pick";

export default function WhyPick() {
  return (
    <section>
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div>
          <h3 className="text-center text-[#04494C] font-[900] uppercase mb-2 lg:mb-8 lg:text-2xl">
            Why Pick 8k8? Easy to trust, safe, and fun
          </h3>
          <WhyPick8k8 data={data} />
        </div>
      </div>
    </section>
  );
}
