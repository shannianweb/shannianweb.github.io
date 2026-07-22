(function () {
  var STORAGE_KEY = 'shannian-lang';

  var translations = {
    'zh-CN': {
      /* Site */
      'site.title': '闪念 - AI 语音笔记 | Apple Watch、iOS、Android、Windows、macOS、Linux 全平台下载',
      'site.desc': '闪念是一款 AI 语音笔记应用，支持 Apple Watch、iOS、Android、Windows、macOS、Linux。开口记录灵感、会议、待办和想法，AI 自动转写、总结、提取行动项。App Store 编辑推荐。',
      'site.ogtitle': '闪念 - AI 语音笔记',
      'site.ogdesc': '开口即记录，AI 自动整理。App Store 编辑推荐。支持 Apple Watch、iOS、Android、Windows、macOS、Linux。',

      /* Nav */
      'nav.brand': '闪念',
      'nav.tagline': 'AI 语音笔记',
      'nav.download': '下载',
      'nav.features': '功能',
      'nav.pricing': '定价',
      'nav.about': '关于',
      'nav.login': '登录 / 注册',
      'nav.install': '立即下载',

      /* Hero */
      'hero.eyebrow': '语音优先 · 全平台同步',
      'hero.title': '开口记录，AI 帮你整理成笔记',
      'hero.title.p1': '开口记录，',
      'hero.title.p2': 'AI 帮你整理成笔记',
      'hero.subtitle': '闪念把语音、图片和零散想法整理成清晰笔记、待办、摘要和结构。手机上随手记，电脑上继续写，多端协同不打断思路。',
      'hero.cta.download': '下载适合我的版本',
      'hero.cta.features': '看看如何整理',

      /* Trust strip */
      'trust.editor': '编辑推荐',
      'trust.top5': '效率前五',
      'trust.million': '安装超百万',

      /* Platform strip titles */
      'platform.watch': 'Apple Watch',
      'platform.ios': 'iOS',
      'platform.android': 'Android',
      'platform.windows': 'Windows',
      'platform.macos': 'macOS',
      'platform.linux': 'Linux',

      /* Platform band */
      'platform-band.kicker': '全平台',
      'platform-band.title': '一个账号，覆盖手表、手机与电脑',
      'platform-band.desc': '从腕上捕捉到桌面整理，闪念在你常用的设备上保持同一套笔记。',

      /* Features: record */
      'features.record.kicker': '更快记录',
      'features.record.title': '灵感来时，先接住再说',
      'features.record.desc': '无需排版、无需分类。抬腕或打开手机就能说，把一闪而过的想法先留下来。',
      'features.record.point1.title': '手表与手机快速记录',
      'features.record.point1.desc': '适合走路、开会、睡前、通勤时记录灵感，减少打字打断。',
      'features.record.point2.title': '图片与附件一起带走',
      'features.record.point2.desc': '语音之外也能附上图片和材料，回到电脑再慢慢整理。',
      'features.record.point3.title': '多端连续使用',
      'features.record.point3.desc': '腕上先记一笔，手机补全细节，桌面端完成归档与复盘。',
      'features.record.cta.mobile': '了解手机端',
      'features.record.cta.watch': '了解手表端',

      /* Features: organize */
      'features.organize.kicker': '更好整理',
      'features.organize.title': '从一句话，到能继续推进的笔记',
      'features.organize.desc': '闪念的重点不是把声音存起来，而是帮你把散乱表达变成可以搜索、复盘和执行的内容。',
      'features.organize.point1.title': 'AI 智能总结',
      'features.organize.point1.desc': '自动提炼主题、关键点和摘要，把口语化表达整理成更易读的文本。',
      'features.organize.point2.title': '待办自动提取',
      'features.organize.point2.desc': '从录音和笔记里识别要做的事，减少会后遗漏。',
      'features.organize.point3.title': '结构化整理',
      'features.organize.point3.desc': '标题、段落、清单与标签，让内容更容易搜索和再次创作。',
      'features.organize.cta.desktop': '了解桌面端',
      'features.organize.cta.workflow': '查看工作流',

      /* Download section */
      'download.kicker': '下载',
      'download.title': '一个闪念账号，覆盖你的所有设备',
      'download.desc': '手表端和移动端适合随时记录，桌面端适合整理、搜索和深度编辑。当前安装包版本为 1.0.18。',
      'download.recommended.label': '智能推荐',
      'download.recommended.title': '选择你的系统下载闪念',
      'download.recommended.desc': '我们会根据当前设备推荐合适版本，也可在下方选择其它平台。',
      'download.recommended.cta': '查看全部下载',
      'download.card.ios.title': 'iOS / iPadOS / Apple Watch',
      'download.card.ios.badge': '移动端',
      'download.card.ios.desc': '适合随时语音记录、卡片浏览、标签筛选，并在 iPhone、iPad 和 Apple Watch 上同步灵感。',
      'download.card.ios.meta1': 'App Store',
      'download.card.ios.meta2': 'iPhone',
      'download.card.ios.meta3': 'iPad',
      'download.card.ios.meta4': 'Watch',
      'download.card.ios.cta': '前往 App Store',
      'download.card.android.title': 'Android',
      'download.card.android.badge': '移动端',
      'download.card.android.desc': 'APK 安装包，适合安卓手机快速记录语音、查看笔记卡片和同步工作内容。',
      'download.card.android.meta1': 'APK',
      'download.card.android.meta2': '手机',
      'download.card.android.cta': '下载 Android APK',
      'download.card.windows.title': 'Windows',
      'download.card.windows.badge': '桌面端',
      'download.card.windows.desc': '在电脑上处理会议笔记、长文本整理、搜索归档，让桌面工作流更完整。',
      'download.card.windows.meta1': 'EXE',
      'download.card.windows.meta2': 'v1.0.18',
      'download.card.windows.cta.setup': '下载安装版 (Setup)',
      'download.card.windows.cta.portable': '下载便携版 (Portable)',
      'download.card.macos.title': 'macOS',
      'download.card.macos.badge': '桌面端',
      'download.card.macos.desc': '桌面端适合在 Mac 上写作、归档、管理分类，并和移动端保持同一套笔记。',
      'download.card.macos.meta1': 'DMG',
      'download.card.macos.meta2': 'v1.0.18',
      'download.card.macos.meta3': 'arm64',
      'download.card.macos.cta': '下载 macOS 版',
      'download.card.linux.title': 'Linux',
      'download.card.linux.badge': '桌面端',
      'download.card.linux.desc': '适合 Linux 工作站用户在本机整理笔记、沉淀想法和处理长篇语音内容。',
      'download.card.linux.meta1': 'DEB / AppImage',
      'download.card.linux.meta2': 'v1.0.18',
      'download.card.linux.meta3': 'arm64',
      'download.card.linux.cta.deb': '下载 DEB 版',
      'download.card.linux.cta.appimage': '下载 AppImage 版',
      'download.more': 'Apple Watch 随 iOS 安装；Windows 提供 Setup / Portable；macOS 为 arm64 DMG；Linux 提供 DEB / AppImage。首次安装遇到系统提示？查看',
      'download.more.html': 'Apple Watch 随 iOS 安装；Windows 提供 Setup / Portable；macOS 为 arm64 DMG；Linux 提供 DEB / AppImage。首次安装遇到系统提示？查看 <a class="text-link" href="download/">完整下载与安装指引</a>。',

      /* Pricing */
      'pricing.kicker': '定价',
      'pricing.title': '选择适合你的方案',
      'pricing.desc': '通过 Waffo 安全收银台完成支付，会员权益会自动同步到你的所有设备。',
      'pricing.monthly.badge': '月付',
      'pricing.monthly.title': '月度订阅',
      'pricing.monthly.price': '加载价格…',
      'pricing.monthly.period': '/月',
      'pricing.monthly.feat1': '无限语音记录',
      'pricing.monthly.feat2': 'AI 智能总结',
      'pricing.monthly.feat3': '待办自动提取',
      'pricing.monthly.feat4': '全平台同步',
      'pricing.monthly.feat5': '适合短期试用',
      'pricing.monthly.cta': '安全购买',
      'pricing.yearly.badge': '推荐',
      'pricing.yearly.title': '年度订阅',
      'pricing.yearly.price': '加载价格…',
      'pricing.yearly.period': '/年',
      'pricing.yearly.feat1': '包含月度全部权益',
      'pricing.yearly.feat2': '按年购买更划算',
      'pricing.yearly.feat3': '优先功能更新',
      'pricing.yearly.feat4': '全平台会员同步',
      'pricing.yearly.feat5': '适合长期使用',
      'pricing.yearly.cta': '安全购买',
      'pricing.lifetime.badge': '早鸟价',
      'pricing.lifetime.title': '终身买断',
      'pricing.lifetime.price': '加载价格…',
      'pricing.lifetime.period': '一次性',
      'pricing.lifetime.original': '限时早鸟优惠，实际价格以收银台为准',
      'pricing.lifetime.feat1': '一次购买，长期使用',
      'pricing.lifetime.feat2': '包含核心 AI 能力',
      'pricing.lifetime.feat3': '优先功能更新',
      'pricing.lifetime.feat4': '全平台会员同步',
      'pricing.lifetime.feat5': '适合确定长期留下的用户',
      'pricing.lifetime.cta': '安全购买',
      'pricing.loading': '正在加载 Waffo 正式环境价格…',
      'pricing.footnote': '通过 Waffo 安全收银台完成支付。自动续期订阅可随时取消；税费与最终金额以结算页为准。详见',
      'pricing.footnote.html': '通过 Waffo 安全收银台完成支付。自动续期订阅可随时取消；税费与最终金额以结算页为准。详见<a href="https://www.northcity.top/ideasnap-subscription-agreement/" target="_blank" rel="noopener noreferrer">服务条款</a>。',

      /* Watch section */
      'watch.kicker': '手表端',
      'watch.title': '灵感来得很快，手表端先接住',
      'watch.desc': 'Apple Watch 端支持准备录音、录音中控制和查看笔记卡片。你不用拿出手机，也能把当下的想法先保存下来。',
      'watch.step1.title': '抬腕准备录音',
      'watch.step1.desc': '轻点开始，适合走路、运动、临时会议等不方便打字的场景。',
      'watch.step2.title': '腕上控制录音',
      'watch.step2.desc': '录音中可以暂停或结束，保留关键语音素材，回到手机或桌面继续整理。',
      'watch.cta': '手表端详情',

      /* Workflow */
      'workflow.kicker': '工作流',
      'workflow.title': '把灵感从捕捉推进到可执行',
      'workflow.desc': '闪念适合「先说出来，再慢慢整理」的思考方式。你只需要负责表达，剩下的交给 AI 和多端工作流。',
      'workflow.step1.title': '随手记录',
      'workflow.step1.desc': '手表或手机端快速记录想法，也可以添加图片、标签和分类。',
      'workflow.step2.title': 'AI 处理',
      'workflow.step2.desc': '自动转写、总结、识别待办、梳理结构，让内容从口语变成笔记。',
      'workflow.step3.title': '桌面整理',
      'workflow.step3.desc': '回到电脑继续归档、搜索、编辑和复盘，把零碎输入沉淀成长期知识。',
      'workflow.caption': '桌面端适合长时间整理与复盘',

      /* Scenarios */
      'scenario.kicker': '场景',
      'scenario.title': '灵感来得不按时间表，闪念随时接住',
      'scenario.desc': '从个人思考到工作记录，从移动场景到桌面整理，闪念都围绕真实使用节奏设计。',
      'scenario.card1.title': '会议复盘',
      'scenario.card1.desc': '记录讨论过程，自动整理重点、结论和待办，减少会后补笔记的负担。',
      'scenario.card2.title': '腕上灵感',
      'scenario.card2.desc': '想法出现时先用 Apple Watch 说出来，之后再由 AI 帮你补标题、标签和结构。',
      'scenario.card3.title': '阅读摘记',
      'scenario.card3.desc': '把读到的内容和自己的理解快速说下来，整理成可搜索的知识卡片。',
      'scenario.card4.title': '写作素材',
      'scenario.card4.desc': '把零散观点先收集起来，再在桌面端筛选、改写和延展成文章或方案。',

      /* Trust section */
      'trust-section.kicker': '信任',
      'trust-section.title': '专注记录与整理，认真对待隐私',
      'trust-section.card1.title': '我们专注什么',
      'trust-section.card1.desc': '闪念只专注「语音捕捉 + AI 整理」。我们不做团队协作文档，也不做复杂的 All-in-one 知识库，把精力放在更快记录、更好整理这件事上。',
      'trust-section.card1.item1': '持续更新，而不是一次性堆功能',
      'trust-section.card1.item2': '真实可用，优先服务长期留下的用户',
      'trust-section.card1.item3': '由独立开发者北城长期维护',
      'trust-section.card2.title': '隐私与数据',
      'trust-section.card2.desc': '保护用户隐私是最重要的事。我们不会通过贩卖隐私数据获得利润；你的订阅支持产品继续做得更好。',
      'trust-section.card2.item1': 'AI 功能需明确同意，并可关闭',
      'trust-section.card2.item2': '不出售个人数据，不用于广告画像',
      'trust-section.card2.item3': '不将内容用于训练第三方模型',
      'trust-section.privacy': '阅读隐私政策',

      /* Final CTA */
      'cta.title': '从下一句灵感开始',
      'cta.desc': '下载你常用设备上的版本。手机负责捕捉，电脑负责整理，让灵感从一句话自然长成一份清晰笔记。',
      'cta.downloads': '查看多端下载',
      'cta.pricing': '查看会员方案',
      'cta.about': '关于闪念',

      /* Footer */
      'footer.desc': '开口记录，AI 自动整理。由独立开发者北城打造。',
      'footer.products': '产品',
      'footer.desktop': '桌面端',
      'footer.mobile': '手机端',
      'footer.watch': '手表端',
      'footer.integrations': '联动与 AI',
      'footer.resources': '资源',
      'footer.download': '下载与安装',
      'footer.help': '帮助',
      'footer.pricing': '定价',
      'footer.changelog': '更新动态',
      'footer.about': '关于',
      'footer.about-us': '关于闪念',
      'footer.contact': '联系我们',
      'footer.beicheng': '关于北城',
      'footer.legal': '法律',
      'footer.tos': '服务条款',
      'footer.privacy': '隐私政策',
      'footer.copyright': '© 2026 闪念 IdeaSnap. All rights reserved.',
      'footer.made-by': '由',
      'footer.made-by.html': '由 <a href="https://www.northcity.top/" target="_blank" rel="noopener noreferrer">独立开发者北城</a> 打造',

      /* Auth modal */
      'auth.title': '登录闪念账号',
      'auth.desc': '登录后即可在网站安全购买，会员自动同步到所有设备。',
      'auth.tab.sms': '短信登录',
      'auth.tab.password': '密码登录',
      'auth.tab.register': '注册账号',
      'auth.phone': '手机号',
      'auth.phone.placeholder': '请输入 11 位手机号',
      'auth.smsCode': '短信验证码',
      'auth.smsCode.placeholder': '6 位验证码',
      'auth.sendCode': '发送验证码',
      'auth.loginRegister': '登录 / 自动注册',
      'auth.sms.note': '未注册手机号会自动创建闪念账号；与桌面端、Android 使用同一账号和会员权益。',
      'auth.password.placeholder': '请输入手机号',
      'auth.password.label': '密码',
      'auth.password.placeholder2': '6-16 位密码',
      'auth.password.login': '登录',
      'auth.register.setPassword': '设置密码',
      'auth.register.submit': '注册并登录',

      /* Account modal */
      'account.title': '我的闪念账号',
      'account.desc': '会员权益在网站、桌面端和移动端自动同步。',
      'account.viewPricing': '查看会员方案',
      'account.logout': '退出登录',

      /* Page: about */
      'about.pageTitle': '关于闪念 - IdeaSnap',
      'about.pageDesc': '闪念是独立开发者北城打造的 AI 语音笔记。2018 年起持续更新，曾获 App Store 编辑推荐。',
      'about.kicker': '关于',
      'about.title': '关于闪念',
      'about.desc': '闪念（IdeaSnap）是一款 AI 语音笔记，帮助你记录一闪而过的灵感，并自动整理成可继续推进的内容。',
      'about.section1.title': '从哪来',
      'about.section1.p1': '闪念大约从 2018 年上线，一直保持稳定更新：每个月至少一个小版本，每季度一个大版本。',
      'about.section1.p2': '2025 年 11 月，闪念获得 App Store 编辑推荐；2026 年 1 月，3.5 版本上线 AI 总结能力。站点展示评分约 4.6 分、595 个评分，并曾进入效率工具前列。对我们来说，更重要的是有人真正在用它解决问题。',
      'about.section2.title': '谁在做',
      'about.section2.p1': '闪念由独立开发者北城打造与维护。不是为了堆功能，而是希望做出真正有人用、能长期维护的产品。',
      'about.section2.item1': '长期主义，持续迭代',
      'about.section2.item2': '真实用户，解决真实问题',
      'about.section2.item3': '隐私优先，不做数据生意',
      'about.section3.title': '我们在意什么',
      'about.section3.item1': '持续更新，让产品保持活力',
      'about.section3.item2': '注重细节与本地化（支持约 15 种语言）',
      'about.section3.item3': '隐私优先，不收集不必要的数据',
      'about.section3.item4': '专注语音捕捉与 AI 整理，拒绝 All-in-one',
      'about.log1.title': '闪念获得 App Store 编辑推荐的背后',
      'about.log1.meta': '北城开发日志 · 2025.11.15',
      'about.log2.title': '闪念 3.5 更新：AI 总结功能上线',
      'about.log2.meta': '北城开发日志 · 2026.01.15',
      'about.log3': '更多关于开发者北城',

      /* Page: contact */
      'contact.pageTitle': '联系我们 - 闪念 IdeaSnap',
      'contact.pageDesc': '联系闪念与独立开发者北城：邮箱、微信、X、小红书、GitHub、微博、知乎。',
      'contact.kicker': '关于 · 联系',
      'contact.title': '联系我们',
      'contact.desc': '产品问题、合作想法，或只是想打个招呼，都欢迎通过下列方式联系。每一条反馈都会认真看。',
      'contact.faq1.q': '可以合作吗？',
      'contact.faq1.a': '如果是有意义的项目，很乐意交流。请邮件说明项目背景和合作方式。',
      'contact.faq2.q': 'App 有问题或建议怎么反馈？',
      'contact.faq2.a': '请直接发邮件，或在 App Store 评论区留言。产品相关反馈优先走邮件，便于跟进。',
      'contact.faq3.q': '想了解更多独立开发故事？',
      'contact.faq3.a': '可以访问北城个人站点的开发日志与关于页，了解闪念与其他产品背后的长期维护。',

      /* Page: desktop */
      'desktop.pageTitle': '桌面端 - 闪念 IdeaSnap',
      'desktop.pageDesc': '闪念桌面端支持 Windows、macOS、Linux。在电脑上整理会议笔记、搜索归档，浅色与深色界面均适合长时间复盘。',
      'desktop.kicker': '产品 · 桌面端',
      'desktop.title': '在电脑上把灵感整理成长期笔记',
      'desktop.desc': '会议复盘、长文整理、搜索归档——桌面端适合深度工作。支持 Windows、macOS、Linux，浅色与深色界面均可。',
      'desktop.cta.download': '前往下载',
      'desktop.cta.guide': '安装指引',
      'desktop.caption1': '桌面主界面',
      'desktop.caption2': '浅色模式',
      'desktop.caption3': '深色模式',
      'desktop.section.title': '桌面端适合做什么',
      'desktop.section.item1': '处理会议录音转写后的长笔记',
      'desktop.section.item2': '搜索、标签筛选与归档',
      'desktop.section.item3': '阅读 AI 总结、核对待办并继续编辑',
      'desktop.section.item4': '与手机、手表端保持同一账号同步',
      'desktop.platform.title': '平台与安装包',
      'desktop.platform.windows': 'Windows：安装版 Setup / 便携版 Portable',
      'desktop.platform.macos': 'macOS：Apple Silicon DMG（首次打开请按安装指引操作）',
      'desktop.platform.linux': 'Linux：DEB / AppImage（arm64）',
      'desktop.link': '查看完整下载与安装说明',

      /* Page: download */
      'download-page.pageTitle': '下载与安装 - 闪念 IdeaSnap',
      'download-page.pageDesc': '闪念全平台下载：iOS、Android、Windows、macOS、Linux，以及 macOS / Android / Windows / Linux 安装指引。',
      'download-page.kicker': '资源 · 下载',
      'download-page.title': '下载与安装指引',
      'download-page.desc': '一个账号覆盖手表、手机与电脑。当前安装包版本为 1.0.18。下方提供各平台下载入口与首次安装说明。',
      'download-page.cta.packages': '查看安装包',
      'download-page.cta.guide': '安装指引',
      'download-page.ios.title': 'iOS / iPadOS / Watch',
      'download-page.ios.badge': '移动端',
      'download-page.ios.desc': 'App Store 安装，Apple Watch 随 iOS 版使用。',
      'download-page.ios.cta': '前往 App Store',
      'download-page.android.title': 'Android',
      'download-page.android.badge': '移动端',
      'download-page.android.desc': '官方 APK 安装包。',
      'download-page.android.cta': '下载 APK',
      'download-page.windows.title': 'Windows',
      'download-page.windows.badge': '桌面端',
      'download-page.windows.desc': '安装版与便携版。',
      'download-page.windows.cta.setup': 'Setup',
      'download-page.windows.cta.portable': 'Portable',
      'download-page.macos.title': 'macOS',
      'download-page.macos.badge': '桌面端',
      'download-page.macos.desc': 'DMG（Intel / Apple Silicon 通用）',
      'download-page.macos.cta': '下载 DMG',
      'download-page.linux.title': 'Linux',
      'download-page.linux.badge': '桌面端',
      'download-page.linux.desc': 'DEB（amd64）与 AppImage 通用包',
      'download-page.linux.cta.deb': 'DEB',
      'download-page.linux.cta.appimage': 'AppImage',
      'download-page.guide.kicker': '安装指引',
      'download-page.guide.title': '首次安装安全提示',
      'download-page.guide.desc': '闪念是经过代码签名的正版应用。部分平台首次安装会触发系统保护提示，按下列步骤操作即可。',
      'download-page.macos.warning': '首次打开可能看到：Apple 无法验证「闪念」是否包含恶意软件。',
      'download-page.macos.steps': '1. 点击 取消，不要点「移到废纸篓」；2. 打开 系统设置 → 隐私与安全性；3. 在安全性区域找到已阻止提示；4. 点击 仍要打开 并确认；5. 之后再打开不会再提示',
      'download-page.macos.shortcut': '访达中右键应用 → 打开',
      'download-page.android.warning': '可能提示：禁止安装未知来源应用',
      'download-page.android.steps': '1. 在弹窗中点击 设置；2. 开启允许来自此来源的应用；3. 返回后点击 安装',
      'download-page.android.note': '因未通过 Google Play 分发，属于正常安全提醒。',
      'download-page.windows.steps': '1. 下载 Setup 安装版或 Portable 便携版；2. 若 SmartScreen 提示，选择更多信息 → 仍要运行；3. 按向导完成安装，或直接运行便携版',
      'download-page.windows.tip': '便携版适合不想写入系统目录的用户。',
      'download-page.linux.steps': '1. DEB：使用系统包管理器安装；2. AppImage：赋予可执行权限后运行；3. 当前提供 amd64 构建，Intel / AMD 通用',
      'download-page.linux.tip': '若架构不匹配，请等待后续包或联系反馈。',

      /* Page: help */
      'help.pageTitle': '帮助 - 闪念 IdeaSnap',
      'help.pageDesc': '闪念常见问题：安装提示、账号与会员同步、取消订阅、AI 与隐私、反馈渠道。',
      'help.kicker': '资源 · 帮助',
      'help.title': '帮助与常见问题',
      'help.desc': '安装、账号、会员与隐私相关的常见问题。若仍未解决，请发邮件至',
      'help.faq1.q': 'macOS 首次打开被系统拦截？',
      'help.faq1.a': '因未加入 Apple 付费开发者计划，首次安装可能提示无法验证。请在「系统设置 → 隐私与安全性」中选择「仍要打开」，或访达中右键应用选择打开。完整步骤见下载与安装页。',
      'help.faq2.q': 'Android 提示未知来源？',
      'help.faq2.a': '官方 APK 未通过 Google Play 分发时属于正常安全提醒。按提示允许来自此来源的应用后即可安装。',
      'help.faq3.q': '网站购买的会员会同步到手机和电脑吗？',
      'help.faq3.a': '会。使用同一闪念账号登录后，会员权益会同步到 iPhone、iPad、Apple Watch、Android、Mac、Windows 与 Linux。',
      'help.faq4.q': '如何取消订阅？',
      'help.faq4.a': 'Apple / Google 渠道请在对应商店的订阅管理中取消；网站 Waffo 订阅按结算页与服务条款说明操作。取消后当前周期内通常仍可继续使用。',
      'help.faq5.q': 'AI 会不会拿我的内容训练模型？',
      'help.faq5.a': '不会将内容用于训练第三方模型，也不出售个人数据。AI 功能需明确同意，并可关闭。详见隐私政策。',
      'help.faq6.q': '退款怎么处理？',
      'help.faq6.a': '以服务条款为准。一般原则不退；新订户在用量未超配额等条件下可能适用约 7 日规则，具体以协议与支付渠道规定为准。',
      'help.faq7.q': '哪里看更新动态？',
      'help.faq7.a': '产品站不自建博客。闪念相关更新故事发布在北城开发日志，例如编辑推荐与 3.5 AI 总结上线记录。',
      'help.cta.download': '下载与安装',
      'help.cta.contact': '联系我们',
      'help.cta.privacy': '隐私政策',

      /* Page: integrations */
      'integrations.pageTitle': '联动与 AI - 闪念 IdeaSnap',
      'integrations.pageDesc': '了解闪念的 Notion 联动、AI 整理能力（豆包、OpenAI、通义千问），以及隐私与同意机制。',
      'integrations.kicker': '产品 · 联动与 AI',
      'integrations.title': '整理想法，也能接进你的工作流',
      'integrations.desc': '闪念用 AI 帮助转写、总结与提取待办；并支持 Notion 等联动。AI 功能需你明确同意，也可随时关闭。',
      'integrations.cta.download': '下载闪念',
      'integrations.cta.privacy': '隐私政策',
      'integrations.ai.title': 'AI 整理',
      'integrations.ai.p1': '为提供智能整理、语音转文字与内容分析，闪念在你主动使用相关功能并明确同意后，才会调用第三方 AI 服务。目前可能涉及豆包（字节）、OpenAI GPT、通义千问（阿里云）等。',
      'integrations.ai.item1': '首次使用需明确同意',
      'integrations.ai.item2': '可在设置中关闭 AI 功能',
      'integrations.ai.item3': '不会将内容用于广告画像或出售',
      'integrations.ai.item4': '不会将内容用于训练第三方模型',
      'integrations.notion.title': 'Notion 联动',
      'integrations.notion.p1': '闪念支持通过 Notion 授权完成联动。授权完成后会回到应用继续流程。若你在浏览器中完成授权，请确保已安装闪念客户端。',
      'integrations.account.title': '账号与同步',
      'integrations.account.item1': '网站购买的会员权益会同步到各端',
      'integrations.account.item2': 'Web 支付通过 Waffo 安全收银台完成',
      'integrations.account.item3': '取消订阅与退款规则见服务条款',
      'integrations.tos': '阅读服务条款',

      /* Page: mobile */
      'mobile.pageTitle': '手机端 - 闪念 IdeaSnap',
      'mobile.pageDesc': '闪念手机端支持 iOS、iPadOS 与 Android。随时语音记录灵感，AI 自动整理成笔记与待办。',
      'mobile.kicker': '产品 · 手机端',
      'mobile.title': '开口即记录，口袋里的闪念',
      'mobile.desc': 'iPhone、iPad 与 Android 均可使用。适合通勤、会中、睡前——想法出现时先说出来，之后再整理。',
      'mobile.cta.ios': 'App Store',
      'mobile.cta.android': 'Android APK',
      'mobile.caption1': 'iOS',
      'mobile.caption2': 'Android',
      'mobile.section.title': '手机端能力',
      'mobile.section.item1': '长按麦克风快速语音记录',
      'mobile.section.item2': '卡片浏览、标签筛选与搜索',
      'mobile.section.item3': '图片与附件一起保存',
      'mobile.section.item4': '与 Apple Watch、桌面端同一账号同步',
      'mobile.download.title': '下载渠道',
      'mobile.download.ios': 'iOS / iPadOS / Apple Watch：App Store',
      'mobile.download.android': 'Android：官方 APK（安装时如遇未知来源提示，见安装指引）',
      'mobile.link': '了解手表端如何配合手机使用',

      /* Page: watch */
      'watch-page.pageTitle': '手表端 - 闪念 IdeaSnap',
      'watch-page.pageDesc': '闪念 Apple Watch 端支持抬腕录音、腕上控制与笔记卡片。不方便拿手机时，也能先接住灵感。',
      'watch-page.kicker': '产品 · 手表端',
      'watch-page.title': '抬腕就能记，灵感不等手机',
      'watch-page.desc': 'Apple Watch 端支持准备录音、录音中控制与查看笔记卡片。走路、运动、临时会议时，先把手头的想法留下来。',
      'watch-page.cta.install': '随 iOS 版安装',
      'watch-page.cta.mobile': '了解手机端',
      'watch-page.caption': '腕上记录，灵感不落地',
      'watch-page.section.title': '腕上工作流',
      'watch-page.section.item1': '抬腕准备录音，轻点开始',
      'watch-page.section.item2': '录音中可暂停或结束',
      'watch-page.section.item3': '回到手机或桌面后，由 AI 继续转写与整理',
      'watch-page.note': '手表端随 iOS 版提供，安装闪念 iPhone 应用后即可在 Apple Watch 上使用。',

      /* Page: waffo success */
      'success.pageTitle': '支付成功 - 闪念',
      'success.title': '支付成功',
      'success.subtitle': '感谢你支持闪念会员 / 你的支持让产品能持续变得更好。',
      'success.status': '正在确认会员权益…',
      'success.note': '支付通知到达后，网站会自动刷新你的会员状态。',
      'success.help.title': '会员未自动生效？',
      'success.help.desc': '请先返回官网并登录付款时使用的同一账号。网站会自动验单；如果仍未生效，请通过以下方式联系我们，我们会在 24 小时内为你处理。',
      'success.wechat': '微信',
      'success.email': '邮箱',
      'success.phone': '手机号',
      'success.copied': '已复制到剪贴板',
      'success.back': '← 返回闪念官网',

      /* Recommended (dynamic) */
      'rec.ios.title': '下载 iOS / Apple Watch 版',
      'rec.ios.desc': '前往 App Store 安装，可配合 Apple Watch 使用。',
      'rec.ios.cta': '前往 App Store',
      'rec.android.title': '下载 Android 版',
      'rec.android.desc': '当前设备适合安装官方 APK。',
      'rec.android.cta': '下载 APK',
      'rec.windows.title': '下载 Windows 版',
      'rec.windows.desc': '提供安装版 Setup 与便携版 Portable。',
      'rec.windows.cta': '下载安装版',
      'rec.macos.title': '下载 macOS 版',
      'rec.macos.desc': '适合 Apple Silicon，首次打开见安装指引。',
      'rec.macos.cta': '下载 DMG',
      'rec.linux.title': '下载 Linux 版',
      'rec.linux.desc': '提供 DEB 与 AppImage（arm64）。',
      'rec.linux.cta': '下载 DEB',

      /* Lang switcher */
      'lang.switch': 'EN',
      'lang.label': 'English',
    },

    en: {
      /* Site */
      'site.title': 'IdeaSnap - AI Voice Notes | Apple Watch, iOS, Android, Windows, macOS, Linux',
      'site.desc': 'IdeaSnap is an AI voice notes app for Apple Watch, iOS, Android, Windows, macOS, Linux. Capture ideas, meetings, todos — AI auto-transcribes, summarizes, and extracts action items. App Store Editor\'s Choice.',
      'site.ogtitle': 'IdeaSnap - AI Voice Notes',
      'site.ogdesc': 'Speak. AI organizes. App Store Editor\'s Choice. Available on Apple Watch, iOS, Android, Windows, macOS, Linux.',

      /* Nav */
      'nav.brand': 'IdeaSnap',
      'nav.tagline': 'AI Voice Notes',
      'nav.download': 'Download',
      'nav.features': 'Features',
      'nav.pricing': 'Pricing',
      'nav.about': 'About',
      'nav.login': 'Log in / Sign up',
      'nav.install': 'Install Now',

      /* Hero */
      'hero.eyebrow': 'Voice-First · Cross-Platform Sync',
      'hero.title': 'Speak your mind, AI organizes it into notes',
      'hero.title.p1': 'Speak your mind, ',
      'hero.title.p2': 'AI organizes it into notes',
      'hero.subtitle': 'IdeaSnap turns voice, images, and scattered thoughts into clear notes, tasks, summaries, and structures. Jot down on your phone, continue on your desktop — seamless multi-device collaboration.',
      'hero.cta.download': 'Get the right version for me',
      'hero.cta.features': 'See how it works',

      /* Trust strip */
      'trust.editor': 'Editor\'s Choice',
      'trust.top5': 'Top 5 Productivity',
      'trust.million': '1M+ Installs',

      /* Platform strip titles */
      'platform.watch': 'Apple Watch',
      'platform.ios': 'iOS',
      'platform.android': 'Android',
      'platform.windows': 'Windows',
      'platform.macos': 'macOS',
      'platform.linux': 'Linux',

      /* Platform band */
      'platform-band.kicker': 'Cross-Platform',
      'platform-band.title': 'One account for your watch, phone, and computer',
      'platform-band.desc': 'From wrist capture to desktop organization, IdeaSnap keeps the same set of notes across all your devices.',

      /* Features: record */
      'features.record.kicker': 'Capture Faster',
      'features.record.title': 'When inspiration strikes, catch it first',
      'features.record.desc': 'No formatting, no sorting. Just raise your wrist or open your phone and speak — save that fleeting thought before it\'s gone.',
      'features.record.point1.title': 'Quick capture on Watch & Phone',
      'features.record.point1.desc': 'Perfect for walking, meetings, bedtime, or commuting — capture ideas without typing.',
      'features.record.point2.title': 'Attach images & files',
      'features.record.point2.desc': 'Add images and materials alongside voice notes, then organize them later on your desktop.',
      'features.record.point3.title': 'Seamless multi-device workflow',
      'features.record.point3.desc': 'Jot on your watch, refine on your phone, archive on your desktop.',
      'features.record.cta.mobile': 'Learn about Mobile',
      'features.record.cta.watch': 'Learn about Watch',

      /* Features: organize */
      'features.organize.kicker': 'Organize Better',
      'features.organize.title': 'From a single phrase to actionable notes',
      'features.organize.desc': 'IdeaSnap doesn\'t just store audio — it transforms scattered thoughts into searchable, reviewable, and actionable content.',
      'features.organize.point1.title': 'AI Smart Summary',
      'features.organize.point1.desc': 'Automatically extract themes, key points, and summaries — turning spoken language into readable text.',
      'features.organize.point2.title': 'Auto task extraction',
      'features.organize.point2.desc': 'Identify action items from recordings and notes, reducing post-meeting遗漏.',
      'features.organize.point3.title': 'Structured organization',
      'features.organize.point3.desc': 'Headings, paragraphs, lists, and tags — making content easy to search, reuse, and build upon.',
      'features.organize.cta.desktop': 'Learn about Desktop',
      'features.organize.cta.workflow': 'View Workflow',

      /* Download section */
      'download.kicker': 'Download',
      'download.title': 'One IdeaSnap account for all your devices',
      'download.desc': 'Watch and mobile for quick capture, desktop for organizing, searching, and deep editing. Current version: 1.0.18.',
      'download.recommended.label': 'Smart Recommendation',
      'download.recommended.title': 'Choose your platform to download IdeaSnap',
      'download.recommended.desc': 'We\'ll recommend the best version for your current device. You can also choose other platforms below.',
      'download.recommended.cta': 'View all downloads',
      'download.card.ios.title': 'iOS / iPadOS / Apple Watch',
      'download.card.ios.badge': 'Mobile',
      'download.card.ios.desc': 'Perfect for voice recording, card browsing, and tag filtering — sync ideas across iPhone, iPad, and Apple Watch.',
      'download.card.ios.meta1': 'App Store',
      'download.card.ios.meta2': 'iPhone',
      'download.card.ios.meta3': 'iPad',
      'download.card.ios.meta4': 'Watch',
      'download.card.ios.cta': 'Go to App Store',
      'download.card.android.title': 'Android',
      'download.card.android.badge': 'Mobile',
      'download.card.android.desc': 'APK package for fast voice recording, note card browsing, and content sync on Android phones.',
      'download.card.android.meta1': 'APK',
      'download.card.android.meta2': 'Phone',
      'download.card.android.cta': 'Download Android APK',
      'download.card.windows.title': 'Windows',
      'download.card.windows.badge': 'Desktop',
      'download.card.windows.desc': 'Handle meeting notes, long-form text, and search archives on your computer for a complete desktop workflow.',
      'download.card.windows.meta1': 'EXE',
      'download.card.windows.meta2': 'v1.0.18',
      'download.card.windows.cta.setup': 'Download Setup',
      'download.card.windows.cta.portable': 'Download Portable',
      'download.card.macos.title': 'macOS',
      'download.card.macos.badge': 'Desktop',
      'download.card.macos.desc': 'Write, archive, and manage categories on your Mac — synced with your mobile devices.',
      'download.card.macos.meta1': 'DMG',
      'download.card.macos.meta2': 'v1.0.18',
      'download.card.macos.meta3': 'arm64',
      'download.card.macos.cta': 'Download macOS',
      'download.card.linux.title': 'Linux',
      'download.card.linux.badge': 'Desktop',
      'download.card.linux.desc': 'Organize notes, develop ideas, and process long-form voice content on your Linux workstation.',
      'download.card.linux.meta1': 'DEB / AppImage',
      'download.card.linux.meta2': 'v1.0.18',
      'download.card.linux.meta3': 'arm64',
      'download.card.linux.cta.deb': 'Download DEB',
      'download.card.linux.cta.appimage': 'Download AppImage',
      'download.more': 'Apple Watch comes with iOS; Windows offers Setup / Portable; macOS is arm64 DMG; Linux offers DEB / AppImage. First-time installation issues? See',
      'download.more.html': 'Apple Watch comes with iOS; Windows offers Setup / Portable; macOS is arm64 DMG; Linux offers DEB / AppImage. <a class="text-link" href="download/">First-time installation issues? See the full guide</a>.',

      /* Pricing */
      'pricing.kicker': 'Pricing',
      'pricing.title': 'Choose the plan that works for you',
      'pricing.desc': 'Secure payments via Waffo checkout. Membership syncs automatically across all your devices.',
      'pricing.monthly.badge': 'Monthly',
      'pricing.monthly.title': 'Monthly',
      'pricing.monthly.price': 'Loading price…',
      'pricing.monthly.period': '/month',
      'pricing.monthly.feat1': 'Unlimited voice recording',
      'pricing.monthly.feat2': 'AI Smart Summary',
      'pricing.monthly.feat3': 'Auto task extraction',
      'pricing.monthly.feat4': 'Cross-platform sync',
      'pricing.monthly.feat5': 'Best for short-term trial',
      'pricing.monthly.cta': 'Buy Securely',
      'pricing.yearly.badge': 'Popular',
      'pricing.yearly.title': 'Yearly',
      'pricing.yearly.price': 'Loading price…',
      'pricing.yearly.period': '/year',
      'pricing.yearly.feat1': 'All monthly benefits included',
      'pricing.yearly.feat2': 'Better value per year',
      'pricing.yearly.feat3': 'Priority feature updates',
      'pricing.yearly.feat4': 'Cross-platform membership',
      'pricing.yearly.feat5': 'Best for long-term use',
      'pricing.yearly.cta': 'Buy Securely',
      'pricing.lifetime.badge': 'Early Bird',
      'pricing.lifetime.title': 'Lifetime',
      'pricing.lifetime.price': 'Loading price…',
      'pricing.lifetime.period': 'one-time',
      'pricing.lifetime.original': 'Limited early-bird pricing. Final price shown at checkout.',
      'pricing.lifetime.feat1': 'One-time purchase, lifetime use',
      'pricing.lifetime.feat2': 'Core AI capabilities included',
      'pricing.lifetime.feat3': 'Priority feature updates',
      'pricing.lifetime.feat4': 'Cross-platform membership',
      'pricing.lifetime.feat5': 'Best for committed long-term users',
      'pricing.lifetime.cta': 'Buy Securely',
      'pricing.loading': 'Loading Waffo pricing…',
      'pricing.footnote': 'Payments processed via Waffo secure checkout. Auto-renewing subscriptions can be cancelled anytime. Tax and final amount shown at checkout. See',
      'pricing.footnote.html': 'Payments processed via Waffo secure checkout. Auto-renewing subscriptions can be cancelled anytime. Tax and final amount shown at checkout. See <a href="https://www.northcity.top/ideasnap-subscription-agreement/" target="_blank" rel="noopener noreferrer">Terms of Service</a>.',

      /* Watch section */
      'watch.kicker': 'Watch',
      'watch.title': 'Inspiration strikes fast — catch it on your wrist',
      'watch.desc': 'Apple Watch supports ready-to-record, in-recording controls, and note cards. Capture your thoughts without reaching for your phone.',
      'watch.step1.title': 'Raise wrist to record',
      'watch.step1.desc': 'Tap to start. Great for walking, exercise, or impromptu meetings when typing isn\'t convenient.',
      'watch.step2.title': 'Control recording on wrist',
      'watch.step2.desc': 'Pause or end recordings, save key audio, then continue organizing on your phone or desktop.',
      'watch.cta': 'Watch Details',

      /* Workflow */
      'workflow.kicker': 'Workflow',
      'workflow.title': 'From idea capture to actionable output',
      'workflow.desc': 'IdeaSnap is built for the "say it first, organize later" mindset. You focus on expressing — AI and multi-device workflow handle the rest.',
      'workflow.step1.title': 'Quick capture',
      'workflow.step1.desc': 'Jot down ideas on your watch or phone. Add images, tags, and categories.',
      'workflow.step2.title': 'AI processing',
      'workflow.step2.desc': 'Auto-transcribe, summarize, extract tasks, and structure content — turning speech into notes.',
      'workflow.step3.title': 'Desktop organization',
      'workflow.step3.desc': 'Archive, search, edit, and review on your computer — turn fragmented input into lasting knowledge.',
      'workflow.caption': 'Desktop is best for deep organization & review',

      /* Scenarios */
      'scenario.kicker': 'Scenarios',
      'scenario.title': 'Inspiration doesn\'t follow a schedule — IdeaSnap is always ready',
      'scenario.desc': 'From personal reflection to work records, from mobile to desktop — IdeaSnap is designed for real-life rhythms.',
      'scenario.card1.title': 'Meeting Recap',
      'scenario.card1.desc': 'Record discussions, auto-organize key points and action items — reduce the burden of post-meeting notes.',
      'scenario.card2.title': 'Wrist Inspiration',
      'scenario.card2.desc': 'Speak into your Apple Watch when ideas come, then let AI add titles, tags, and structure.',
      'scenario.card3.title': 'Reading Notes',
      'scenario.card3.desc': 'Quickly capture what you read and your thoughts — organized into searchable knowledge cards.',
      'scenario.card4.title': 'Writing Material',
      'scenario.card4.desc': 'Collect scattered ideas, then filter, rewrite, and expand them into articles or proposals on desktop.',

      /* Trust section */
      'trust-section.kicker': 'Trust',
      'trust-section.title': 'Focused on notes, serious about privacy',
      'trust-section.card1.title': 'What we focus on',
      'trust-section.card1.desc': 'IdeaSnap focuses on "voice capture + AI organization". We don\'t do team collaboration docs or complex all-in-one knowledge bases. We put our energy into faster capture and better organization.',
      'trust-section.card1.item1': 'Continuous updates, not feature bloat',
      'trust-section.card1.item2': 'Real-world usability for long-term users',
      'trust-section.card1.item3': 'Built and maintained by indie developer Beicheng',
      'trust-section.card2.title': 'Privacy & Data',
      'trust-section.card2.desc': 'Protecting your privacy is our top priority. We don\'t profit from selling your data — your subscription supports making the product better.',
      'trust-section.card2.item1': 'AI requires explicit consent, can be disabled',
      'trust-section.card2.item2': 'No data selling or ad profiling',
      'trust-section.card2.item3': 'Content not used to train third-party models',
      'trust-section.privacy': 'Read Privacy Policy',

      /* Final CTA */
      'cta.title': 'Start with your next thought',
      'cta.desc': 'Download the version for your device. Phone captures, computer organizes — let your ideas grow from a single phrase into clear notes.',
      'cta.downloads': 'View Downloads',
      'cta.pricing': 'View Pricing',
      'cta.about': 'About IdeaSnap',

      /* Footer */
      'footer.desc': 'Speak. AI organizes. Built by indie developer Beicheng.',
      'footer.products': 'Products',
      'footer.desktop': 'Desktop',
      'footer.mobile': 'Mobile',
      'footer.watch': 'Watch',
      'footer.integrations': 'Integrations & AI',
      'footer.resources': 'Resources',
      'footer.download': 'Download & Install',
      'footer.help': 'Help',
      'footer.pricing': 'Pricing',
      'footer.changelog': 'Changelog',
      'footer.about': 'About',
      'footer.about-us': 'About IdeaSnap',
      'footer.contact': 'Contact',
      'footer.beicheng': 'About Beicheng',
      'footer.legal': 'Legal',
      'footer.tos': 'Terms of Service',
      'footer.privacy': 'Privacy Policy',
      'footer.copyright': '© 2026 IdeaSnap. All rights reserved.',
      'footer.made-by': 'Built by',
      'footer.made-by.html': 'Built by <a href="https://www.northcity.top/" target="_blank" rel="noopener noreferrer">indie developer Beicheng</a>',

      /* Auth modal */
      'auth.title': 'Log in to IdeaSnap',
      'auth.desc': 'Log in to purchase securely on the website. Membership syncs automatically across all devices.',
      'auth.tab.sms': 'SMS Login',
      'auth.tab.password': 'Password Login',
      'auth.tab.register': 'Register',
      'auth.phone': 'Phone Number',
      'auth.phone.placeholder': 'Enter your phone number',
      'auth.smsCode': 'SMS Code',
      'auth.smsCode.placeholder': '6-digit code',
      'auth.sendCode': 'Send Code',
      'auth.loginRegister': 'Log in / Register',
      'auth.sms.note': 'Unregistered phone numbers will be auto-registered. Same account works on desktop and Android.',
      'auth.password.placeholder': 'Enter your phone number',
      'auth.password.label': 'Password',
      'auth.password.placeholder2': '6-16 characters',
      'auth.password.login': 'Log in',
      'auth.register.setPassword': 'Set Password',
      'auth.register.submit': 'Register & Log in',

      /* Account modal */
      'account.title': 'My IdeaSnap Account',
      'account.desc': 'Membership syncs automatically across website, desktop, and mobile.',
      'account.viewPricing': 'View Pricing',
      'account.logout': 'Log out',

      /* Page: about */
      'about.pageTitle': 'About IdeaSnap',
      'about.pageDesc': 'IdeaSnap is an AI voice notes app by indie developer Beicheng. Continuously updated since 2018. Featured by App Store.',
      'about.kicker': 'About',
      'about.title': 'About IdeaSnap',
      'about.desc': 'IdeaSnap is an AI-powered voice notes app that helps you capture fleeting ideas and automatically organizes them into actionable content.',
      'about.section1.title': 'Origin',
      'about.section1.p1': 'IdeaSnap launched around 2018 and has been steadily updated ever since — at least one minor release per month, one major release per quarter.',
      'about.section1.p2': 'In November 2025, IdeaSnap received App Store Editor\'s Choice. In January 2026, version 3.5 introduced AI summary capabilities. The app holds a 4.6 rating with 595 reviews and has ranked among top productivity tools. What matters most to us is that people genuinely use it to solve problems.',
      'about.section2.title': 'Who\'s behind it',
      'about.section2.p1': 'IdeaSnap is built and maintained by indie developer Beicheng. It\'s not about stacking features — it\'s about creating something people actually use and can rely on long-term.',
      'about.section2.item1': 'Long-term thinking, continuous iteration',
      'about.section2.item2': 'Real users, solving real problems',
      'about.section2.item3': 'Privacy-first, no data business',
      'about.section3.title': 'What we care about',
      'about.section3.item1': 'Continuous updates to keep the product alive',
      'about.section3.item2': 'Attention to detail & localization (15+ languages)',
      'about.section3.item3': 'Privacy-first, no unnecessary data collection',
      'about.section3.item4': 'Focused on voice capture & AI organization, no all-in-one',
      'about.log1.title': 'The Story Behind IdeaSnap\'s App Store Feature',
      'about.log1.meta': 'Beicheng Dev Log · 2025.11.15',
      'about.log2.title': 'IdeaSnap 3.5: AI Summary Launch',
      'about.log2.meta': 'Beicheng Dev Log · 2026.01.15',
      'about.log3': 'More about developer Beicheng',

      /* Page: contact */
      'contact.pageTitle': 'Contact Us - IdeaSnap',
      'contact.pageDesc': 'Contact IdeaSnap and indie developer Beicheng: Email, WeChat, X, Xiaohongshu, GitHub, Weibo, Zhihu.',
      'contact.kicker': 'About · Contact',
      'contact.title': 'Contact Us',
      'contact.desc': 'Product issues, collaboration ideas, or just to say hi — feel free to reach out through any channel below. Every message is read carefully.',
      'contact.faq1.q': 'Interested in collaboration?',
      'contact.faq1.a': 'If it\'s a meaningful project, I\'d be happy to discuss. Please email with project context and collaboration details.',
      'contact.faq2.q': 'How to report bugs or suggest features?',
      'contact.faq2.a': 'Please email directly or leave a comment on the App Store. Product-related feedback via email is preferred for follow-up.',
      'contact.faq3.q': 'Want to learn more about indie development?',
      'contact.faq3.a': 'Visit Beicheng\'s personal site for dev logs and the about page to learn about the long-term maintenance behind IdeaSnap and other products.',

      /* Page: desktop */
      'desktop.pageTitle': 'Desktop - IdeaSnap',
      'desktop.pageDesc': 'IdeaSnap desktop supports Windows, macOS, Linux. Organize meeting notes, search archives — light and dark themes for extended review sessions.',
      'desktop.kicker': 'Product · Desktop',
      'desktop.title': 'Turn ideas into lasting notes on your computer',
      'desktop.desc': 'Meeting recaps, long-form editing, search & archive — the desktop is built for deep work. Supports Windows, macOS, Linux with light and dark themes.',
      'desktop.cta.download': 'Download',
      'desktop.cta.guide': 'Install Guide',
      'desktop.caption1': 'Desktop main interface',
      'desktop.caption2': 'Light theme',
      'desktop.caption3': 'Dark theme',
      'desktop.section.title': 'What desktop is best for',
      'desktop.section.item1': 'Processing long meeting transcriptions',
      'desktop.section.item2': 'Search, tag filtering & archiving',
      'desktop.section.item3': 'Review AI summaries, verify tasks, continue editing',
      'desktop.section.item4': 'Sync with phone and watch via the same account',
      'desktop.platform.title': 'Platforms & Packages',
      'desktop.platform.windows': 'Windows: Setup Installer / Portable',
      'desktop.platform.macos': 'macOS: Apple Silicon DMG (see install guide for first launch)',
      'desktop.platform.linux': 'Linux: DEB / AppImage (arm64)',
      'desktop.link': 'View full download & install guide',

      /* Page: download */
      'download-page.pageTitle': 'Download & Install - IdeaSnap',
      'download-page.pageDesc': 'Download IdeaSnap for all platforms: iOS, Android, Windows, macOS, Linux — with installation guides for macOS, Android, Windows, and Linux.',
      'download-page.kicker': 'Resources · Download',
      'download-page.title': 'Download & Install Guide',
      'download-page.desc': 'One account for watch, phone, and computer. Current version: 1.0.18. Find download links and first-time setup instructions below.',
      'download-page.cta.packages': 'View Packages',
      'download-page.cta.guide': 'Install Guide',
      'download-page.ios.title': 'iOS / iPadOS / Watch',
      'download-page.ios.badge': 'Mobile',
      'download-page.ios.desc': 'Install from App Store. Apple Watch works with the iOS version.',
      'download-page.ios.cta': 'Go to App Store',
      'download-page.android.title': 'Android',
      'download-page.android.badge': 'Mobile',
      'download-page.android.desc': 'Official APK package.',
      'download-page.android.cta': 'Download APK',
      'download-page.windows.title': 'Windows',
      'download-page.windows.badge': 'Desktop',
      'download-page.windows.desc': 'Setup Installer & Portable versions.',
      'download-page.windows.cta.setup': 'Setup',
      'download-page.windows.cta.portable': 'Portable',
      'download-page.macos.title': 'macOS',
      'download-page.macos.badge': 'Desktop',
      'download-page.macos.desc': 'DMG (Intel / Apple Silicon universal)',
      'download-page.macos.cta': 'Download DMG',
      'download-page.linux.title': 'Linux',
      'download-page.linux.badge': 'Desktop',
      'download-page.linux.desc': 'DEB (amd64) & AppImage universal package',
      'download-page.linux.cta.deb': 'DEB',
      'download-page.linux.cta.appimage': 'AppImage',
      'download-page.guide.kicker': 'Install Guide',
      'download-page.guide.title': 'First-time Installation Safety Tips',
      'download-page.guide.desc': 'IdeaSnap is a code-signed legitimate app. Some platforms may show system protection warnings on first launch. Follow the steps below.',
      'download-page.macos.warning': 'First launch may show: "macOS cannot verify that IdeaSnap is free from malware."',
      'download-page.macos.steps': '1. Click Cancel (not "Move to Trash"); 2. Open System Settings → Privacy & Security; 3. Find the blocked message under Security; 4. Click Open Anyway and confirm; 5. Subsequent launches won\'t show this warning',
      'download-page.macos.shortcut': 'Right-click the app in Finder → Open',
      'download-page.android.warning': 'You may see: "Install blocked — unknown sources"',
      'download-page.android.steps': '1. Tap Settings in the dialog; 2. Enable "Allow from this source"; 3. Go back and tap Install',
      'download-page.android.note': 'This is a normal safety warning since the app is not distributed via Google Play.',
      'download-page.windows.steps': '1. Download Setup or Portable version; 2. If SmartScreen warns, click More Info → Run Anyway; 3. Follow the installer or run the portable version directly',
      'download-page.windows.tip': 'Portable version is ideal if you prefer not to write to system directories.',
      'download-page.linux.steps': '1. DEB: Install using your package manager; 2. AppImage: Make executable and run; 3. Current builds are amd64, compatible with Intel/AMD',
      'download-page.linux.tip': 'If your architecture isn\'t supported, please wait for future packages or contact us.',

      /* Page: help */
      'help.pageTitle': 'Help - IdeaSnap',
      'help.pageDesc': 'Frequently asked questions about IdeaSnap: installation, account & membership sync, cancellation, AI & privacy, feedback channels.',
      'help.kicker': 'Resources · Help',
      'help.title': 'Help & FAQ',
      'help.desc': 'Common questions about installation, account, membership, and privacy. Still need help? Email us at',
      'help.faq1.q': 'macOS blocked on first launch?',
      'help.faq1.a': 'Since we\'re not in Apple\'s paid developer program, the first install may show an unverified warning. Go to System Settings → Privacy & Security → Open Anyway, or right-click the app in Finder and select Open. Full steps on the Download page.',
      'help.faq2.q': 'Android "unknown sources" warning?',
      'help.faq2.a': 'This is normal since the official APK is not distributed via Google Play. Allow installation from this source as prompted.',
      'help.faq3.q': 'Will my website-purchased membership sync?',
      'help.faq3.a': 'Yes. Log in with the same IdeaSnap account and membership will sync to iPhone, iPad, Apple Watch, Android, Mac, Windows, and Linux.',
      'help.faq4.q': 'How to cancel subscription?',
      'help.faq4.a': 'Apple/Google: cancel in the respective store\'s subscription management. Website (Waffo): follow the checkout page and Terms of Service. You can usually still use the service for the current period after cancellation.',
      'help.faq5.q': 'Will AI use my content for training?',
      'help.faq5.a': 'No. Your content is not used to train third-party models or sold. AI features require explicit consent and can be disabled. See Privacy Policy.',
      'help.faq6.q': 'What about refunds?',
      'help.faq6.a': 'Per Terms of Service, refunds are generally not offered. New subscribers within quota limits may qualify for an approximately 7-day policy. Details governed by the agreement and payment channel terms.',
      'help.faq7.q': 'Where to see update logs?',
      'help.faq7.a': 'The product site doesn\'t host a blog. IdeaSnap update stories are published on Beicheng\'s dev log, such as the Editor\'s Choice feature and the 3.5 AI Summary launch.',
      'help.cta.download': 'Download & Install',
      'help.cta.contact': 'Contact Us',
      'help.cta.privacy': 'Privacy Policy',

      /* Page: integrations */
      'integrations.pageTitle': 'Integrations & AI - IdeaSnap',
      'integrations.pageDesc': 'Learn about IdeaSnap\'s Notion integration, AI capabilities (Doubao, OpenAI, Tongyi Qianwen), and privacy & consent mechanisms.',
      'integrations.kicker': 'Product · Integrations & AI',
      'integrations.title': 'Organize ideas that fit into your workflow',
      'integrations.desc': 'IdeaSnap uses AI for transcription, summarization, and task extraction — and supports Notion integration. AI features require your explicit consent and can be disabled anytime.',
      'integrations.cta.download': 'Download IdeaSnap',
      'integrations.cta.privacy': 'Privacy Policy',
      'integrations.ai.title': 'AI Organization',
      'integrations.ai.p1': 'IdeaSnap only calls third-party AI services when you actively use related features and give explicit consent. Currently may involve Doubao (ByteDance), OpenAI GPT, Tongyi Qianwen (Alibaba Cloud), and others.',
      'integrations.ai.item1': 'Requires explicit consent on first use',
      'integrations.ai.item2': 'Can be disabled in settings',
      'integrations.ai.item3': 'Content not used for ad profiling or sale',
      'integrations.ai.item4': 'Content not used to train third-party models',
      'integrations.notion.title': 'Notion Integration',
      'integrations.notion.p1': 'IdeaSnap supports Notion authorization for integration. After authorization, you\'ll return to the app to continue. If you authorized in a browser, make sure the IdeaSnap client is installed.',
      'integrations.account.title': 'Account & Sync',
      'integrations.account.item1': 'Website-purchased membership syncs across all platforms',
      'integrations.account.item2': 'Web payments processed via Waffo secure checkout',
      'integrations.account.item3': 'Cancellation and refund rules per Terms of Service',
      'integrations.tos': 'Read Terms of Service',

      /* Page: mobile */
      'mobile.pageTitle': 'Mobile - IdeaSnap',
      'mobile.pageDesc': 'IdeaSnap mobile supports iOS, iPadOS, and Android. Capture voice notes anytime, with AI auto-organizing into notes and tasks.',
      'mobile.kicker': 'Product · Mobile',
      'mobile.title': 'Speak and record — IdeaSnap in your pocket',
      'mobile.desc': 'Works on iPhone, iPad, and Android. Perfect for commuting, meetings, or bedtime — speak your thoughts first, organize later.',
      'mobile.cta.ios': 'App Store',
      'mobile.cta.android': 'Android APK',
      'mobile.caption1': 'iOS',
      'mobile.caption2': 'Android',
      'mobile.section.title': 'Mobile capabilities',
      'mobile.section.item1': 'Long-press mic for quick voice recording',
      'mobile.section.item2': 'Card browsing, tag filtering & search',
      'mobile.section.item3': 'Save images & attachments together',
      'mobile.section.item4': 'Sync with Apple Watch & desktop via same account',
      'mobile.download.title': 'Download Channels',
      'mobile.download.ios': 'iOS / iPadOS / Apple Watch: App Store',
      'mobile.download.android': 'Android: Official APK (see install guide if prompted about unknown sources)',
      'mobile.link': 'Learn how Watch works with your phone',

      /* Page: watch */
      'watch-page.pageTitle': 'Watch - IdeaSnap',
      'watch-page.pageDesc': 'IdeaSnap for Apple Watch supports wrist recording, on-wrist controls, and note cards. Capture ideas even when your phone isn\'t handy.',
      'watch-page.kicker': 'Product · Watch',
      'watch-page.title': 'Raise your wrist and record — ideas don\'t wait for your phone',
      'watch-page.desc': 'Apple Watch supports ready-to-record, in-recording controls, and note card browsing. Capture your thoughts while walking, exercising, or in meetings.',
      'watch-page.cta.install': 'Install with iOS',
      'watch-page.cta.mobile': 'Learn about Mobile',
      'watch-page.caption': 'Wrist recording, ideas never lost',
      'watch-page.section.title': 'On-wrist workflow',
      'watch-page.section.item1': 'Raise wrist to prepare recording, tap to start',
      'watch-page.section.item2': 'Pause or end recording on your wrist',
      'watch-page.section.item3': 'AI continues transcription and organization on phone or desktop',
      'watch-page.note': 'The Watch app comes with the iOS version. Install IdeaSnap on your iPhone to use it on Apple Watch.',

      /* Page: waffo success */
      'success.pageTitle': 'Payment Successful - IdeaSnap',
      'success.title': 'Payment Successful',
      'success.subtitle': 'Thank you for supporting IdeaSnap membership / Your support helps make the product even better.',
      'success.status': 'Confirming membership…',
      'success.note': 'Once the payment notification arrives, the website will automatically refresh your membership status.',
      'success.help.title': 'Membership not activated?',
      'success.help.desc': 'Go back to the website and log in with the account used for payment. The website will auto-verify. If it still doesn\'t work, contact us through the channels below — we\'ll respond within 24 hours.',
      'success.wechat': 'WeChat',
      'success.email': 'Email',
      'success.phone': 'Phone',
      'success.copied': 'Copied to clipboard',
      'success.back': '← Back to IdeaSnap',

      /* Recommended (dynamic) */
      'rec.ios.title': 'Download iOS / Apple Watch',
      'rec.ios.desc': 'Install from App Store. Works with Apple Watch.',
      'rec.ios.cta': 'Go to App Store',
      'rec.android.title': 'Download Android',
      'rec.android.desc': 'Official APK for your device.',
      'rec.android.cta': 'Download APK',
      'rec.windows.title': 'Download Windows',
      'rec.windows.desc': 'Setup Installer & Portable versions available.',
      'rec.windows.cta': 'Download Setup',
      'rec.macos.title': 'Download macOS',
      'rec.macos.desc': 'For Apple Silicon. See install guide on first launch.',
      'rec.macos.cta': 'Download DMG',
      'rec.linux.title': 'Download Linux',
      'rec.linux.desc': 'DEB & AppImage (arm64) available.',
      'rec.linux.cta': 'Download DEB',

      /* Lang switcher */
      'lang.switch': '中',
      'lang.label': '中文',
    }
  };

  var currentLang = localStorage.getItem(STORAGE_KEY) || detectLang();

  function detectLang() {
    var lang = (navigator.language || '').toLowerCase();
    if (lang.startsWith('zh')) return 'zh-CN';
    return 'en';
  }

  function t(key) {
    return translations[currentLang][key] || translations['zh-CN'][key] || key;
  }

  function applyTranslations(root) {
    root = root || document;
    /* data-i18n: text content */
    var nodes = root.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    }
    /* data-i18n-placeholder */
    nodes = root.querySelectorAll('[data-i18n-placeholder]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n-placeholder');
      if (key) el.placeholder = t(key);
    }
    /* data-i18n-title */
    nodes = root.querySelectorAll('[data-i18n-title]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n-title');
      if (key) el.title = t(key);
    }
    /* data-i18n-alt */
    nodes = root.querySelectorAll('[data-i18n-alt]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n-alt');
      if (key) el.alt = t(key);
    }
    /* data-i18n-value */
    nodes = root.querySelectorAll('[data-i18n-value]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n-value');
      if (key) el.value = t(key);
    }
    /* data-i18n-content (for meta content attributes) */
    nodes = root.querySelectorAll('[data-i18n-content]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n-content');
      if (key) el.setAttribute('content', t(key));
    }
    /* data-i18n-html: innerHTML (for elements with inline tags) */
    nodes = root.querySelectorAll('[data-i18n-html]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n-html');
      if (key) el.innerHTML = t(key);
    }
    /* Update lang switcher button */
    var btn = document.getElementById('lang-switch');
    if (btn) btn.textContent = t('lang.switch');
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
    document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en';
    /* Trigger custom event for dynamic content */
    var evt = document.createEvent('Event');
    evt.initEvent('i18nchange', true, true);
    document.dispatchEvent(evt);
  }

  function toggleLang() {
    setLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN');
  }

  /* Expose globally */
  window.i18n = {
    t: t,
    setLang: setLang,
    toggleLang: toggleLang,
    applyTranslations: applyTranslations,
    getLang: function () { return currentLang; },
    translations: translations
  };

  /* Apply on load */
  document.addEventListener('DOMContentLoaded', function () {
    setLang(currentLang);
    /* Add lang switch listener */
    var btn = document.getElementById('lang-switch');
    if (btn) btn.addEventListener('click', toggleLang);
  });
})();
