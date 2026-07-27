import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// 홈페이지(정적 index.html)가 fetch 해서 "최근 글"을 보여주기 위한 경량 JSON 피드.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, 5)
    .map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      url: `/blog/${post.id}`,
      pubDate: post.data.pubDate.toISOString(),
    }));

  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
