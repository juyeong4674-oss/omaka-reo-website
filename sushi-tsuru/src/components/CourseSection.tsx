"use client";
import { useState } from "react";

const lunchItems = [
  { num: "01", name: "차완무시", note: "단호박" },
  { num: "02", name: "전복 보리 리조또", note: "전복 내장 소스 · 시그니처" },
  { num: "03", name: "계절 생선 요리", note: "당일 변동" },
  { num: "04", name: "청어 마끼 (식빵 튀김)", note: "시그니처" },
  { num: "05", name: "스시 9~12 피스", note: "황돔 · 농어 · 방어 · 참치 등 (예시)" },
  { num: "06", name: "미소시루 · 소바" },
  { num: "07", name: "앵콜 피스 (선택)" },
  { num: "08", name: "디저트" },
];

const dinnerItems = [
  { num: "01", name: "차완무시" },
  { num: "02", name: "전복 보리 리조또", note: "전복 내장 소스" },
  { num: "03", name: "니모노 — 계절 생선 조림", note: "가츠오부시 소스" },
  { num: "04", name: "성게딱새우 초밥 · 마끼", note: "시그니처" },
  { num: "05", name: "스시 12~15 피스", note: "우니 · 대방어 · 참치뱃살 등 (예시)" },
  { num: "06", name: "게살 수프 · 미소시루" },
  { num: "07", name: "앵콜 피스 (선택)" },
  { num: "08", name: "소바 · 디저트" },
];

