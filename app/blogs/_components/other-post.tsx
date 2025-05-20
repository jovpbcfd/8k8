import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity-client";
import { getFormattedDate } from "@/lib/utils";

type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    alt: string | null;
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  description: string;
};

export default function BlogOtherList({ otherPost }: { otherPost: Post[] }) {
  return (
    <>
      <nav className="pt-4">
        <ul className="flex flex-col gap-4">
          {otherPost.map((item: Post) => (
            <li key={item._id}>
              <Link
                href={`/blogs/${item.slug.current}`}
                className="flex gap-4 p-2 rounded-md hover:bg-white/10"
              >
                <Image
                  alt={item.title}
                  src={urlFor(item?.mainImage?.asset.url)
                    .width(280)
                    .height(175)
                    .url()}
                  width={280}
                  height={170}
                  loading="eager"
                  className="h-full w-40 h-40 object-cover rounded-md"
                />
                <div className="w-full md:w-full">
                  <p className="font-bold text-white md:text-lg">
                    {item.title}
                  </p>
                  {/* <p className="text-md mt-[6px] leading-tight line-clamp-2">
                    {item.description}
                  </p> */}
                  <div className="text-[12px] text-white/50">
                    <span>Posted</span>
                    <span> on </span>
                    <span>{getFormattedDate(item.publishedAt)} </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
