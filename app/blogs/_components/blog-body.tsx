import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity-client";
import { getFormattedDate } from "@/lib/utils";
import TableOfContent from "./table-of-contents";

const customComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={value._key}>{children}</h2>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return <p>Image not found</p>; // Fallback if no image asset is available
      }

      const imageUrl = urlFor(value?.asset)?.width(705).url();

      return (
        <div className="blog-image relative mb-4 w-full h-[200px] md:w-[705px] md:h-[405px]">
          <Image
            src={imageUrl}
            alt={value?.alt || "Image"}
            title={value?.title || "Image"}
            quality={75}
            layout="fill"
            priority
            className="absolute object-cover object-center rounded-xl"
          />
        </div>
      );
    },

    button: ({ value }) => (
      <div className="w-full flex items-center">
        <button
          className="mx-auto bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] py-4 px-8 text-white rounded-xl font-bold mb-3
                transition-transform transform hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300
                "
        >
          <a href={value?.url} target="_blank" rel="noopener noreferrer">
            {value?.text}
          </a>
        </button>
      </div>
    ),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogBody({ data }: { data: any }) {
  if (!data) return;

  return (
    <>
      <header className="pt-4">
        <div className="flex items-center justify-center">
          <Image
            src={data.mainImage.asset.url}
            width={827}
            height={335}
            alt={data.title}
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-2 mt-2 mb-6">
          <figure className="relative w-[20px] h-[20px]">
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              title={data.author.name}
              width={20}
              height={20} // Specify the height (aspect ratio)
              quality={75}
              priority
              className="absolute w-[20px] h-[20px] rounded-full"
            />
          </figure>
          <div className="flex items-center gap-2">
            <p className="font-bold text-md text-white/90">
              {data.author.name}
            </p>
            <p className="text-white/90 text-sm">
              {getFormattedDate(data.publishedAt)}
              <span> - </span>
              <span>2 min read</span>
            </p>
          </div>
        </div>
        <h1 className="font-bold text-xl text-pretty text-white text-center md:text-4xl md:mb-4">
          {data.title}
        </h1>
      </header>
      <div className="pl-3 lg:mb-10 lg:mt-14">
        <p className=" font-bold uppercase text-[#D2EDE8] text-xl lg:mb-5 lg:ml-5 lg:text-3xl">
          Table of Contents
        </p>
        <TableOfContent currentPost={data} />
      </div>
      <div className="blog-content text-white text-justify">
        <PortableText value={data?.body} components={customComponents} />
      </div>
    </>
  );
}