export default function CourseSection() {
  const [tab, setTab] = useState<"lunch" | "dinner">("lunch");

  const items = tab === "lunch" ? lunchItems : dinnerItems;
  const desc =
    tab === "lunch"
      ? "가격 대비 구성이 풍부해 강남역 근처 점심 오마카세를 찾는 분들께 추천합니다. 다찌에서 셰프의 작업을 가까이 볼 수 있고, 룸 선택도 가능합니다."
      : "기념일, 접대, 소중한 자리에 어울리는 코스입니다. 런치보다 더 많은 피스와 식재료로 구성되며, 성게딱새우 마끼는 디너의 시그니처입니다. 프라이빗 룸 예약을 권장합니다.";

  return (
    <section id="course" style={{ background: "var(--l-bg)", padding: "6rem 0" }}>
      <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }} className="reveal">
          <span style={{ fontFamily: "var(--font-n)", fontSize: ".62rem", fontWeight: 400, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold-dk)", display: "block" }}>
            Course Menu
          </span>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 300, letterSpacing: ".04em", lineHeight: 1.2, color: "var(--lt)", marginTop: ".8rem" }}>
            런치 vs 디너 비교
          </h2>
          <p style={{ fontSize: ".88rem", color: "var(--lt2)", marginTop: ".8rem", lineHeight: 1.7 }}>
            코스 구성은 당일 입하 식재료에 따라 변동될 수 있습니다.
          </p>
        </div>

        {/* Compare table */}
        <div className="reveal" style={{ overflowX: "auto", marginBottom: "3rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--lt)" }}>
                <th style={{ padding: "1.2rem 1.8rem", textAlign: "left", width: "130px" }} />
                <th style={{ padding: "1.2rem 1.8rem", background: "var(--l-surf)", borderLeft: "2px solid var(--l-border)", textAlign: "left" }}>
                  <div style={{ fontSize: ".6rem", letterSpacing: ".2em", color: "var(--lt2)", marginBottom: ".3rem" }}>LUNCH</div>
                  <div style={{ fontFamily: "var(--font-d)", fontSize: "2.4rem", fontWeight: 300, color: "var(--lt)", letterSpacing: ".02em", lineHeight: 1 }}>
                    70,000<span style={{ fontSize: "1rem", color: "var(--lt2)" }}>원</span>
                  </div>
                  <div style={{ fontSize: ".68rem", color: "var(--lt2)", marginTop: ".3rem" }}>1인 기준 · 세금 포함</div>
                </th>
                <th style={{ padding: "1.2rem 1.8rem", background: "var(--l-bg2)", borderLeft: "2px solid var(--l-brd2)", textAlign: "left" }}>
                  <div style={{ fontSize: ".6rem", letterSpacing: ".2em", color: "var(--lt2)", marginBottom: ".3rem" }}>DINNER</div>
                  <div style={{ fontFamily: "var(--font-d)", fontSize: "2.4rem", fontWeight: 300, color: "var(--lt)", letterSpacing: ".02em", lineHeight: 1 }}>
                    140,000<span style={{ fontSize: "1rem", color: "var(--lt2)" }}>원</span>
                  </div>
                  <div style={{ fontSize: ".68rem", color: "var(--lt2)", marginTop: ".3rem" }}>1인 기준 · 세금 포함</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["운영 시간", "11:40 / 13:00 (2부제)", "18:30 / 20:00 (2부제)"],
                ["코스 구성", "전채 + 스시 9~12피스 + 마무리", "전채 + 스시 12~15피스 + 마무리"],
                ["시그니처", "전복 보리 리조또 · 청어 마끼", "성게딱새우 · 니모노 · 전복 보리 리조또"],
                ["앵콜 피스", "제공 (선택)", "제공 (선택)"],
                ["좌석 선택", "카운터 / 룸 선택 가능", "카운터 / 룸 선택 가능"],
                ["추천 상황", "데이트 · 가족 식사 · 점심 오마카세", "기념일 · 접대 · 특별한 저녁"],
                ["예약", "캐치테이블 / 전화", "캐치테이블 / 전화"],
              ].map(([label, lunch, dinner]) => (
                <tr key={label} style={{ borderBottom: "1px solid var(--l-border)" }}>
                  <td style={{ padding: "1rem 1.8rem", fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lt3)", fontWeight: 400 }}>{label}</td>
                  <td style={{ padding: "1rem 1.8rem", background: "rgba(232,221,208,.18)", borderLeft: "2px solid var(--l-border)", color: "var(--lt)", fontSize: ".86rem", lineHeight: 1.6 }}>{lunch}</td>
                  <td style={{ padding: "1rem 1.8rem", background: "rgba(210,196,178,.2)", borderLeft: "2px solid var(--l-brd2)", color: "var(--lt)", fontSize: ".86rem", lineHeight: 1.6 }}>{dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabs */}
        <div className="reveal">
          <div style={{ display: "flex", borderBottom: "2px solid var(--l-border)", marginBottom: "2rem" }}>
            {(["lunch", "dinner"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  padding: "1rem 2rem",
                  borderBottom: `2px solid ${tab === t ? "var(--gold-dk)" : "transparent"}`,
                  marginBottom: "-2px",
                  color: tab === t ? "var(--gold-dk)" : "var(--lt3)",
                  transition: "all .22s",
                  cursor: "pointer",
                }}
              >
                {t === "lunch" ? "런치 상세 구성" : "디너 상세 구성"}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }} className="d-panel-grid">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item) => (
                <li key={item.num} style={{ display: "flex", alignItems: "baseline", gap: ".9rem", padding: ".85rem 0", borderBottom: "1px solid var(--l-border)" }}>
                  <span style={{ fontFamily: "var(--font-d)", fontSize: ".7rem", color: "var(--gold-dk)", minWidth: "18px" }}>{item.num}</span>
                  <span style={{ fontFamily: "var(--font-s)", fontSize: ".88rem", color: "var(--lt)", flex: 1 }}>{item.name}</span>
                  {item.note && <span style={{ fontSize: ".62rem", letterSpacing: ".06em", color: "var(--lt3)" }}>{item.note}</span>}
                </li>
              ))}
            </ul>
            <div>
              <p style={{ fontSize: ".88rem", lineHeight: 1.9, color: "var(--lt2)" }}>{desc}</p>
              <div style={{ marginTop: "1.5rem", padding: ".9rem 1.2rem", background: "var(--l-surf)", borderLeft: "2px solid var(--l-brd2)", fontSize: ".75rem", color: "var(--lt3)", lineHeight: 1.7, borderRadius: "0 2px 2px 0" }}>
                구성은 당일 입하 재료와 계절에 따라 변동됩니다. 아래는 대표 예시이며 실제 방문 시 달라질 수 있습니다.
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://app.catchtable.co.kr/ct/shop/SushiTsuru"
                  target="_blank"
                  rel="noopener"
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
                  {tab === "lunch" ? "런치 예약하기" : "디너 예약하기"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .d-panel-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
