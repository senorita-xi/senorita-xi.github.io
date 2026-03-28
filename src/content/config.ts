import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title:       z.string(),
  pubDate:     z.date(),
  description: z.string(),
  coverImage:  z.string(),
  category:    z.string(),
  location:    z.string().optional().default(''),
  tags:        z.array(z.string()).optional(),
  draft:       z.boolean().default(false),
});

export const collections = {
  'footprints':    defineCollection({ type: 'content', schema: postSchema }),
  'savour':        defineCollection({ type: 'content', schema: postSchema }),
  'pages-frames':  defineCollection({ type: 'content', schema: postSchema }),
  'in-motion':     defineCollection({ type: 'content', schema: postSchema }),
};
