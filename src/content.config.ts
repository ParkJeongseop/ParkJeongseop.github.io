import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 블로그 글 컬렉션. src/content/blog/*.md 를 글로 인식합니다.
// (지금은 한국어 전용. 나중에 영어를 추가하더라도 frontmatter/구조 변경 최소화되도록 단순하게 유지)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // 네이버 블로그에 같이 발행된 글의 URL (있으면 하단에 "네이버에서 댓글 남기기" 링크 표시)
    naverUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
