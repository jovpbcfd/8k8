export default function Welcome() {
  return (
    <section className="mt-[30px] lg:sections-gutter-y lg:mt-[40px]">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-3/4">
            <h1
              className="text-[#DA1E49] text-2xl text-pretty tracking-wide font-bold tracking-normal mb-2
            lg:text-balance
            lg:mb-5 lg:text-4xl"
            >
              Welcome to 8k8.com - Your Ultimate Destination for Rewards and
              Bonuses!
            </h1>
            <div className="text-justify">
              <p>
                We want 8k8.com to be a fun and exciting place where our members
                always feel like they are important. Not only is our platform
                meant to entertain, but it's also meant to thank our community.
                We offer a lot of different deals and bonuses to both new and
                old players. Whether you're an agent who wants to easily earn
                daily rebates or a serious gamer who wants to increase your
                wins, we have put together the perfect set of deals for you.
              </p>
              <p>
                You don't just play games when you join 8k8.com; you join a
                lively group where being loyal is rewarded and every spin could
                win you a lot of money. We want everyone to have a chance,
                whether they are just starting out or want to move up in their
                membership. When you come to our site, we want it to be fun,
                useful, and full of chances for you.
              </p>
            </div>
          </div>
          <div
            className="w-full h-full lg:w-[300px] lg:h-[300px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 300x300
          </div>
        </div>
      </div>
    </section>
  );
}
