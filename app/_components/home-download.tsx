import Image from "next/image";

export default function Download() {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div className="w-full text-justify text-white lg:w-3/4">
        <h3 className="text-left text-white font-[900] uppercase mb-2 lg:mb-5 lg:text-2xl">
          Simple to download, get right away
        </h3>
        <p className="mb-2 lg:mb-5">
          Starting to use the 8k8 app on your phone is quick and easy. You can
          get the app for free on both the Google Play Store and the Apple App
          Store, no matter what kind of phone you have. With just a few taps,
          you can get your 8k8 account right away after downloading and
          installing the app. If you don&lsquo;t want to download the app, you
          can still use the 8k8 mobile website smoothly in your browser.
          However, the app has a better and easier-to-use design.
        </p>
        <p className="mb-2 lg:mb-5">
          You can play all of 8k8&lsquo;s gambling games once you&lsquo;ve
          downloaded the app. You can easily access all kinds of games, like
          slots, table games, live dealers, and even quick win games. The app
          loads quickly and is easy to use, so you can find your favorite games,
          handle your account, and even safely deposit and withdraw money while
          you&lsquo;re on the go.
        </p>
      </div>
      <div className="hidden w-full h-full lg:w-[571px] lg:h-[500px] lg:flex">
        <Image
          src="/img/home/Simple to download, get right away_webp.webp"
          width={571}
          height={500}
          alt="Phone sample"
        />
      </div>
    </div>
  );
}
