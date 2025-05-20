import { client } from './sanity-client'


const POST_QUERY = `{
    "currentPost": *[_type == "post-8k8" && slug.current == $slug][0] {
      title,
      body,
      author->{
       name, 
       image {
        asset->{
          url
        }
      }
      },
      description,
      publishedAt,
      mainImage {
        alt,
        asset->{
          url
        }
      }
    },
    "otherBlogs": *[_type == "post-8k8" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      description,
      slug,
      publishedAt,
      mainImage {
        alt,
        asset->{
          url
        }
      }
    }
  }`

export async function getBlogBySlug(slug: string) {
    try {
        const blog = await client.fetch(POST_QUERY, { slug })

        return { success: true, data: blog }
    } catch (error) {
        console.error(`Error fetching post data for slug "${slug}":`, error)
        return { success: false, data: null }
    }
}