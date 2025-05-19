"use client";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/arrow-button";
import { DotButton, useDotButton } from "@/components/dot-button";

import { BonusesAndPromotionType } from "@/data/bonusesAndPromotion";

type PropType = {
  slides: BonusesAndPromotionType[];
  options?: any;
};

export default function BandPCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    ClassNames({}),
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((item) => (
              <div
                className="embla__slide shadow-x; rounded-md bg-[linear-gradient(to_bottom,_#47898c,_#b1d5ce)] py-2"
                key={item.id}
              >
                <div className="flex gap-2 flex-col justify-around items-center">
                  <div
                    className="w-full h-full lg:w-[500px] lg:h-[250px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
                  >
                    Image 1000x500
                  </div>
                  <div className="text-[#04494C] text-wrap w-full space-y-2">
                    <h3 className="flex items-center gap-2">
                      <span className="font-[900] text-[3rem] inline-block lg:text-[4.664rem] leading-none">
                        {item.id}
                      </span>
                      <span className="font-[900] text-lg/7 text-balance uppercase lg:text-xl lg:self-end lg:leading-6">
                        {item.title}
                      </span>
                    </h3>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          {/* <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div> */}

          <div className="embla__dots gap-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-[30px] h-[30px] cursor-pointer  flex items-center justify-center ${
                  index === selectedIndex
                    ? "bg-[#04494C] text-white font-bold"
                    : "bg-transparent text-[#04494C]"
                }`}
              >
                <span className="text-inherit">{index + 1}</span>
              </DotButton>
            ))}
          </div>
        </div>
      </div>
      {/* {slides.map((item) => (
        <div
          className="bg-[linear-gradient(to_bottom,_#47898c,_#b1d5ce)] flex flex-col items-center justify-center p-2 rounded-lg
            lg:flex-col
            lg:gap-5 lg:p-4  lg:mt-6"
          key={item.id}
        >
          <div
            className="w-full h-full lg:w-[300px] lg:h-[300px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 300x300
          </div>
          <div className="text-[#04494C] w-full space-y-2 lg:w-3/4">
            <h3 className="flex items-center gap-2">
              <span className="font-[900] text-[3rem] inline-block lg:text-[4.664rem] leading-none">
                {item.id}
              </span>
              <span className="font-[900] text-lg/7 inline-block align-bottom uppercase lg:text-xl lg:self-end lg:leading-6">
                {item.title}
              </span>
            </h3>
            {item.content}
          </div>
        </div>
      ))} */}
    </>
  );
}
