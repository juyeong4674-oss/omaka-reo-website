"use client";
import { useState } from "react";

const faqs = [
  {
    q: "예약은 꼭 해야 하나요? 워크인이 가능한가요?",
    a: "스시츠루는 100% 예약제로 운영됩니다. 워크인 입장은 어렵습니다. 캐치테이블 온라인 예약 또는 전화(02-525-0900)로 사전 예약 후 방문해 주세요.",
  },
  {
    q: "룸과 카운터(다찌) 중 선택할 수 있나요?",
    a: "캐치테이블 예약 시 좌석 유형을 선택할 수 있습니다. 카운터(다찌)는 셰프의 스시 작업을 가까이에서 볼 수 있는 자리이며, 프라이빗 룸은 소수 인원이 독립된 공간에서 조용히 식사하기 좋습니다.",
  },
  {
    q: "런치와 디너의 가장 큰 차이가 뭔가요?",
    a: "런치(70,000원)는 스시 9~12피스 + 전채로 구성되며, 디너(140,000원)는 스시 12~15피스에 성게딱새우, 니모노 등이 추가되어 더 풍부한 구성입니다.",
  },
  {
    q: "알레르기나 못 먹는 재료가 있으면 어떻게 하나요?",
    a: "예약 시 캐치테이블 메모란 또는 전화(02-525-0900)로 미리 알려 주시면 최대한 대응해 드립니다. 오마카세 특성상 완전 대체가 어려울 수 있으니 사전 문의를 꼭 부탁드립니다.",
  },
  {
    q: "취소나 변경은 언제까지 가능한가요?",
    a: "취소 및 변경 정책은 캐치테이블 예약 기준을 따릅니다. 긴급한 경우 매장(02-525-0900)으로 직접 연락해 주세요.",
  },
  {
    q: "강남역에서 정확히 어떻게 오나요?",
    a: "신분당선 강남역 5번 출구로 나와 교대 방향으로 약 480m (도보 7분) 직진하시면 됩니다. 처음 방문 시 지도 앱(카카오맵 · 네이버지도)을 함께 사용하시길 권장합니다.",
  },
  {
    q: "아이와 함께 방문할 수 있나요?",
    a: "스시츠루는 노키즈존으로 운영됩니다. 다른 손님들의 편안한 식사 환경을 위한 배려임을 양해 부탁드립니다.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" style={{ background: "var(--l-bg)", padding: "6rem 0" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div className="reveal">
          <span style={{ fontFamily: "var(--font-n)", fontSize: ".62rem", fontWeight: 400, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold-dk)", display: "block" }}>FAQ</span>
          <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold-dk)", margin: "1.2rem 0" }} />
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 300, letterSpacing: ".04em", lineHeight: 1.2, color: "var(--lt)" }}>
            예약 전 자주 묻는 질문
          </h2>
        </div>

        <div className="reveal" style={{ borderTop: "1px solid var(--l-border)", marginTop: "2.5rem" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--l-border)" }}>
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.35rem 0",
                  cursor: "pointer",
                  gap: "1.5rem",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                }}
              >
                <span style={{ fontFamily: "var(--font-s)", fontSize: ".9rem", fontWeight: 400, color: "var(--lt)" }}>{faq.q}</span>
                <span
                  style={{
                    position: "relative",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                >
                  <span style={{ position: "absolute", width: "12px", height: "1px", background: "var(--lt3)", top: "7px", left: "2px", borderRadius: "1px" }} />
                  <span style={{
                    position: "absolute",
                    width: "1px",
                    height: "12px",
                    background: "var(--lt3)",
                    top: "2px",
                    left: "7px",
                    borderRadius: "1px",
                    transform: openIdx === i ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform .28s",
                  }} />
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIdx === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height .38s ease, padding .3s",
                  paddingBottom: openIdx === i ? "1.3rem" : "0",
                }}
              >
                <p style={{ fontSize: ".84rem", lineHeight: 1.9, color: "var(--lt2)" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }} className="reveal">
          {[["https://app.catchtable.co.kr/ct/shop/SushiTsuru", "캐치테이블 예약"], ["tel:02-525-0900", "02-525-0900"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener" : undefined}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-n)",
                fontSize: ".72rem",
                fontWeight: 400,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                padding: "1rem 2.2rem",
                borderRadius: "2px",
                border: "1px solid var(--l-brd2)",
                color: "var(--lt2)",
                transition: "all .22s",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
