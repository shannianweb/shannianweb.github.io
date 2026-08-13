import type { Locale } from "./site-context";

export type PlaybookCategory = "all" | "work" | "capture" | "learn" | "review" | "life";

export type PlaybookScenario = {
  id: string;
  category: Exclude<PlaybookCategory, "all">;
  icon: string;
  title: string;
  tagline: string;
  intro: string;
  steps: string[];
  features: string[];
  tip?: string;
  /** 仅在 App 内嵌模式显示，映射到 mymemorydebris://guide?action=<actionId> */
  action?: { id: string; label: string };
};

export type PlaybookStage = {
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
};

export type PlaybookReferenceGroup = {
  title: string;
  items: Array<[name: string, desc: string]>;
};

export type PlaybookCopy = {
  kicker: string;
  title: string;
  lead: string;
  stageKicker: string;
  stageTitle: string;
  stageLead: string;
  stages: PlaybookStage[];
  scenarioKicker: string;
  scenarioTitle: string;
  scenarioLead: string;
  categories: Array<{ id: PlaybookCategory; label: string }>;
  scenarios: PlaybookScenario[];
  labels: {
    steps: string;
    features: string;
    tip: string;
    expand: string;
    collapse: string;
  };
  referenceKicker: string;
  referenceTitle: string;
  referenceLead: string;
  referenceGroups: PlaybookReferenceGroup[];
  finalKicker: string;
  finalTitle: string;
  finalAction: string;
};

