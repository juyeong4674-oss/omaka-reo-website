import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스시츠루 — 강남역 오마카세 | 런치 70,000원 · 디너 140,000원",
  description:
    "강남역 5번 출구 도보 7분, 서초. 런치 70,000원 · 디너 140,000원. 룸+다찌 보유. 강남 기념일·데이트 오마카세. 캐치테이블 예약.",
  keywords:
    "강남역 오마카세,서초 오마카세,강남역 스시,기념일 오마카세,강남 데이트 오마카세,스시츠루",
  openGraph: {
    title: "스시츠루 — 강남역 도보 7분 오마카세",
    description: "런치 70,000원 · 디너 140,000원. 룸+다찌 보유. 캐치테이블 예약.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Noto+Sans+KR:wght@300;400;500&family=Noto+Serif+KR:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
