import { client, urlFor } from "@/lib/sanity-client";
import Link from "next/link";
import Image from "next/image";
import { getFormattedDate } from "@/lib/utils";
import Pagination from "./_components/pagination";

type Post = {
  _id: string;
  title: string;
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage: any;
  author: {
    name: string;
    image: {
      asset: string;
    };
  };
  slug: {
    current: string;
  };
  description: string;
};

// const POSTS_QUERY = `*[_type == "post-mega"] | order(publishedAt desc) {
//     _id,
//     title,
//     slug,
//     author->{
//        name,
//        image {
//         asset->{
//           url
//         }
//       }
//       },
//     publishedAt,
//     description,
//     mainImage {
//        alt,
//       asset->{
//         url

//       }
//     }
//   }`;

export const revalidate = 5;
// export const dynamic = "force-dynamic";
const POSTS_PER_PAGE = 6;

function PostList({ post }: { post: Post }) {
  return (
    <Link
      key={post._id}
      href={`/blogs/${post.slug.current}`}
      className="flex flex-col items-center gap-[24px] md:flex-row mx-[20px] blog-list-divider"
    >
      <div className="relative w-[280px] h-[175px] rounded-md bg-gray-50 flex items-center justify-center md:w-[413px] md:h-[217px]">
        <Image
          alt={post.title}
          src={urlFor(post?.mainImage).width(413).height(217).url()}
          width={413}
          height={217}
          loading="eager"
          className="absolute h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-[50%]">
        <p className="font-bold text-[#FF5561] md:text-3xl">{post.title}</p>
        <p className="text-[1rem] text-white mt-[6px] leading-tight">
          {post.description}
        </p>

        <div className="text-sm text-white mt-4">
          <span>By </span>
          <span>{post.author.name} </span>
          <span> — </span>
          <span>{getFormattedDate(post.publishedAt)} </span>
        </div>
      </div>
    </Link>
  );
}

export default async function Page({
  searchParams,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams?: Promise<any>;
}) {
  // data
  // const posts = await client.fetch(POSTS_QUERY);
  const params = await searchParams;
  const currentPage = parseInt(params?.page || "1", 10);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = await client.fetch<Post[]>(
    `*[_type == "post-8k8"] | order(publishedAt desc) [${start}...${start + POSTS_PER_PAGE}] {
        _id,
        title,
        slug,
        author->{
          name, 
          image {
            asset->{
              url
            }
          }
        },
        publishedAt,
        description,
        mainImage {
          alt,
          asset->{
            url
          }
        }
      }`
  );

  const totalPosts = await client.fetch<number>(
    'count(*[_type == "post-8k8"])'
  );

  return (
    <section className="py-6 px-4 lg:py-15">
      <div className="max-w-[1200px] mx-auto">
        {posts.length === 0 ? (
          <p>No blog post available</p>
        ) : (
          <ul className="flex flex-col gap-10">
            {posts.map((post: Post, index: number) => {
              return (
                <li key={index}>
                  <PostList post={post} key={index} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="lg:mt-20">
        {totalPosts > 6 && (
          <Pagination totalPosts={totalPosts} postsPerPage={POSTS_PER_PAGE} />
        )}
      </div>
    </section>
  );
}
