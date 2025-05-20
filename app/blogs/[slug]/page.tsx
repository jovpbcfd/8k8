// import Link from "next/link";
// import Image from "next/image";
import { getBlogBySlug } from "@/lib/get-blog";
import BlogBody from "../_components/blog-body";
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
  const { currentPost } = blog?.data;
  //#036468
  return (
    <div className="bg-[#04494C]">
      <div className="max-w-[1120px] shadow-lx mx-auto">
        <div className="bg-gradient-to-b from-[#036468] to-[#036468]">
          <article>
            <BlogBody data={currentPost} />
          </article>
        </div>
      </div>
    </div>
  );
}
