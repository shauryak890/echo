import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'qkz53g2a',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// Types for blog posts
export interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  author?: string;
  readTime?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: any;
  category?: string;
  tags?: string[];
}

// Queries
export const BLOGS_QUERY = `*[_type == "blog"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage
}`;

export const BLOG_POST_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  author,
  readTime,
  content,
  mainImage,
  category,
  tags
}`;

export const RELATED_BLOGS_QUERY = `*[_type == "blog" && slug.current != $slug] | order(publishedAt desc) [0...4] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage
}`;
