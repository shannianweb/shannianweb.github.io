import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "手机端｜闪念 AI 语音笔记", description: "了解闪念 iPhone、iPad 与 Android 端的语音记录、卡片浏览、标签搜索与跨端同步。", alternates: { canonical: "/mobile" } };
export default function Page() { return <DetailPage page="mobile" />; }
