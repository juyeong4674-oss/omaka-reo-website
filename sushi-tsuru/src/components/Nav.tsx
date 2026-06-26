"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeDrawer = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const toggleDrawer = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "1rem 2.5rem" : "1.5rem 2.5rem",
          transition: "background .35s, padding .35s, border-color .35s",
          background: scrolled ? "rgba(28,22,16,.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--d-border)" : "transparent"}`,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-d)",
            fontSize: "1.1rem",
            fontWeight: 400,
            letterSpacing: ".14em",
            color: "var(--dt)",
          }}
        >
          스시츠루 <em style={{ fontStyle: "italic", color: "var(--gold)" }}>鶴</em>
        </a>
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-links-desktop"
        >
          {[["#course", "코스"], ["#visit", "방문 포인트"], ["#reservation", "예약"], ["#location", "위치"], ["#faq", "FAQ"]].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--dt3)",
                  transition: "color .2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--dt)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--dt3)")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://app.catchtable.co.kr/ct/shop/SushiTsuru"
          target="_blank"
          rel="noopener"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-n)",
            fontSize: ".68rem",
            fontWeight: 400,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            padding: ".65rem 1.5rem",
            borderRadius: "2px",
            background: "var(--gold)",
            color: "var(--d-bg)",
            transition: "all .22s",
            whiteSpace: "nowrap",
          }}
          className="btn-gold-nav"
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold-lt)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
        >
          예약하기
        </a>
        <button
          onClick={toggleDrawer}
          aria-label="메뉴"
          aria-expanded={open}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
            cursor: "pointer",
          }}
          className="nav-burger"
        >
          <span style={{ display: "block", width: "20px", height: "1px", background: "var(--dt2)", transition: "all .3s" }} />
          <span style={{ display: "block", width: "20px", height: "1px", background: "var(--dt2)", transition: "all .3s" }} />
          <span style={{ display: "block", width: "20px", height: "1px", background: "var(--dt2)", transition: "all .3s" }} />
        </button>
      </nav>
      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .btn-gold-nav { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>

      {/* Mobile Drawer */}
      {open && (
        <nav
          role="dialog"
          aria-label="메뉴"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(28,22,16,.98)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.4rem",
          }}
        >
          {[["#course", "코스 & 메뉴"], ["#visit", "방문 포인트"], ["#reservation", "예약 안내"], ["#location", "위치"], ["#faq", "FAQ"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeDrawer}
              style={{
                fontFamily: "var(--font-d)",
                fontSize: "2rem",
                fontWeight: 300,
                letterSpacing: ".07em",
                color: "var(--dt)",
                transition: "color .2s",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="https://app.catchtable.co.kr/ct/shop/SushiTsuru"
            target="_blank"
            rel="noopener"
            onClick={closeDrawer}
            style={{
              fontFamily: "var(--font-n)",
              fontSize: ".75rem",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--d-bg)",
              background: "var(--gold)",
              padding: "1rem 2.8rem",
              borderRadius: "2px",
              marginTop: ".5rem",
            }}
          >
            예약하기
          </a>
        </nav>
      )}
    </>
  );
}
