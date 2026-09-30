/* Renders the page from js/content.js and wires up interactions.
   You normally don't need to edit this file. Edit content.js instead. */
(() => {
  "use strict";

  const C = window.SITE_CONTENT;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const app = $("#app");
  const main = $("#main");
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

  /* ---------------- Templates ---------------- */
  const corner = (rank, suit, pos) =>
    `<span class="corner ${pos}${isRedSuit(suit) ? " red" : ""}" aria-hidden="true"><b>${esc(rank)}</b><i>${esc(suit)}</i></span>`;

  const secHead = (suit, title) => `
    <header class="sec-head deal">
      <span class="sec-suit${isRedSuit(suit) ? " red" : ""}" aria-hidden="true">${suit}</span>
      <h2 class="sec-title">${esc(title)}</h2>
    </header>`;

  function heroTpl(t, s) {
    const p = t.profile;
    const tones = ["red", "green", "gold", "green"];
    const langs = t.languages.items.map((l, i) => `
      <li class="score-box tone-${tones[i % tones.length]} pop" style="--i:${i}">
        <span class="score-val">${esc(l.name)}</span>
        <span class="score-lbl">${esc(l.level)}</span>
      </li>`).join("");
    const cv = s.resumePdf
      ? `<a class="btn btn-green" href="${esc(s.resumePdf)}" download>${esc(t.ui.downloadCv)}</a>` : "";

    return `
    <section id="top" class="hero">
      <article class="pcard profile-card tilt deal" style="--i:0">
        ${corner("A", "♦", "tl")}${corner("A", "♦", "br")}
        <div class="avatar-frame">
          <img src="${esc(s.avatar)}" alt="${esc(p.name)}" width="600" height="600" decoding="async">
        </div>
        <h1 class="name">${esc(p.name)}</h1>
        <p class="nick">${esc(p.altName)}</p>
        <p class="role">${esc(p.role)}</p>
        <p class="loc"><span aria-hidden="true">⌖</span> ${esc(p.location)}</p>
        <a class="mail" href="mailto:${esc(s.email)}">${esc(s.email)}</a>
      </article>

      <div class="panel hero-panel deal" style="--i:1">
        <p class="kicker">${esc(t.ui.kicker)}</p>
        <p class="sr-only">${esc(t.headlines.join(" / "))}</p>
        <p class="headline" aria-hidden="true"><span class="prompt">&gt;</span><span class="typed" id="typed"></span><span class="cursor"></span></p>
        <div>
          <h2 class="mini-title">${esc(t.about.title)}</h2>
          <p class="intro">${esc(t.about.text)}</p>
        </div>
        <div>
          <h2 class="mini-title">${esc(t.languages.title)}</h2>
          <ul class="score">${langs}</ul>
        </div>
        <div class="cta">
          <a class="btn btn-gold" href="mailto:${esc(s.email)}">${esc(t.ui.emailMe)}</a>
          ${cv}
        </div>
      </div>
    </section>`;
  }

  // Education and experience share one timeline layout.
  function timelineTpl(id, suit, block) {
    return `
    <section id="${id}" class="section">
      ${secHead(suit, block.title)}
      <ol class="panel timeline deal">
        ${block.items.map((it) => `
          <li class="tl-item">
            <span class="tl-when">${esc(it.when)}</span>
            <div class="tl-body">
              <h3>${esc(it.title)}</h3>
              <p class="tl-place">${esc(it.place)}</p>
              <ul class="tl-bullets">${it.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
            </div>
          </li>`).join("")}
      </ol>
    </section>`;
  }

  function skillsTpl(t) {
    const sk = t.skills;
    return `
    <section id="skills" class="section">
      ${secHead("♥", sk.title)}
      <div class="skill-grid">
        ${sk.groups.map((g, i) => `
          <article class="pcard skill-group tilt deal" style="--i:${i}">
            ${corner(i ? "K" : "A", i ? "♥" : "♠", "tl")}${corner(i ? "K" : "A", i ? "♥" : "♠", "br")}
            <h3 class="skill-label">${esc(g.label)}</h3>
            <ul class="tags">${g.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul>
          </article>`).join("")}
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

    main.innerHTML = heroTpl(t, s)
      + timelineTpl("education", "♠", t.education)
      + timelineTpl("experience", "♦", t.experience)
      + skillsTpl(t);
    footer.innerHTML = `<p>© ${new Date().getFullYear()} ${esc(t.profile.name)}. ${esc(t.ui.footer)}</p>`;

    langBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    updateCrt();
    typewriter($("#typed"), t.headlines);
    observeReveal();
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
