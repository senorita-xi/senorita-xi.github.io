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
  series:      z.string().optional(),   // e.g. 'rozovi-km'
  episode:     z.number().optional(),   // e.g. 4  → shows as #04
});

export const collections = {
  'footprints':    defineCollection({ type: 'content', schema: postSchema }),
  'savour':        defineCollection({ type: 'content', schema: postSchema }),
  'pages-frames':  defineCollection({ type: 'content', schema: postSchema }),
  'in-motion':     defineCollection({ type: 'content', schema: postSchema }),
};
