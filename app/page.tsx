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

export default function Home() {
  return (
    <>
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