const zh: PlaybookCopy = {
  kicker: "使用指南",
  title: "先说出来，再把它推进成结果",
  lead: "不用先学会整理。下面是闪念在真实生活里的用法：从一句话开始，AI 接手机械的整理，你只负责想法和决定。",

  stageKicker: "三步心智模型",
  stageTitle: "一条闪念的完整旅程",
  stageLead: "每条记录都会经过这三步。前两步几乎不花时间，第三步才是价值发生的地方。",
  stages: [
    {
      title: "随手记录",
      subtitle: "想到就说，别管格式",
      body: "灵感和待办出现的时机从不挑场合。在首页长按麦克风直接说，松手即保存；也可以打字、发图片。",
      bullets: [
        "首页长按麦克风，边说边转文字",
        "锁屏小组件、快捷指令一键开录",
        "Apple Watch 抬腕就记，自动同步到 iPhone",
        "截图分享到闪念，图片内容也能提取",
      ],
    },
    {
      title: "AI 自动整理",
      subtitle: "机械的部分交给 AI",
      body: "记录保存后，AI 把口语变成能用的笔记：转写润色、起标题、写摘要，还会把行动项挑出来。",
      bullets: [
        "转写并润色口语表达",
        "自动生成标题与摘要",
        "识别待办，说到时间自动建提醒",
        "按内容推荐标签，分类不用手动做",
      ],
    },
    {
      title: "整理与推进",
      subtitle: "回来把想法变成结果",
      body: "有空的时候回来看看：核对待办、搜索相关记录、做周期复盘，让零散输入变成长期积累。",
      bullets: [
        "待办中心集中核对行动项",
        "搜索、标签、智能合集快速找回",
        "AI 洞察帮你做周期性复盘",
        "iCloud 多端同步，可连接 Notion / Obsidian",
      ],
    },
  ],

  scenarioKicker: "场景手册",
  scenarioTitle: "别人都在这样用闪念",
  scenarioLead: "每个场景都是一条能直接照做的路径。点开看步骤，学完就能用。",
  categories: [
    { id: "all", label: "全部" },
    { id: "work", label: "办公" },
    { id: "capture", label: "灵感捕捉" },
    { id: "learn", label: "学习阅读" },
    { id: "review", label: "复盘创作" },
    { id: "life", label: "生活" },
  ],
  scenarios: [
    {
      id: "meeting-notes",
      category: "work",
      icon: "🎙️",
      title: "开完会，纪要和待办都有了",
      tagline: "开会只管专注讨论，会后 30 秒拿到纪要",
      intro: "会议中让闪念一直录，AI 会替你记住结论和分工。",
      steps: [
        "会议开始时，在首页长按麦克风开始录音，把手机放在一边",
        "讨论结束后保存，AI 自动转写全文并生成标题和摘要",
        "打开这条笔记，查看 AI 提取的待办：谁、什么时候、做什么",
        "进入待办中心统一跟进，带时间的事项可同步到系统日历",
      ],
      features: ["语音闪念", "AI 摘要", "智能待办", "待办中心"],
      tip: "会上口头确认一句「这件事谁负责、什么时候完成」，AI 提取的待办会更完整。",
      action: { id: "todoCenter", label: "打开待办中心" },
    },
    {
      id: "watch-capture",
      category: "capture",
      icon: "⌚",
      title: "走路时的灵感，抬腕就接住",
      tagline: "不用掏手机，灵感也不会溜走",
      intro: "散步、跑步、等红灯，好想法总在手不方便的时候出现。",
      steps: [
        "抬腕打开闪念手表 App，轻点开始说话",
        "说完轻点结束，录音自动传回 iPhone",
        "回到手机时，转写和整理已经完成，灵感变成了一张卡片",
      ],
      features: ["Apple Watch", "自动同步", "AI 转写"],
      tip: "把闪念添加到表盘，抬腕一点就能开始录。",
    },
    {
      id: "lockscreen",
      category: "capture",
      icon: "⚡",
      title: "锁屏到开录，只要一秒",
      tagline: "记录入口越近，留住的灵感越多",
      intro: "把入口放在锁屏和 Siri 上，连「打开 App」这一步也省掉。",
      steps: [
        "长按锁屏进入编辑，把闪念小组件添加到锁屏",
        "在设置中开启快捷指令，对 Siri 说一句话就能开始录音",
        "iPhone 15 Pro 及以上机型，可以把 Action 按钮设为闪念录音",
      ],
      features: ["锁屏小组件", "快捷指令", "Action 按钮"],
      action: { id: "shortcuts", label: "去配置快捷指令" },
    },
    {
      id: "smart-reminder",
      category: "work",
      icon: "⏰",
      title: "「明天下午 3 点开会」自动变提醒",
      tagline: "说出时间，剩下的交给闪念",
      intro: "记事的时候自然带上时间，AI 会识别出来并帮你设好提醒。",
      steps: [
        "录音或打字时说清楚时间：「周五前把方案发给客户」",
        "AI 识别出时间信息，自动创建对应的提醒",
        "在日历视图里按月查看安排，重要事项不再漏掉",
      ],
      features: ["智能提醒识别", "日历视图"],
      tip: "在设置 → 智能提醒识别中可以调整自动创建的方式。",
      action: { id: "calendar", label: "看看日历视图" },
    },
    {
      id: "screenshot",
      category: "life",
      icon: "📷",
      title: "截图和账单，分享过来就归档",
      tagline: "图片里的信息，AI 帮你读出来",
      intro: "商品页、聊天记录、发票账单，截图分享给闪念就完成记录。",
      steps: [
        "截图后点系统分享，选择「闪念」",
        "AI 自动提取图里的文字，识别待办和账单金额",
        "内容自动打上标签，之后搜索关键词就能找到",
      ],
      features: ["截图识别", "AI 提取", "智能标签"],
    },
    {
      id: "weekly-review",
      category: "review",
      icon: "🗓️",
      title: "每周五，花五分钟做周复盘",
      tagline: "平时随手记，周末让 AI 帮你回顾",
      intro: "不用为复盘专门写日记，你的闪念就是最真实的一周记录。",
      steps: [
        "平时想到什么记什么，不用刻意分类",
        "周五打开 AI 洞察，让 AI 总结这一周的记录",
        "看看这周在关注什么、完成了什么，再决定下周推进什么",
      ],
      features: ["AI 洞察", "AI 总结"],
      tip: "复盘后的下一步行动，顺手再说一条闪念，形成循环。",
      action: { id: "insight", label: "打开 AI 洞察" },
    },
    {
      id: "reading-notes",
      category: "learn",
      icon: "📚",
      title: "读到共鸣处，说一条摘记",
      tagline: "摘录加上你的理解，才是真正的读书笔记",
      intro: "比起划线收藏，用自己的话说出来的理解更值得保存。",
      steps: [
        "读到有感触的段落，录一条语音：念出原文，再说说自己的想法",
        "AI 自动整理成文字，推荐「读书」这样的标签",
        "写作或讨论需要引用时，搜索关键词立刻找回",
      ],
      features: ["语音闪念", "智能标签", "搜索"],
      action: { id: "search", label: "试试搜索" },
    },
    {
      id: "idea-to-article",
      category: "review",
      icon: "✍️",
      title: "零散想法，攒成一篇文章",
      tagline: "好文章不是坐下来写出来的，是平时攒出来的",
      intro: "关于同一主题的想法散落在不同时间，闪念帮你把它们串起来。",
      steps: [
        "对某个主题有想法就记一条，不用管顺序",
        "记忆关联自动发现相关记录，把线索串成脉络",
        "在笔记里让 AI 扩写、润色，把碎片整合成初稿",
      ],
      features: ["记忆关联", "AI 对话助手", "AI 润色"],
      action: { id: "memoryThreads", label: "看看记忆关联" },
    },
    {
      id: "notion-sync",
      category: "work",
      icon: "🔗",
      title: "手机上捕捉，Notion 里沉淀",
      tagline: "闪念负责入口，知识库保持你的习惯",
      intro: "已经在用 Notion 或 Obsidian？闪念可以接进你现有的体系。",
      steps: [
        "在设置 → 连接服务中授权 Notion，或配置 Obsidian",
        "闪念的内容按你的设置同步过去",
        "出门用闪念快速记，回来在知识库里继续整理",
      ],
      features: ["连接服务", "Notion", "Obsidian"],
      action: { id: "connect", label: "去连接服务" },
    },
    {
      id: "smart-collection",
      category: "learn",
      icon: "🗂️",
      title: "同一主题的记录，自动聚成合集",
      tagline: "不用手动整理，知识库自己长出来",
      intro: "智能合集按标签自动收纳新记录，一个主题一个抽屉。",
      steps: [
        "创建一个智能合集，比如「产品灵感」，选好关联标签",
        "之后的新记录符合条件时，自动进入合集",
        "随时打开合集，看到这个主题的全部积累",
      ],
      features: ["智能合集", "智能标签"],
      action: { id: "smartCollection", label: "创建智能合集" },
    },
  ],

  labels: {
    steps: "跟着做",
    features: "用到的功能",
    tip: "小技巧",
    expand: "看步骤",
    collapse: "收起",
  },

  referenceKicker: "功能速查",
  referenceTitle: "把全部能力放在一页里",
  referenceLead: "需要查某个具体功能时，从这里开始。",
  referenceGroups: [
    {
      title: "记录方式",
      items: [
        ["语音闪念", "长按录音，实时转写"],
        ["文字闪念", "支持 Markdown 排版"],
        ["快捷指令", "Siri 一句话开始录音"],
        ["截图识别", "分享图片，提取文字与待办"],
        ["小组件", "桌面与锁屏快捷入口"],
        ["Apple Watch", "抬腕即记，自动同步"],
      ],
    },
    {
      title: "AI 能力",
      items: [
        ["多模型切换", "DeepSeek、豆包、GPT 等自由选择"],
        ["AI 摘要", "自动生成标题与总结"],
        ["智能待办", "从内容中识别行动项"],
        ["智能提醒", "识别时间，自动创建提醒"],
        ["智能标签", "按内容推荐标签"],
        ["记忆关联", "自动串联相关记录"],
        ["AI 对话", "总结、翻译、扩写、润色"],
      ],
    },
    {
      title: "待办与整理",
      items: [
        ["待办中心", "子任务、进度与优先级"],
        ["日历视图", "月视图，支持系统日历同步"],
        ["分类筛选", "自定义颜色与图标"],
        ["归档与回收站", "保持首页清爽，误删可找回"],
      ],
    },
    {
      title: "数据与同步",
      items: [
        ["iCloud 同步", "多设备实时互通"],
        ["导出导入", "文本、Excel 等格式"],
        ["连接服务", "Notion、Obsidian 同步"],
      ],
    },
    {
      title: "个性化",
      items: [
        ["主题外观", "多种颜色，支持深色模式"],
        ["应用图标", "多款图标自由更换"],
        ["字体字号", "找到舒适的阅读体验"],
        ["隐私保护", "密码与面容 ID 加锁"],
      ],
    },
  ],

  finalKicker: "从下一句开始",
  finalTitle: "让灵感先留下来，再慢慢长成结果",
  finalAction: "下载闪念",
};

