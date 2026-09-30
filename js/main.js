/* Renders the site from js/content.js and wires up interactions.
   You normally don't need to edit this file. Edit content.js instead. */
(() => {
  "use strict";

  const C = window.SITE_CONTENT;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const app = $("#app");
  const main = $("#main");
  const nav = $("#nav");
  const footer = $("#footer");
  const crtBtn = $("#crtToggle");
  const langBtns = $$(".lang button");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  // Browser storage can be unavailable (private mode, blocked cookies), so every access is guarded.
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
  const isRedSuit = (suit) => suit === "♥" || suit === "♦";

  /* ---------------- Language ---------------- */
  function initialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && C[fromUrl]) return fromUrl;
    const saved = store.get("lang");
    if (saved && C[saved]) return saved;
    return (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
  }
  let lang = initialLang();
  let crtOn = store.get("crt") !== "off";

  /* ---------------- Section templates ---------------- */
  const corner = (rank, suit, pos) =>
    `<span class="corner ${pos}${isRedSuit(suit) ? " red" : ""}" aria-hidden="true"><b>${esc(rank)}</b><i>${esc(suit)}</i></span>`;

  const secHead = (suit, title, subtitle) => `
    <header class="sec-head deal">
      <span class="sec-suit${isRedSuit(suit) ? " red" : ""}" aria-hidden="true">${suit}</span>
      <div><h2 class="sec-title">${esc(title)}</h2><p class="sec-sub">${esc(subtitle)}</p></div>
    </header>`;

  function heroTpl(t, s) {
    const h = t.hero;
    const isPlaceholder = /placeholder/i.test(s.avatar || "");
    const stats = (h.stats || []).map((st, i) => `
      <div class="score-box tone-${esc(st.tone || "red")} deal" style="--i:${i + 2}">
        <span class="score-val">${esc(st.value)}</span>
        <span class="score-lbl">${esc(st.label)}</span>
      </div>`).join("");
    const cv = s.resumePdf
      ? `<a class="btn btn-green" href="${esc(s.resumePdf)}" download>${esc(t.ui.downloadCv)}</a>` : "";

    return `
    <section id="top" class="hero">
      <article class="pcard profile-card tilt deal" style="--i:0">
        ${corner("A", "♦", "tl")}${corner("A", "♦", "br")}
        <div class="avatar-frame">
          <img src="${esc(s.avatar)}" alt="${esc(h.name)}" width="400" height="400" decoding="async">
          ${isPlaceholder ? `<span class="replace-tag">${esc(t.ui.replaceTag)}</span>` : ""}
        </div>
        <h1 class="name">${esc(h.name)}</h1>
        ${h.nickname ? `<p class="nick">${esc(h.nickname)}</p>` : ""}
        <p class="role">${esc(h.role)}</p>
        ${h.location ? `<p class="loc"><span aria-hidden="true">⌖</span> ${esc(h.location)}</p>` : ""}
      </article>

      <div class="panel hero-panel deal" style="--i:1">
        <p class="kicker">${esc(t.ui.nowDealing)}</p>
        <p class="sr-only">${esc(h.headlines.join(" / "))}</p>
        <p class="headline" aria-hidden="true"><span class="prompt">&gt;</span><span class="typed" id="typed"></span><span class="cursor"></span></p>
        <p class="intro">${esc(h.intro)}</p>
        <div class="score">${stats}</div>
        <div class="cta">
          <a class="btn btn-red" href="#projects">${esc(h.ctaPrimary)}</a>
          <a class="btn btn-gold" href="#contact">${esc(h.ctaSecondary)}</a>
          ${cv}
        </div>
      </div>
    </section>`;
  }

  function aboutTpl(t) {
    const a = t.about;
    return `
    <section id="about" class="section">
      ${secHead("♠", a.title, a.subtitle)}
      <div class="about-grid">
        <div class="panel about-text deal">${a.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <dl class="panel facts deal" style="--i:1">
          ${a.facts.map((f) => `<div class="fact"><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`).join("")}
        </dl>
      </div>
    </section>`;
  }

  function skillsTpl(t) {
    const sk = t.skills;
    const cards = sk.items.map((it, i) => {
      const lvl = Math.max(0, Math.min(5, Number(it.level) || 0));
      const chips = Array.from({ length: 5 }, (_, n) => `<span class="chip${n < lvl ? " on" : ""}"></span>`).join("");
      return `
      <article class="pcard skill-card tilt deal" style="--i:${i}">
        ${corner(it.rank, it.suit, "tl")}${corner(it.rank, it.suit, "br")}
        <span class="skill-suit${isRedSuit(it.suit) ? " red" : ""}" aria-hidden="true">${esc(it.suit)}</span>
        <h3 class="skill-name">${esc(it.name)}</h3>
        <p class="skill-desc">${esc(it.desc)}</p>
        <div class="chips" role="img" aria-label="${esc(t.ui.level)} ${lvl}/5">${chips}</div>
      </article>`;
    }).join("");
    return `
    <section id="skills" class="section">
      ${secHead("♥", sk.title, sk.subtitle)}
      <div class="skill-grid">${cards}</div>
    </section>`;
  }

  function projectsTpl(t) {
    const p = t.projects;
    if (!p || !p.items || !p.items.length) return "";
    const cards = p.items.map((it, i) => `
      <article class="pcard project-card tilt deal" style="--i:${i}">
        <div class="project-top${isRedSuit(it.suit) ? "" : " dark"}">
          <span aria-hidden="true">${esc(it.suit)}</span><h3>${esc(it.title)}</h3>
        </div>
        <p class="project-desc">${esc(it.desc)}</p>
        <ul class="tags">${(it.tags || []).map((tg) => `<li>${esc(tg)}</li>`).join("")}</ul>
        ${it.link ? `<a class="btn btn-red btn-sm" href="${esc(it.link)}" target="_blank" rel="noopener">${esc(t.ui.viewProject)}</a>` : ""}
      </article>`).join("");
    return `
    <section id="projects" class="section">
      ${secHead("♦", p.title, p.subtitle)}
      <div class="project-grid">${cards}</div>
    </section>`;
  }

  function journeyTpl(t) {
    const j = t.journey;
    if (!j || !j.items || !j.items.length) return "";
    return `
    <section id="journey" class="section">
      ${secHead("♣", j.title, j.subtitle)}
      <ol class="panel timeline deal">
        ${j.items.map((it) => `
          <li class="tl-item">
            <span class="tl-when">${esc(it.when)}</span>
            <div class="tl-body">
              <h3>${esc(it.title)} <span class="tl-place">@ ${esc(it.place)}</span></h3>
              <p>${esc(it.desc)}</p>
            </div>
          </li>`).join("")}
      </ol>
    </section>`;
  }

  function contactTpl(t, s) {
    const c = t.contact;
    const links = s.links.map((l, i) => {
      const external = /^https?:/i.test(l.href);
      return `
      <a class="contact-link tilt deal" style="--i:${i}" href="${esc(l.href)}"${external ? ' target="_blank" rel="noopener"' : ""}>
        <span class="contact-chip${isRedSuit(l.icon) ? " red" : ""}" aria-hidden="true">${esc(l.icon)}</span>
        <span class="contact-meta"><b>${esc(l.name[lang] || l.name.en)}</b><span>${esc(l.label)}</span></span>
      </a>`;
    }).join("");
    return `
    <section id="contact" class="section">
      ${secHead("♠", c.title, c.subtitle)}
      <div class="panel contact-panel deal">
        <p class="contact-text">${esc(c.text)}</p>
        <div class="contact-grid">${links}</div>
      </div>
    </section>`;
  }

  /* ---------------- Render ---------------- */
  function render() {
    const t = C[lang];
    const s = C.shared;

    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
    $("#brand").textContent = t.meta.brand;
    $("#skipLink").textContent = t.ui.skip;

    // Hide nav links for sections that were removed from content.js
    nav.innerHTML = t.nav
      .filter((n) => !t[n.id] || (t[n.id].items ? t[n.id].items.length : true))
      .map((n) => `<a href="#${esc(n.id)}" data-sec="${esc(n.id)}">${esc(n.label)}</a>`).join("");

    main.innerHTML = heroTpl(t, s) + aboutTpl(t) + skillsTpl(t) + projectsTpl(t) + journeyTpl(t) + contactTpl(t, s);
    footer.innerHTML = `<p>© ${new Date().getFullYear()} ${esc(t.hero.name)}. ${esc(t.ui.footer)}</p>`;

    langBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    updateCrt();
    typewriter($("#typed"), t.hero.headlines);
    observeReveal();
    observeNav();
  }

  /* ---------------- Typewriter ---------------- */
  let twToken = 0;
  function typewriter(el, lines) {
    const token = ++twToken;
    if (!el || !lines || !lines.length) return;
    if (reduceMotion.matches) { el.textContent = lines[0]; return; }
    let li = 0, ci = 0, deleting = false;
    const tick = () => {
      if (token !== twToken) return; // a newer render took over
      const chars = Array.from(lines[li]); // Array.from keeps CJK/emoji intact
      if (!deleting) {
        ci++;
        el.textContent = chars.slice(0, ci).join("");
        if (ci >= chars.length) { deleting = lines.length > 1; if (deleting) setTimeout(tick, 2200); return; }
        setTimeout(tick, 45 + Math.random() * 55);
      } else {
        ci--;
        el.textContent = chars.slice(0, ci).join("");
        if (ci <= 0) { deleting = false; li = (li + 1) % lines.length; setTimeout(tick, 380); return; }
        setTimeout(tick, 22);
      }
    };
    setTimeout(tick, 500);
  }

  /* ---------------- "Deal" reveal on scroll ---------------- */
  let revealIO;
  function observeReveal() {
    if (revealIO) revealIO.disconnect();
    const els = $$(".deal", main);
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((el) => revealIO.observe(el));
  }

  /* ---------------- Active nav highlight ---------------- */
  let navIO;
  function observeNav() {
    if (navIO) navIO.disconnect();
    if (!("IntersectionObserver" in window)) return;
    navIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        $$("a", nav).forEach((a) => {
          if (a.dataset.sec === e.target.id) {
            a.setAttribute("aria-current", "true");
            a.scrollIntoView({ block: "nearest", inline: "nearest" }); // keeps mobile nav in view
          } else {
            a.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$(".section", main).forEach((s) => navIO.observe(s));
  }

  /* ---------------- Hover tilt for cards (mouse only) ---------------- */
  let tilted = null;
  function resetTilt(el) {
    el.style.removeProperty("--rx");
    el.style.removeProperty("--ry");
  }
  document.addEventListener("pointermove", (e) => {
    if (!finePointer.matches || reduceMotion.matches) return;
    const card = e.target.closest ? e.target.closest(".tilt") : null;
    if (tilted && tilted !== card) resetTilt(tilted);
    tilted = card;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty("--ry", (x * 10).toFixed(2) + "deg");
    card.style.setProperty("--rx", (-y * 10).toFixed(2) + "deg");
    card.style.setProperty("--mx", ((x + 0.5) * 100).toFixed(1) + "%");
    card.style.setProperty("--my", ((y + 0.5) * 100).toFixed(1) + "%");
  }, { passive: true });

  /* ---------------- CRT toggle ---------------- */
  function updateCrt() {
    document.body.classList.toggle("crt-off", !crtOn);
    crtBtn.setAttribute("aria-pressed", String(crtOn));
    crtBtn.textContent = crtOn ? C[lang].ui.crtOn : C[lang].ui.crtOff;
  }
  crtBtn.addEventListener("click", () => {
    crtOn = !crtOn;
    store.set("crt", crtOn ? "on" : "off");
    updateCrt();
  });

  /* ---------------- Language switch with "channel change" transition ---------------- */
  function setLang(next) {
    if (!C[next] || next === lang) return;
    const apply = () => {
      lang = next;
      store.set("lang", next);
      try {
        const url = new URL(location.href);
        url.searchParams.set("lang", next);
        history.replaceState(null, "", url);
      } catch (e) { /* file:// in some browsers */ }
      render();
    };
    if (reduceMotion.matches) { apply(); return; }
    app.classList.remove("tv-in");
    app.classList.add("tv-out");
    setTimeout(() => {
      apply();
      app.classList.remove("tv-out");
      app.classList.add("tv-in");
      setTimeout(() => app.classList.remove("tv-in"), 450);
    }, 220);
  }
  langBtns.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------------- Boot ---------------- */
  render();
  // Remove the CRT power-on class after the animation so no transform lingers on the app.
  setTimeout(() => document.body.classList.remove("booting"), reduceMotion.matches ? 0 : 900);
})();
