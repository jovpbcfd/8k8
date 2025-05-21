// import Image from "next/image";
// import Link from "next/link";
import Welcome from "./_components/home-welcome";
import Casino from "./_components/home-casino";
import BonusesAndPromotion from "./_components/home-bonusesAndPromotion";
import Experience from "./_components/home-experience";
import Enjoy from "./_components/home-enjoy";
import WhyPick from "./_components/home-why";
import JoinNow from "./_components/home-join";
import CustomerService from "./_components/home-customer-service";
import CarouselPlay from "./_components/home-carousel-play";

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto text-white p-2 md:p-0">
        <div className="my-2 md:my-4">
          <CarouselPlay />
        </div>
      </section>
      <Welcome />
      <Casino />
      <BonusesAndPromotion />
      <Experience />
      <Enjoy />
      <WhyPick />
      <JoinNow />
      <CustomerService />
    </>
  );
}
