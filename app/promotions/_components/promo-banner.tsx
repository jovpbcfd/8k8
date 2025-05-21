import Image from "next/image";

export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4 pt-[10px] lg:pt-[40px]">
        <div className="h-full w-full">
          <Image
            src="/img/banner/8k8-get-bonus-everyday.webp"
            width={1200}
            height={220}
            alt="Get bonus everyday"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="/img/banner/8k8-super-win-plus-prize.webp"
            width={1200}
            height={220}
            alt="Super win plus prize"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="/img/banner/8k8-enjoy-instant-rebates.webp"
            width={1200}
            height={220}
            alt="Enjoy instant rebates"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="/img/banner/8k8-game-losses.webp"
            width={1200}
            height={220}
            alt="Enjoy instant rebates"
          />
        </div>
      </div>
    </div>
  );
}
