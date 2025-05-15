import { LayoutGrid } from "@/components/ui/layout-grid";
import { games } from "@/data/games";

export default function Casino() {
  return (
    <section className="bg-[linear-gradient(to_bottom,_#d2ede8,_#eaf6ef,_#ffffff)] lg:sections-gutter-y">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div>
          <h2 className="text-[#DA1E49] font-bold text-xl tracking-normal mb-2 text-center uppercase lg:mb-5 lg:text-3xl">
            Check out the 8k8 Casino for slots, live dealers, and more.
          </h2>
          <p className="text-justify">
            Welcome to 8k8 Casino, the best place to have fun online. There are
            a lot of fun games and big prizes to be won at 8k8. com, an exciting
            online casino. You can bet whether this is your first time or
            you&apos;ve done it before. Our site has many games, from fun video
            slots to live dealer games where you can talk to the player. This
            way, every player can find something they like.
          </p>
        </div>
        <div>
          <LayoutGrid cards={games} />
        </div>
      </div>
    </section>
  );
}
