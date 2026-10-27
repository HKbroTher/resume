/* =====================================================================
   SITE CONTENT: edit this file to update the page.
   `en`, `zh` and `ja` share the same structure. When you add or remove
   an item in one language, do the same in the others. Plain text only.
   ===================================================================== */
window.SITE_CONTENT = {
  /* ---------- Language-independent settings ---------- */
  shared: {
    avatar: "assets/avatar.jpg",
    email: "cpdengjunjie@gmail.com",
    // Optional: path or URL of a PDF résumé. Leave "" to hide the button.
    resumePdf: ""
  },

  /* =============================== ENGLISH =============================== */
  en: {
    meta: {
      htmlLang: "en",
      title: "Junjie Deng · Résumé",
      description: "Junjie Deng (邓浚杰): Computer Science graduate based in Tokyo, Japan.",
      brand: "JUNJIE DENG"
    },
    ui: {
      skip: "Skip to content",
      crtOn: "CRT: ON",
      crtOff: "CRT: OFF",
      kicker: "★ PLAYER 1 · NOW DEALING",
      emailMe: "Email Me",
      downloadCv: "Download CV",
      footer: "Built with plain HTML, CSS & JS."
    },
    profile: {
      name: "Junjie Deng",
      altName: "邓浚杰",
      role: "Computer Science Graduate",
      location: "Tokyo, Japan"
    },
    // The typewriter cycles through these lines.
    headlines: [
      "Computer Science graduate, Dec 2026.",
      "Studied in China, the US and Japan.",
      "Based in Tokyo."
    ],
    about: {
      title: "About Me",
      text: "Computer Science graduate (December 2026). Having studied in China, the United States and Japan, I adapt quickly to new environments and work comfortably across cultures."
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Mandarin", level: "Native" },
        { name: "Cantonese", level: "Native" },
        { name: "English", level: "Professional" },
        { name: "Japanese", level: "Conversational" }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          when: "Expected Dec 2026",
          title: "B.S. in Computer Science",
          place: "Temple University, Japan Campus · Tokyo, Japan",
          bullets: [
            "Relevant coursework: Operations Research, Database Management Systems (SQL), Data Structures & Algorithms, Systems Architecture, Operating Systems",
            "Completed the first two years of undergraduate study at De Anza College, California"
          ]
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          when: "Jan 2026 – Jun 2026",
          title: "Software Engineering Intern",
          place: "Japanime Co. Ltd · Tokyo",
          bullets: [
            "Worked with product managers, developers and QA testers to clarify requirements, reproduce issues and verify fixes.",
            "Created verification checklists and standardized team workflows to make releases more consistent.",
            "Analyzed application performance and applied a root-cause approach to diagnose problems.",
            "Tested features against backend services to ensure reliable data flow and error handling."
          ]
        },
        {
          when: "Jan 2024 – Nov 2024",
          title: "Field Operations & Logistics Volunteer",
          place: "Tara Sreekrishnan for California State Assembly 2024",
          bullets: [
            "Engaged directly with 1,000+ residents and local business owners and turned their feedback into structured priorities for campaign leadership.",
            "Coordinated event logistics and material distribution across multiple locations under tight deadlines.",
            "Tracked outreach metrics in Excel with weekly reports for leadership."
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      groups: [
        { label: "Technical", items: ["Python (Pandas, NumPy, Scikit-learn)", "SQL", "Excel", "Git", "REST APIs", "Linux/Unix CLI"] },
        { label: "Professional", items: ["Data analysis", "Root-cause analysis", "Process standardization", "Cross-functional communication", "Stakeholder coordination"] }
      ]
    }
  },

  /* =============================== 中文 =============================== */
  zh: {
    meta: {
      htmlLang: "zh-CN",
      title: "邓浚杰 · 个人简历",
      description: "邓浚杰（Junjie Deng）：计算机科学专业应届毕业生，现居日本东京。",
      brand: "邓浚杰"
    },
    ui: {
      skip: "跳到正文",
      crtOn: "CRT：开",
      crtOff: "CRT：关",
      kicker: "★ 玩家 1 · 发牌中",
      emailMe: "发邮件给我",
      downloadCv: "下载简历",
      footer: "使用原生 HTML、CSS 与 JS 构建。"
    },
    profile: {
      name: "邓浚杰",
      altName: "Junjie Deng",
      role: "计算机科学专业应届毕业生",
      location: "日本东京"
    },
    headlines: [
      "计算机科学专业，2026 年 12 月毕业。",
      "曾在中国、美国和日本求学。",
      "现居东京。"
    ],
    about: {
      title: "关于我",
      text: "计算机科学专业应届毕业生（2026 年 12 月毕业）。曾在中国、美国和日本学习，能快速适应新环境，习惯在多元文化中合作。"
    },
    languages: {
      title: "语言",
      items: [
        { name: "普通话", level: "母语" },
        { name: "粤语", level: "母语" },
        { name: "英语", level: "专业工作水平" },
        { name: "日语", level: "日常会话" }
      ]
    },
    education: {
      title: "教育背景",
      items: [
        {
          when: "预计 2026 年 12 月毕业",
          title: "计算机科学学士",
          place: "天普大学日本校区（Temple University, Japan Campus）· 日本东京",
          bullets: [
            "相关课程：运筹学、数据库管理系统（SQL）、数据结构与算法、系统架构、操作系统",
            "本科前两年就读于美国加州 De Anza College"
          ]
        }
      ]
    },
    experience: {
      title: "工作经历",
      items: [
        {
          when: "2026 年 1 月 – 2026 年 6 月",
          title: "软件工程实习生",
          place: "Japanime Co. Ltd · 东京",
          bullets: [
            "与产品经理、开发人员和测试人员协作，明确需求、复现问题并验证修复结果。",
            "建立验证检查清单，规范团队工作流程，让版本发布更加稳定一致。",
            "分析应用性能，用根因分析的方法诊断问题。",
            "针对后端服务测试功能，确保数据传输和错误处理可靠。"
          ]
        },
        {
          when: "2024 年 1 月 – 2024 年 11 月",
          title: "外勤运营与后勤志愿者",
          place: "Tara Sreekrishnan 加州州议会竞选 2024",
          bullets: [
            "直接与 1,000 多名居民和本地商家交流，把反馈整理成结构化的优先事项提交给竞选团队负责人。",
            "在紧迫的时间要求下协调多个地点的活动后勤和物资分发。",
            "用 Excel 追踪外联指标，每周向负责人汇报。"
          ]
        }
      ]
    },
    skills: {
      title: "技能",
      groups: [
        { label: "技术技能", items: ["Python（Pandas、NumPy、Scikit-learn）", "SQL", "Excel", "Git", "REST API", "Linux/Unix 命令行"] },
        { label: "通用能力", items: ["数据分析", "根因分析", "流程标准化", "跨部门沟通", "利益相关方协调"] }
      ]
    }
  },

  /* =============================== 日本語 =============================== */
  ja: {
    meta: {
      htmlLang: "ja",
      title: "鄧浚杰 · レジュメ",
      description: "鄧浚杰（デン　ジュンジエ／Junjie Deng）：東京在住、コンピュータサイエンス専攻（2026年12月卒業見込み）。",
      brand: "鄧浚杰"
    },
    ui: {
      skip: "本文へスキップ",
      crtOn: "CRT：オン",
      crtOff: "CRT：オフ",
      kicker: "★ プレイヤー 1 · ディール中",
      emailMe: "メールで連絡",
      downloadCv: "履歴書をダウンロード",
      footer: "HTML・CSS・JavaScript のみで構築。"
    },
    profile: {
      name: "鄧浚杰",
      altName: "デン　ジュンジエ（Junjie Deng）",
      role: "コンピュータサイエンス専攻",
      location: "日本・東京"
    },
    headlines: [
      "コンピュータサイエンス専攻、2026年12月卒業見込み。",
      "中国・アメリカ・日本で学んできました。",
      "東京在住。"
    ],
    about: {
      title: "自己紹介",
      text: "コンピュータサイエンス専攻で、2026年12月に卒業見込みです。中国、アメリカ、日本で学んだ経験から、新しい環境にすぐ適応でき、異なる文化的背景を持つ人とも円滑に協働できます。"
    },
    languages: {
      title: "言語",
      items: [
        { name: "中国語", level: "ネイティブ" },
        { name: "広東語", level: "ネイティブ" },
        { name: "英語", level: "ビジネスレベル" },
        { name: "日本語", level: "日常会話レベル" }
      ]
    },
    education: {
      title: "学歴",
      items: [
        {
          when: "2026年12月 卒業見込み",
          title: "コンピュータサイエンス学士",
          place: "テンプル大学ジャパンキャンパス（Temple University, Japan Campus）· 東京",
          bullets: [
            "主な履修科目：オペレーションズ・リサーチ、データベース管理システム（SQL）、データ構造とアルゴリズム、システムアーキテクチャ、オペレーティングシステム",
            "学部の最初の2年間は米国カリフォルニア州の De Anza College に在籍"
          ]
        }
      ]
    },
    experience: {
      title: "職務経歴",
      items: [
        {
          when: "2026年1月 – 2026年6月",
          title: "ソフトウェアエンジニア インターン",
          place: "Japanime Co. Ltd · 東京",
          bullets: [
            "プロダクトマネージャー、開発者、QAテスターと連携し、要件の明確化、不具合の再現、修正内容の検証を担当。",
            "検証チェックリストを作成してチームのワークフローを標準化し、リリースの品質を安定させた。",
            "アプリケーションのパフォーマンスを分析し、根本原因分析の手法で問題を特定。",
            "バックエンドサービスと連携した機能テストを行い、データの受け渡しとエラーハンドリングの信頼性を確保。"
          ]
        },
        {
          when: "2024年1月 – 2024年11月",
          title: "フィールドオペレーション・ロジスティクス ボランティア",
          place: "Tara Sreekrishnan カリフォルニア州議会議員選挙キャンペーン 2024",
          bullets: [
            "1,000人以上の住民や地元事業者と直接対話し、寄せられた意見をキャンペーン幹部向けの優先課題として整理。",
            "厳しい締め切りの中、複数拠点でのイベント運営と資材配布を調整。",
            "Excel でアウトリーチ指標を管理し、幹部へ毎週レポートを提出。"
          ]
        }
      ]
    },
    skills: {
      title: "スキル",
      groups: [
        { label: "テクニカルスキル", items: ["Python（Pandas、NumPy、Scikit-learn）", "SQL", "Excel", "Git", "REST API", "Linux/Unix コマンドライン"] },
        { label: "ビジネススキル", items: ["データ分析", "根本原因分析", "業務プロセスの標準化", "部門横断的なコミュニケーション", "ステークホルダー調整"] }
      ]
    }
  }
};
