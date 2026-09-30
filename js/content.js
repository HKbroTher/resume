/* =====================================================================
   SITE CONTENT: edit this file to personalise the whole site.
   ---------------------------------------------------------------------
   • Anything tagged  ✎ REPLACE  is placeholder content.
   • `en` and `zh` share the same structure. When you add or remove an
     item in one language, do the same in the other.
   • Plain text only (HTML is escaped when rendered).
   ===================================================================== */
window.SITE_CONTENT = {
  /* ---------- Language-independent settings ---------- */
  shared: {
    // ✎ REPLACE with your own photo, e.g. "assets/me.jpg" (square, 400×400 or larger).
    avatar: "assets/avatar-placeholder.svg",
    // Optional: path or URL of a PDF résumé. Leave "" to hide the button.
    resumePdf: "", // ✎ REPLACE e.g. "assets/resume.pdf"
    // Contact / social links. `label` is shown as-is in both languages.
    links: [
      { icon: "✉", name: { en: "Email", zh: "邮箱" },     href: "mailto:you@example.com",            label: "you@example.com" },          // ✎ REPLACE
      { icon: "♣", name: { en: "GitHub", zh: "GitHub" },  href: "https://github.com/your-handle",     label: "github.com/your-handle" },   // ✎ REPLACE
      { icon: "♦", name: { en: "LinkedIn", zh: "领英" },  href: "https://linkedin.com/in/your-handle", label: "in/your-handle" },           // ✎ REPLACE
      { icon: "♥", name: { en: "Blog", zh: "博客" },      href: "https://example.com",                label: "example.com" }               // ✎ REPLACE (or delete this line)
    ]
  },

  /* =============================== ENGLISH =============================== */
  en: {
    meta: {
      htmlLang: "en",
      title: "[Your Name] · Portfolio",                                   // ✎ REPLACE
      description: "Personal site and résumé of [Your Name], [Your Role].", // ✎ REPLACE
      brand: "[YOUR NAME]"                                                // ✎ REPLACE (short, shown in the top bar)
    },
    ui: {
      skip: "Skip to content",
      crtOn: "CRT: ON",
      crtOff: "CRT: OFF",
      nowDealing: "★ PLAYER 1 · NOW DEALING",
      replaceTag: "REPLACE ME",
      level: "Level",
      viewProject: "View ▸",
      downloadCv: "Download CV",
      footer: "Built with plain HTML, CSS & JS. Retro casino vibes, no real chips involved."
    },
    nav: [
      { id: "about",    label: "About" },
      { id: "skills",   label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "journey",  label: "Journey" },
      { id: "contact",  label: "Contact" }
    ],
    hero: {
      name: "[Your Name]",               // ✎ REPLACE
      nickname: "aka \"[Nickname]\"",    // ✎ REPLACE (or set to "" to hide)
      role: "[Your Role / Profession]",  // ✎ REPLACE e.g. "Front-end Engineer"
      location: "[City, Country]",       // ✎ REPLACE (or "" to hide)
      // The typewriter cycles through these lines. ✎ REPLACE
      headlines: [
        "[Your main headline goes here]",
        "I build things for the web.",
        "Always playing the long game."
      ],
      intro: "[A short one-or-two sentence introduction. Who you are, what you do, and what you care about.]", // ✎ REPLACE
      stats: [                                        // ✎ REPLACE the numbers and labels
        { value: "5+", label: "Years in play", tone: "red" },
        { value: "20", label: "Projects dealt", tone: "green" },
        { value: "∞",  label: "Cups of coffee", tone: "gold" }
      ],
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch"
    },
    about: {
      title: "About Me",
      subtitle: "The dealer's notes",
      // ✎ REPLACE each paragraph
      paragraphs: [
        "[Paragraph 1: your background. Where you started, what got you into your field, and what you do today.]",
        "[Paragraph 2: how you work. The problems you like to solve, your values, and what makes you a good teammate.]",
        "[Paragraph 3 (optional): life outside work, such as hobbies, side quests, or what you're learning right now.]"
      ],
      facts: [ // Short key/value pairs shown in the side panel. ✎ REPLACE
        { k: "Based in",   v: "[City]" },
        { k: "Languages",  v: "[English, Chinese]" },
        { k: "Currently",  v: "[Open to new roles]" },
        { k: "Favourite",  v: "[Something you love]" }
      ]
    },
    skills: {
      title: "Skills & Interests",
      subtitle: "The cards in my hand",
      // level: 1 to 5 (chips). suit: ♠ ♥ ♦ ♣. rank: any short text. ✎ REPLACE
      items: [
        { rank: "A", suit: "♠", name: "[Skill One]",   level: 5, desc: "[What you do with it]" },
        { rank: "K", suit: "♥", name: "[Skill Two]",   level: 5, desc: "[What you do with it]" },
        { rank: "Q", suit: "♦", name: "[Skill Three]", level: 4, desc: "[What you do with it]" },
        { rank: "J", suit: "♣", name: "[Skill Four]",  level: 4, desc: "[What you do with it]" },
        { rank: "10", suit: "♠", name: "[Skill Five]", level: 3, desc: "[What you do with it]" },
        { rank: "9", suit: "♥", name: "[Interest]",    level: 3, desc: "[Why you enjoy it]" }
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "Winning hands",
      // Delete this whole `projects` block in BOTH languages to hide the section.
      items: [ // ✎ REPLACE
        { suit: "♦", title: "[Project Alpha]", desc: "[One or two lines about the problem, what you built, and the result.]", tags: ["[Tech]", "[Tech]", "[Tech]"], link: "https://example.com" },
        { suit: "♣", title: "[Project Beta]",  desc: "[One or two lines about the problem, what you built, and the result.]", tags: ["[Tech]", "[Tech]"],          link: "https://example.com" },
        { suit: "♥", title: "[Project Gamma]", desc: "[One or two lines about the problem, what you built, and the result.]", tags: ["[Tech]", "[Tech]", "[Tech]"], link: "" }
      ]
    },
    journey: {
      title: "Journey",
      subtitle: "Rounds played so far",
      // Experience / education / awards. Anything with a date. ✎ REPLACE
      items: [
        { when: "2024 to Now",  title: "[Job Title]",        place: "[Company]",    desc: "[What you did and what you achieved.]" },
        { when: "2021 to 2024", title: "[Previous Role]",    place: "[Company]",    desc: "[What you did and what you achieved.]" },
        { when: "2017 to 2021", title: "[Degree / Major]",   place: "[University]", desc: "[Honours, focus areas, or activities.]" }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Pull up a chair",
      text: "[A friendly line inviting people to reach out. Say what kind of messages you'd love to get.]" // ✎ REPLACE
    }
  },

  /* =============================== 中文 =============================== */
  zh: {
    meta: {
      htmlLang: "zh-CN",
      title: "[你的名字] · 个人主页",                      // ✎ REPLACE
      description: "[你的名字]的个人主页与简历，[你的职位]。", // ✎ REPLACE
      brand: "[你的名字]"                                 // ✎ REPLACE
    },
    ui: {
      skip: "跳到正文",
      crtOn: "CRT：开",
      crtOff: "CRT：关",
      nowDealing: "★ 玩家 1 · 发牌中",
      replaceTag: "替换我",
      level: "等级",
      viewProject: "查看 ▸",
      downloadCv: "下载简历",
      footer: "使用原生 HTML、CSS 与 JS 构建。只有复古赌场氛围，没有真实筹码。"
    },
    nav: [
      { id: "about",    label: "关于" },
      { id: "skills",   label: "技能" },
      { id: "projects", label: "项目" },
      { id: "journey",  label: "经历" },
      { id: "contact",  label: "联系" }
    ],
    hero: {
      name: "[你的名字]",            // ✎ REPLACE
      nickname: "又名「[昵称]」",     // ✎ REPLACE（设为 "" 可隐藏）
      role: "[你的职业 / 职位]",      // ✎ REPLACE
      location: "[城市，国家]",       // ✎ REPLACE（设为 "" 可隐藏）
      headlines: [                   // ✎ REPLACE 打字机效果会循环播放这些句子
        "[在这里写你的主标题]",
        "我为网络世界打造作品。",
        "长期主义，稳稳出牌。"
      ],
      intro: "[一两句话的简短介绍：你是谁、做什么、关心什么。]", // ✎ REPLACE
      stats: [
        { value: "5+", label: "从业年数", tone: "red" },
        { value: "20", label: "完成项目", tone: "green" },
        { value: "∞",  label: "咖啡杯数", tone: "gold" }
      ],
      ctaPrimary: "查看项目",
      ctaSecondary: "联系我"
    },
    about: {
      title: "关于我",
      subtitle: "荷官的笔记",
      paragraphs: [ // ✎ REPLACE
        "[第一段：你的背景。你从哪里起步，如何进入这个领域，现在在做什么。]",
        "[第二段：你的工作方式。你喜欢解决的问题、你的价值观，以及你作为队友的优势。]",
        "[第三段（可选）：工作之外的生活，比如爱好、副业，或最近在学习的东西。]"
      ],
      facts: [ // ✎ REPLACE
        { k: "所在地", v: "[城市]" },
        { k: "语言",   v: "[中文、英语]" },
        { k: "当前",   v: "[正在寻找新机会]" },
        { k: "最爱",   v: "[你热爱的事物]" }
      ]
    },
    skills: {
      title: "技能与兴趣",
      subtitle: "我手中的牌",
      items: [ // ✎ REPLACE
        { rank: "A", suit: "♠", name: "[技能一]", level: 5, desc: "[你用它做什么]" },
        { rank: "K", suit: "♥", name: "[技能二]", level: 5, desc: "[你用它做什么]" },
        { rank: "Q", suit: "♦", name: "[技能三]", level: 4, desc: "[你用它做什么]" },
        { rank: "J", suit: "♣", name: "[技能四]", level: 4, desc: "[你用它做什么]" },
        { rank: "10", suit: "♠", name: "[技能五]", level: 3, desc: "[你用它做什么]" },
        { rank: "9", suit: "♥", name: "[兴趣爱好]", level: 3, desc: "[你为什么喜欢它]" }
      ]
    },
    projects: {
      title: "项目作品",
      subtitle: "制胜牌型",
      items: [ // ✎ REPLACE
        { suit: "♦", title: "[项目 Alpha]", desc: "[一两句话说明：要解决的问题、你做了什么、取得了什么结果。]", tags: ["[技术]", "[技术]", "[技术]"], link: "https://example.com" },
        { suit: "♣", title: "[项目 Beta]",  desc: "[一两句话说明：要解决的问题、你做了什么、取得了什么结果。]", tags: ["[技术]", "[技术]"],          link: "https://example.com" },
        { suit: "♥", title: "[项目 Gamma]", desc: "[一两句话说明：要解决的问题、你做了什么、取得了什么结果。]", tags: ["[技术]", "[技术]", "[技术]"], link: "" }
      ]
    },
    journey: {
      title: "经历",
      subtitle: "已经打过的回合",
      items: [ // ✎ REPLACE
        { when: "2024 至今",    title: "[职位名称]",   place: "[公司]", desc: "[你做了什么，取得了什么成果。]" },
        { when: "2021 至 2024", title: "[上一份职位]", place: "[公司]", desc: "[你做了什么，取得了什么成果。]" },
        { when: "2017 至 2021", title: "[学位 / 专业]", place: "[大学]", desc: "[荣誉、研究方向或课外活动。]" }
      ]
    },
    contact: {
      title: "联系方式",
      subtitle: "坐下来聊聊",
      text: "[一句友好的邀请：欢迎大家联系你，说说你期待收到什么样的消息。]" // ✎ REPLACE
    }
  }
};
