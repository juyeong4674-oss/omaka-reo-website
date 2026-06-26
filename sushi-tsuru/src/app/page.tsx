import Nav from "@/components/Nav";
import CourseSection from "@/components/CourseSection";
import FaqSection from "@/components/FaqSection";
import RevealObserver from "@/components/RevealObserver";

const CATCHTABLE = "https://app.catchtable.co.kr/ct/shop/SushiTsuru";
const PHONE = "tel:02-525-0900";
const PHONE_DISPLAY = "02-525-0900";

const HERO_IMG = "https://d12zq4w4guyljn.cloudfront.net/20240507085900100_photo_dc5ead075dce.webp";
const ABOUT_IMG = "https://d12zq4w4guyljn.cloudfront.net/20240507085900462_photo_dc5ead075dce.webp";
const GALLERY_IMGS = [
  "https://d12zq4w4guyljn.cloudfront.net/20240322125007_photo1_21dfcde4afc6.webp",
  "https://d12zq4w4guyljn.cloudfront.net/20240322125007_photo2_21dfcde4afc6.webp",
  "https://d12zq4w4guyljn.cloudfront.net/20240322125007_photo3_21dfcde4afc6.webp",
  "https://d12zq4w4guyljn.cloudfront.net/20240507085900100_photo_dc5ead075dce.webp",
];

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />

      {/* HERO */}
      <section id="top" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMG} alt="스시츠루 오마카세" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(28,22,16,.2) 0%,rgba(28,22,16,.1) 30%,rgba(28,22,16,.55) 65%,rgba(28,22,16,.96) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "0 2.5rem 3.5rem" }}>
          <p style={{ fontSize: ".62rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem" }}>
            강남역 5번 출구 도보 7분 · 서초 · 예약제 스시 오마카세
          </p>
          <h1 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(3rem,9vw,7rem)", fontWeight: 300, letterSpacing: ".05em", lineHeight: 1.06, color: "#f2ead8", marginBottom: "1.6rem" }}>
            스시츠루<em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}> 鶴</em>
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 0, marginBottom: "2rem", border: "1px solid rgba(200,164,86,.3)", borderRadius: "3px", overflow: "hidden" }} className="hero-strip">
            {[["런치", "70,000원"], ["디너", "140,000원"], ["좌석", "다찌 + 룸"], ["영업", "매일 운영"], ["예약", "캐치테이블"]].map(([label, val]) => (
              <div key={label} style={{ flex: 1, minWidth: "120px", padding: ".9rem 1.4rem", borderRight: "1px solid rgba(200,164,86,.2)", textAlign: "center" }}>
                <p style={{ fontSize: ".55rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--dt3)", marginBottom: ".2rem" }}>{label}</p>
                <p style={{ fontFamily: "var(--font-s)", fontSize: ".92rem", fontWeight: 400, color: "var(--gold)" }}>{val}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: ".9rem", flexWrap: "wrap" }}>
            <a href={CATCHTABLE} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", background: "var(--gold)", color: "var(--d-bg)", transition: "all .22s" }}>
              캐치테이블 예약
            </a>
            <a href={PHONE} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", border: "1px solid rgba(240,232,220,.35)", color: "var(--dt2)", transition: "all .22s" }}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) { .hero-strip { display: none !important; } }
        `}</style>
      </section>

      {/* INFO BAND */}
      <div style={{ background: "var(--d-surf)", borderBottom: "1px solid var(--d-border)" }}>
        <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap" }}>
            {[["런치 오마카세", "70,000원 / 1인", true], ["디너 오마카세", "140,000원 / 1인", true], ["좌석 유형", "카운터(다찌) · 프라이빗 룸", false], ["접근", "강남역 5번 출구 도보 7분", false], ["예약", "캐치테이블 · 전화", false]].map(([label, val, gold]) => (
              <div key={String(label)} style={{ flex: 1, minWidth: "160px", padding: "1.4rem 2rem", borderRight: "1px solid var(--d-border)", display: "flex", flexDirection: "column", gap: ".25rem" }}>
                <p style={{ fontSize: ".58rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--dt3)" }}>{label}</p>
                <p style={{ fontFamily: "var(--font-s)", fontSize: ".9rem", color: gold ? "var(--gold)" : "var(--dt)" }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ background: "var(--d-bg)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5.5rem", alignItems: "center" }} className="about-grid">
            <div className="reveal">
              <span style={{ fontFamily: "var(--font-n)", fontSize: ".62rem", fontWeight: 400, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)", display: "block" }}>About</span>
              <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold-dim)", margin: "1.2rem 0" }} />
              <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 300, letterSpacing: ".04em", lineHeight: 1.2, color: "var(--dt)" }}>
                강남역 도보 7분,<br />룸과 다찌를 갖춘<br />예약제 오마카세.
              </h2>
              <div style={{ marginTop: "1.4rem", display: "flex", flexDirection: "column", gap: ".95rem" }}>
                <p style={{ fontSize: ".9rem", lineHeight: 1.95, color: "var(--dt2)" }}>
                  서초구에 자리한 스시츠루는 카운터(다찌)와 프라이빗 룸을 함께 운영하는 강남 서초의 예약제 스시 오마카세입니다.
                </p>
                <p style={{ fontSize: ".9rem", lineHeight: 1.95, color: "var(--dt2)" }}>
                  런치 70,000원부터 오마카세를 경험할 수 있어 기념일·데이트·접대 식사 모두에 활용하기 좋습니다.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".55rem", marginTop: "1.5rem" }}>
                {["예약제 운영", "노키즈존", "강남역 도보 7분", "기념일 · 데이트", "접대 식사", "다찌 + 룸"].map((tag) => (
                  <span key={tag} style={{ fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--dt2)", border: "1px solid var(--d-brd2)", padding: ".3rem .85rem", borderRadius: "20px" }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: "2.2rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
                <a href={CATCHTABLE} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", background: "var(--gold)", color: "var(--d-bg)", transition: "all .22s" }}>예약하기</a>
                <a href="#course" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", border: "1px solid rgba(240,232,220,.35)", color: "var(--dt2)", transition: "all .22s" }}>코스 보기</a>
              </div>
            </div>
            <div className="reveal" style={{ borderRadius: "3px", overflow: "hidden", aspectRatio: "4/5", background: "var(--d-surf)", transitionDelay: ".15s" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ABOUT_IMG} alt="스시츠루 오마카세 코스" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        `}</style>
      </section>

      {/* COURSE */}
      <CourseSection />

      {/* GALLERY */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", height: "240px" }} aria-hidden="true">
        {GALLERY_IMGS.map((src, i) => (
          <div key={i} className="gallery-item" style={{ overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* VISIT POINTS */}
      <section id="visit" style={{ background: "var(--d-bg2)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="reveal">
            <span style={{ fontFamily: "var(--font-n)", fontSize: ".62rem", fontWeight: 400, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)", display: "block" }}>Why Visit</span>
            <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold-dim)", margin: "1.2rem 0" }} />
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 300, letterSpacing: ".04em", lineHeight: 1.2, color: "var(--dt)" }}>방문 포인트</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "2.5rem" }} className="vp-grid">
            {[
              { title: "강남역 도보 7분", body: "신분당선 강남역 5번 출구에서 480m. 강남 서초 오마카세 중 접근성이 좋은 편입니다." },
              { title: "런치 70,000원부터", body: "강남 서초 오마카세 중 런치 코스를 70,000원에 경험할 수 있습니다." },
              { title: "다찌 + 프라이빗 룸", body: "카운터(다찌)에서 셰프의 작업을 가까이 보거나, 프라이빗 룸에서 조용한 식사를 선택할 수 있습니다." },
              { title: "앵콜 피스 제공", body: "코스 마지막에 원하는 스시를 한 번 더 드실 수 있습니다." },
              { title: "기념일 · 데이트 추천", body: "기념일 방문 시 예약 메모에 남겨 주시면 도움이 됩니다." },
              { title: "2부제 운영", body: "런치 2부(11:40 / 13:00), 디너 2부(18:30 / 20:00)로 운영. 원하는 시간대를 선택하세요." },
            ].map((card, i) => (
              <div key={i} className="reveal" style={{ background: "var(--d-surf)", border: "1px solid var(--d-border)", borderRadius: "3px", padding: "2rem", transition: "border-color .22s", transitionDelay: `${(i % 3) * 0.07}s` }}>
                <p style={{ fontFamily: "var(--font-s)", fontSize: ".95rem", fontWeight: 400, color: "var(--dt)", marginBottom: ".5rem" }}>{card.title}</p>
                <p style={{ fontSize: ".82rem", lineHeight: 1.85, color: "var(--dt2)" }}>{card.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }} className="reveal">
            <a href={CATCHTABLE} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", background: "var(--gold)", color: "var(--d-bg)" }}>예약하기</a>
            <a href={PHONE} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", border: "1px solid rgba(240,232,220,.35)", color: "var(--dt2)" }}>전화 문의</a>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .vp-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .vp-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* RESERVATION */}
      <section id="reservation" style={{ background: "var(--l-bg2)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="res-grid">
            <div className="reveal">
              <span style={{ fontFamily: "var(--font-n)", fontSize: ".62rem", fontWeight: 400, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold-dk)", display: "block" }}>Reservation</span>
              <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold-dk)", margin: "1.2rem 0" }} />
              <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 300, letterSpacing: ".04em", lineHeight: 1.2, color: "var(--lt)" }}>예약 안내</h2>
              <p style={{ fontSize: ".88rem", color: "var(--lt2)", marginTop: "1rem", lineHeight: 1.85 }}>스시츠루는 100% 예약제로 운영됩니다.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: ".9rem", marginTop: "1.8rem" }}>
                {[
                  { href: CATCHTABLE, title: "캐치테이블 — 온라인 예약", sub: "실시간 예약 · 좌석 선택 가능 · 권장" },
                  { href: PHONE, title: "전화 예약", sub: PHONE_DISPLAY },
                ].map((card) => (
                  <a key={card.href} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noopener" : undefined}
                    style={{ display: "flex", alignItems: "center", gap: "1.4rem", padding: "1.4rem 1.6rem", background: "var(--l-surf)", border: "1px solid var(--l-border)", borderRadius: "3px", transition: "border-color .22s" }}>
                    <div style={{ flex: 1 }}>
                      <strong style={{ display: "block", fontSize: ".8rem", fontWeight: 500, color: "var(--lt)", marginBottom: ".15rem" }}>{card.title}</strong>
                      <span style={{ fontSize: ".67rem", letterSpacing: ".07em", color: "var(--lt2)" }}>{card.sub}</span>
                    </div>
                    <span style={{ color: "var(--lt3)", fontSize: ".8rem" }}>→</span>
                  </a>
                ))}
              </div>
              <p style={{ fontSize: ".75rem", color: "var(--lt3)", lineHeight: 1.7, marginTop: "1.5rem" }}>예약 가능 시간: 런치 11:40 / 13:00 · 디너 18:30 / 20:00</p>
            </div>
            <div className="reveal" style={{ transitionDelay: ".12s" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
                {[
                  { title: "예약 전 확인 사항", body: "· 알레르기 · 기피 식재료는 예약 시 메모 또는 전화로 미리 알려 주세요\n· 룸 이용은 캐치테이블 예약 시 선택 또는 전화 문의\n· 기념일 방문 시 예약 메모에 남겨 주시면 도움이 됩니다\n· 착석 10분 전 도착 권장" },
                  { title: "취소 · 노쇼 정책", body: "취소 및 변경은 예약 플랫폼 기준을 따릅니다. 자세한 사항은 캐치테이블 예약 시 확인하거나 매장에 문의해 주세요." },
                  { title: "노키즈존", body: "스시츠루는 노키즈존으로 운영됩니다." },
                  { title: "콜키지 · 주류", body: "콜키지 여부 및 조건은 매장에 직접 문의해 주세요." },
                ].map((item) => (
                  <div key={item.title} style={{ padding: "1.4rem 1.6rem", background: "var(--l-surf)", border: "1px solid var(--l-border)", borderRadius: "3px" }}>
                    <p style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold-dk)", marginBottom: ".7rem" }}>{item.title}</p>
                    <p style={{ fontSize: ".84rem", lineHeight: 1.85, color: "var(--lt2)", whiteSpace: "pre-line" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .res-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        `}</style>
      </section>

      {/* LOCATION */}
      <section id="location" style={{ background: "var(--d-bg)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="reveal" style={{ marginBottom: "3rem" }}>
            <span style={{ fontFamily: "var(--font-n)", fontSize: ".62rem", fontWeight: 400, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)", display: "block" }}>Location &amp; Hours</span>
            <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold-dim)", margin: "1.2rem 0" }} />
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 300, letterSpacing: ".04em", lineHeight: 1.2, color: "var(--dt)" }}>위치 · 영업시간</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "5rem", alignItems: "start" }} className="loc-grid">
            <div className="reveal">
              <div style={{ borderRadius: "3px", overflow: "hidden", border: "1px solid var(--d-border)" }}>
                <iframe
                  src="https://map.kakao.com/?embed=true&marker=true&maptype=TYPE_MAP&itemId=1839083027"
                  title="스시츠루 위치"
                  loading="lazy"
                  style={{ width: "100%", aspectRatio: "4/3", display: "block", border: "none", filter: "sepia(20%) brightness(.85) contrast(1.1)" }}
                />
              </div>
              <div style={{ display: "flex", gap: ".7rem", marginTop: "1rem", flexWrap: "wrap" }}>
                {[["https://map.kakao.com/link/search/스시츠루", "카카오맵"], ["https://map.naver.com/v5/search/스시츠루", "네이버지도"], ["https://www.google.com/maps/search/스시츠루+강남", "구글맵"]].map(([href, label]) => (
                  <a key={String(label)} href={String(href)} target="_blank" rel="noopener"
                    style={{ fontSize: ".62rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--dt2)", border: "1px solid var(--d-brd2)", padding: ".5rem 1rem", borderRadius: "2px", transition: "all .2s" }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "2.2rem", transitionDelay: ".15s" }}>
              <div>
                <h3 style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".9rem" }}>주소</h3>
                <p style={{ fontFamily: "var(--font-s)", fontSize: "1rem", lineHeight: 1.65, color: "var(--dt)" }}>서울 서초구<br />강남역 인근</p>
                <p style={{ fontSize: ".78rem", color: "var(--dt2)", marginTop: ".4rem" }}>신분당선 강남역 5번 출구 · 도보 480m (약 7분)</p>
              </div>
              <div>
                <h3 style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".9rem" }}>영업시간</h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[["런치", "11:40 – 14:40"], ["브레이크", "14:40 – 18:30"], ["디너", "18:30 – 21:50"]].map(([label, val]) => (
                      <tr key={String(label)} style={{ borderBottom: "1px solid var(--d-border)" }}>
                        <td style={{ padding: ".85rem 0", fontSize: ".63rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--dt3)", width: "110px" }}>{label}</td>
                        <td style={{ padding: ".85rem 0", fontSize: ".85rem", color: label === "브레이크" ? "var(--dt3)" : "var(--dt)" }}>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <a href={CATCHTABLE} target="_blank" rel="noopener"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", background: "var(--gold)", color: "var(--d-bg)" }}>
                  예약하기
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .loc-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        `}</style>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* FINAL CTA */}
      <section style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "6rem 0" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ABOUT_IMG} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(28,22,16,.88)" }} />
        </div>
        <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ maxWidth: "660px", margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-n)", fontSize: ".62rem", fontWeight: 400, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)", display: "block", textAlign: "center", marginBottom: "1.4rem" }}>예약하기</span>
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 300, letterSpacing: ".05em", lineHeight: 1.2, color: "var(--dt)" }}>
              강남역 도보 7분,<br /><em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>오늘 예약 가능한</em><br />서초 오마카세.
            </h2>
            <p style={{ fontSize: ".88rem", color: "var(--dt2)", lineHeight: 1.85, margin: "1.2rem 0 2.5rem" }}>
              런치 70,000원 · 디너 140,000원<br />서울 서초구 강남역 인근
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={CATCHTABLE} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", background: "var(--gold)", color: "var(--d-bg)" }}>캐치테이블 예약</a>
              <a href={PHONE} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-n)", fontSize: ".72rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: "1rem 2.2rem", borderRadius: "2px", border: "1px solid rgba(240,232,220,.35)", color: "var(--dt2)" }}>{PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--d-bg2)", borderTop: "1px solid var(--d-border)", padding: "4rem 0 2.5rem" }}>
        <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "4rem", paddingBottom: "2.8rem", borderBottom: "1px solid var(--d-border)" }} className="foot-grid">
            <div>
              <p style={{ fontFamily: "var(--font-d)", fontSize: "1.15rem", fontWeight: 400, letterSpacing: ".12em", color: "var(--dt)", marginBottom: ".6rem" }}>
                스시츠루 <em style={{ fontStyle: "italic", color: "var(--gold)" }}>鶴</em>
              </p>
              <p style={{ fontSize: ".82rem", color: "var(--dt2)", lineHeight: 1.8, maxWidth: "240px" }}>서울 서초, 예약제 스시 오마카세.<br />강남역 5번 출구 도보 7분.</p>
            </div>
            <div>
              <h4 style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.3rem" }}>정보</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: ".85rem" }}>
                <li style={{ fontSize: ".82rem", color: "var(--dt2)", lineHeight: 1.6 }}><strong style={{ display: "block", fontWeight: 400, color: "var(--dt)", marginBottom: ".1rem" }}>전화</strong>{PHONE_DISPLAY}</li>
                <li style={{ fontSize: ".82rem", color: "var(--dt2)", lineHeight: 1.6 }}><strong style={{ display: "block", fontWeight: 400, color: "var(--dt)", marginBottom: ".1rem" }}>예약</strong>캐치테이블</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.3rem" }}>영업시간</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: ".85rem" }}>
                <li style={{ fontSize: ".82rem", color: "var(--dt2)" }}><strong style={{ display: "block", fontWeight: 400, color: "var(--dt)", marginBottom: ".1rem" }}>런치</strong>11:40 – 14:40</li>
                <li style={{ fontSize: ".82rem", color: "var(--dt2)" }}><strong style={{ display: "block", fontWeight: 400, color: "var(--dt)", marginBottom: ".1rem" }}>디너</strong>18:30 – 21:50</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2rem", gap: "1rem" }}>
            <p style={{ fontSize: ".62rem", letterSpacing: ".08em", color: "var(--dt3)" }}>© {new Date().getFullYear()} 스시츠루 · 서울 서초</p>
            <p style={{ fontSize: ".6rem", color: "var(--dt3)", letterSpacing: ".06em", lineHeight: 1.6, textAlign: "right" }}>문의: {PHONE_DISPLAY}</p>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; } }
          @media (max-width: 600px) { .foot-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
        `}</style>
      </footer>

      {/* MOBILE FIXED BAR */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90, background: "rgba(28,22,16,.97)", backdropFilter: "blur(12px)", borderTop: "1px solid var(--d-border)", padding: ".85rem 1.2rem", gap: ".7rem", display: "none" }} className="fixed-bar" aria-label="빠른 예약">
        <a href={CATCHTABLE} target="_blank" rel="noopener" style={{ flex: 1, textAlign: "center", fontSize: ".7rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: ".9rem 1rem", borderRadius: "2px", transition: "all .22s", background: "var(--gold)", color: "var(--d-bg)" }}>캐치테이블 예약</a>
        <a href={PHONE} style={{ flex: 1, textAlign: "center", fontSize: ".7rem", fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", padding: ".9rem 1rem", borderRadius: "2px", transition: "all .22s", border: "1px solid var(--d-brd2)", color: "var(--dt2)" }}>전화</a>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .fixed-bar { display: flex !important; }
          footer { padding-bottom: 7rem !important; }
        }
      `}</style>
    </>
  );
}
