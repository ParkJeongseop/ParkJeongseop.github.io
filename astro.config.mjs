// @ts-check
import { defineConfig } from 'astro/config';

// 커스텀 도메인(www.parkjeongseop.com) 루트에서 서빙되므로 base는 비워둡니다.
// 기존 이력서(index.html)와 assets/ 는 public/ 에 그대로 두어 / 경로에 정적 서빙되고,
// 블로그만 src/ 에서 Astro가 생성합니다.
export default defineConfig({
  site: 'https://www.parkjeongseop.com',
  trailingSlash: 'ignore',
});
