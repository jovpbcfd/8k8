// import Link from "next/link";
// import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug } from "@/lib/get-blog";
import BlogBody from "../_components/blog-body";
import BlogOtherList from "../_components/other-post";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import BlogOtherList from "../_components/other-post";
// import Promotion from "../_components/promotion-carousel";
// import Banner from "@/components/banner";
// import { blogBanner } from "@/data/banner-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);
  const currentPost = blog?.data?.currentPost ?? {};

  return {
    title: currentPost.title || "Blog",
    description: currentPost.description || "",
    robots: {
      index: false, // noindex
      follow: false, // nofollow
    },
    openGraph: {
      title: currentPost.title || "Blog",
      description: currentPost.description || "",
      url: `${process.env.APP_DOMAIN}/blogs/${slug}`,
      images: currentPost.mainImage.asset.url,
    },
    twitter: {
      card: "summary_large_image",
      title: currentPost.title || "Blog",
      description: currentPost.description || "",
      images: currentPost.mainImage.asset.url,
    },
    alternates: {
      cannonical: `${process.env.APP_DOMAIN}/blogs/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const { currentPost, otherBlogs } = blog?.data;
  const handle = otherBlogs.slice(0, 2);

  //#036468
  return (
    <div className="bg-[#04494C]">
      <div className="max-w-[1120px] shadow-lx mx-auto">
        <div className="bg-gradient-to-b from-[#036468] to-[#036468]">
          <article>
            <BlogBody data={currentPost} />
          </article>
          <div className="lg:py-6">
            <p className="pl-3 font-[900] capitalize text-yellow-300 lg:text-2xl">
              You may also like
            </p>
            <BlogOtherList otherPost={otherBlogs} />
          </div>
          <div className="border-t border-gray-400 my-4"></div>
          <div className="px-3 flex justify-between items-center lg:pb-10 lg:pt-5">
            <div className="text-white p-2 rounded-md hover:bg-white/20">
              <Link
                href={`/blogs/${handle[1].slug.current}`}
                className="flex items-center lg:gap-3"
              >
                <ChevronLeft />
                <p className="flex text-inherit flex-col">
                  <span className="font-bold text-yellow-300">PREVIOUS</span>
                  <span>{handle[1].title}</span>
                </p>
              </Link>
            </div>
            <div className="border-l border-gray-400 h-15"></div>
            <div className="text-white p-2 rounded-md hover:bg-white/20">
              <Link
                href={`/blogs/${handle[0].slug.current}`}
                className="flex items-center lg:gap-3"
              >
                <p className="flex text-inherit flex-col">
                  <span className="ml-auto font-bold text-yellow-300">
                    NEXT
                  </span>
                  <span>{handle[0].title}</span>
                </p>
                <ChevronRight className="text-inherit" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
