import EasyAccess from "./_components/promo-access";
import Banner from "./_components/promo-banner";
import BestDeals from "./_components/promo-best-deals";
import FreeMoneyEveryday from "./_components/promo-freemoney";
import GetFreeBonus from "./_components/promo-get";
import Jackpot from "./_components/promo-jackpot";
import Join from "./_components/promo-join";
import MembershipDayJoinUs from "./_components/promo-join-us";
import BonusForSocialMedia from "./_components/promo-likeAndShare";
import BonusForNewMember from "./_components/promo-member";
import BigParty from "./_components/promo-party";
import SuperWinPlusPrize from "./_components/promo-prizes";
import Rebates from "./_components/promo-rebates";
import RescueMoney from "./_components/promo-rescue-money";
import VipBonus from "./_components/promo-vip";
import Welcome from "./_components/promo-welcome";

export default function PromotionPage() {
  return (
    <>
      <Banner />
      <Welcome />
      <Join />
      <GetFreeBonus />
      <BonusForNewMember />
      <VipBonus />
      <EasyAccess />
      <Jackpot />
      <MembershipDayJoinUs />
      <BigParty />
      <BonusForSocialMedia />
      <FreeMoneyEveryday />
      <RescueMoney />
      <SuperWinPlusPrize />
      <Rebates />
      <BestDeals />
    </>
  );
}