const en: PlaybookCopy = {
  kicker: "How it works",
  title: "Say it first, then move it toward an outcome",
  lead: "No setup to learn. Here is how IdeaSnap works in real life: start with one sentence, let AI handle the mechanical organizing, and keep your attention on ideas and decisions.",

  stageKicker: "A three-step mental model",
  stageTitle: "The full journey of one idea",
  stageLead: "Every note travels through these three steps. The first two take almost no time — the third is where the value shows up.",
  stages: [
    {
      title: "Capture instantly",
      subtitle: "Say it now, skip the formatting",
      body: "Ideas and to-dos never pick a convenient moment. Hold the microphone on the home screen and speak — release to save. Typing and photos work too.",
      bullets: [
        "Hold the mic on the home screen, speech becomes text live",
        "Start recording from the Lock Screen widget or a Siri shortcut",
        "Raise your wrist on Apple Watch — recordings sync back to iPhone",
        "Share a screenshot to IdeaSnap and extract what is inside",
      ],
    },
    {
      title: "AI organizes",
      subtitle: "Leave the mechanical work to AI",
      body: "After you save, AI turns speech into a usable note: transcribe and clean up, add a title and summary, and pull out the action items.",
      bullets: [
        "Transcribe and polish spoken language",
        "Generate titles and summaries automatically",
        "Detect tasks — mention a time and a reminder is created",
        "Suggest tags by content, no manual filing",
      ],
    },
    {
      title: "Organize & follow through",
      subtitle: "Come back and turn ideas into results",
      body: "When you have a moment, come back: check tasks, search related notes, and run periodic reviews so scattered input becomes long-term knowledge.",
      bullets: [
        "Review every action item in the Todo Center",
        "Find anything with search, tags, and smart collections",
        "Use AI Insights for weekly and monthly reviews",
        "Sync via iCloud, connect Notion / Obsidian",
      ],
    },
  ],

  scenarioKicker: "Playbook",
  scenarioTitle: "How people actually use IdeaSnap",
  scenarioLead: "Each scenario is a path you can follow right away. Open one, read the steps, and use it today.",
  categories: [
    { id: "all", label: "All" },
    { id: "work", label: "Work" },
    { id: "capture", label: "Capture" },
    { id: "learn", label: "Learning" },
    { id: "review", label: "Review & writing" },
    { id: "life", label: "Life" },
  ],
  scenarios: [
    {
      id: "meeting-notes",
      category: "work",
      icon: "🎙️",
      title: "Leave the meeting with minutes and tasks",
      tagline: "Focus on the discussion — get the recap 30 seconds after",
      intro: "Let IdeaSnap record through the meeting. AI remembers the decisions and who owns what.",
      steps: [
        "When the meeting starts, hold the microphone on the home screen and set the phone aside",
        "Save when the discussion ends — AI transcribes everything and writes a title and summary",
        "Open the note to review extracted tasks: who, when, and what",
        "Follow up in the Todo Center; items with times can sync to the system calendar",
      ],
      features: ["Voice notes", "AI summary", "Smart tasks", "Todo Center"],
      tip: "Say one sentence out loud — “who owns this and by when” — and the extracted tasks become much more complete.",
      action: { id: "todoCenter", label: "Open Todo Center" },
    },
    {
      id: "watch-capture",
      category: "capture",
      icon: "⌚",
      title: "Catch walking ideas from your wrist",
      tagline: "No phone needed — the idea still gets saved",
      intro: "Walks, runs, red lights: good ideas love the moments when your hands are busy.",
      steps: [
        "Raise your wrist, open IdeaSnap on Apple Watch, and tap to speak",
        "Tap to finish — the recording transfers to your iPhone automatically",
        "By the time you check your phone, the idea is transcribed and organized into a card",
      ],
      features: ["Apple Watch", "Auto sync", "AI transcription"],
      tip: "Add IdeaSnap to your watch face so one tap starts recording.",
    },
    {
      id: "lockscreen",
      category: "capture",
      icon: "⚡",
      title: "From Lock Screen to recording in one second",
      tagline: "The closer the entry point, the more ideas survive",
      intro: "Put capture on your Lock Screen and Siri, and skip even the “open the app” step.",
      steps: [
        "Long-press the Lock Screen to edit, then add the IdeaSnap widget",
        "Enable the Siri shortcut in settings and start recording with one sentence",
        "On iPhone 15 Pro and later, map the Action button to IdeaSnap recording",
      ],
      features: ["Lock Screen widget", "Siri Shortcuts", "Action button"],
      action: { id: "shortcuts", label: "Set up shortcuts" },
    },
    {
      id: "smart-reminder",
      category: "work",
      icon: "⏰",
      title: "“Meeting at 3pm tomorrow” becomes a reminder",
      tagline: "Say the time — IdeaSnap does the rest",
      intro: "Mention the time naturally while recording, and AI recognizes it and sets the reminder.",
      steps: [
        "Say the time clearly while recording or typing: “send the proposal before Friday”",
        "AI detects the time and creates the matching reminder",
        "Check the calendar view by month so important items never slip",
      ],
      features: ["Smart reminders", "Calendar view"],
      tip: "Adjust how reminders are created in Settings → Smart Reminder Detection.",
      action: { id: "calendar", label: "Open calendar view" },
    },
    {
      id: "screenshot",
      category: "life",
      icon: "📷",
      title: "Screenshots and bills, filed by sharing",
      tagline: "AI reads the information inside the image",
      intro: "Product pages, chat threads, invoices — share the screenshot to IdeaSnap and it is recorded.",
      steps: [
        "Take a screenshot, tap the system share sheet, and choose IdeaSnap",
        "AI extracts the text and recognizes tasks and bill amounts",
        "Content is tagged automatically, so a keyword search finds it later",
      ],
      features: ["Screenshot recognition", "AI extraction", "Smart tags"],
    },
    {
      id: "weekly-review",
      category: "review",
      icon: "🗓️",
      title: "Five minutes every Friday for a weekly review",
      tagline: "Capture casually all week, let AI look back with you",
      intro: "No need to keep a separate journal — your notes are the most honest record of the week.",
      steps: [
        "During the week, record whatever comes to mind without sorting",
        "On Friday, open AI Insights and let AI summarize the week",
        "See what you focused on and finished, then decide what moves forward next week",
      ],
      features: ["AI Insights", "AI summary"],
      tip: "After the review, speak the next action as a new note — that closes the loop.",
      action: { id: "insight", label: "Open AI Insights" },
    },
    {
      id: "reading-notes",
      category: "learn",
      icon: "📚",
      title: "When a passage resonates, speak a note",
      tagline: "The excerpt plus your interpretation is the real reading note",
      intro: "Compared with highlights, an idea said in your own words is worth keeping.",
      steps: [
        "When a paragraph strikes you, record a voice note: read the passage, then add your thoughts",
        "AI turns it into text and suggests tags like “reading”",
        "When writing or discussing later, one keyword search brings it back",
      ],
      features: ["Voice notes", "Smart tags", "Search"],
      action: { id: "search", label: "Try search" },
    },
    {
      id: "idea-to-article",
      category: "review",
      icon: "✍️",
      title: "Scattered thoughts grow into an article",
      tagline: "Good writing is collected over time, not forced in one sitting",
      intro: "Thoughts on one topic arrive weeks apart. IdeaSnap threads them together.",
      steps: [
        "Record a note whenever the topic crosses your mind, in any order",
        "Memory Threads automatically connect the related notes into a storyline",
        "Ask AI to expand and polish inside the note, turning fragments into a draft",
      ],
      features: ["Memory Threads", "AI chat", "AI polish"],
      action: { id: "memoryThreads", label: "See Memory Threads" },
    },
    {
      id: "notion-sync",
      category: "work",
      icon: "🔗",
      title: "Capture on the phone, settle in Notion",
      tagline: "IdeaSnap is the inbox — your knowledge base keeps its shape",
      intro: "Already using Notion or Obsidian? IdeaSnap plugs into your existing system.",
      steps: [
        "Authorize Notion (or configure Obsidian) in Settings → Connected Services",
        "IdeaSnap content syncs over according to your settings",
        "Capture quickly on the go, then continue organizing in your knowledge base",
      ],
      features: ["Connected services", "Notion", "Obsidian"],
      action: { id: "connect", label: "Open Connected Services" },
    },
    {
      id: "smart-collection",
      category: "learn",
      icon: "🗂️",
      title: "Notes on one topic gather themselves",
      tagline: "No manual filing — the knowledge base grows on its own",
      intro: "Smart collections file new notes by tag automatically: one topic, one drawer.",
      steps: [
        "Create a smart collection such as “Product ideas” and pick its tags",
        "New notes that match are added to the collection automatically",
        "Open the collection anytime to see everything on that topic",
      ],
      features: ["Smart collections", "Smart tags"],
      action: { id: "smartCollection", label: "Create a smart collection" },
    },
  ],

  labels: {
    steps: "Follow along",
    features: "Features used",
    tip: "Tip",
    expand: "See steps",
    collapse: "Collapse",
  },

  referenceKicker: "Quick reference",
  referenceTitle: "Everything IdeaSnap can do, on one page",
  referenceLead: "When you need to look up a specific feature, start here.",
  referenceGroups: [
    {
      title: "Ways to capture",
      items: [
        ["Voice notes", "Hold to record with live transcription"],
        ["Text notes", "Markdown formatting supported"],
        ["Siri Shortcuts", "Start recording with one sentence"],
        ["Screenshot recognition", "Share an image to extract text and tasks"],
        ["Widgets", "Home and Lock Screen entry points"],
        ["Apple Watch", "Raise to record, auto sync"],
      ],
    },
    {
      title: "AI capabilities",
      items: [
        ["Model switching", "DeepSeek, Doubao, GPT, and more"],
        ["AI summary", "Automatic titles and summaries"],
        ["Smart tasks", "Action items found in your content"],
        ["Smart reminders", "Times detected, reminders created"],
        ["Smart tags", "Tags suggested by content"],
        ["Memory Threads", "Related notes linked automatically"],
        ["AI chat", "Summarize, translate, expand, polish"],
      ],
    },
    {
      title: "Tasks & organization",
      items: [
        ["Todo Center", "Subtasks, progress, and priorities"],
        ["Calendar view", "Monthly view with system calendar sync"],
        ["Categories", "Custom colors and icons"],
        ["Archive & trash", "Keep the home screen clean, recover mistakes"],
      ],
    },
    {
      title: "Data & sync",
      items: [
        ["iCloud sync", "Real-time across devices"],
        ["Export & import", "Text, Excel, and more"],
        ["Connected services", "Notion and Obsidian sync"],
      ],
    },
    {
      title: "Personalization",
      items: [
        ["Themes", "Multiple colors with dark mode"],
        ["App icons", "A set of alternative icons"],
        ["Fonts & sizes", "Find comfortable reading"],
        ["Privacy lock", "Passcode and Face ID"],
      ],
    },
  ],

  finalKicker: "Start with the next sentence",
  finalTitle: "Capture the thought first. Let it grow into an outcome.",
  finalAction: "Download IdeaSnap",
};

export const playbookCopy: Record<Locale, PlaybookCopy> = { zh, en };

/** App 内嵌"去试试"跳转链接（由 iOS WebView 拦截处理） */
export const guideActionScheme = "mymemorydebris://guide?action=";
