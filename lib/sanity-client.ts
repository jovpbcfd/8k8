import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET_ID,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION || 'v2025-04-09',
    useCdn: false
})

const builder = imageUrlBuilder(client)

// Function to build image URL
export const urlFor = (source: SanityImageSource) => builder.image(source)