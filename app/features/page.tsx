import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "功能总览｜闪念 AI 语音笔记", description: "了解闪念如何完成语音捕捉、AI 转写、总结、待办提取、搜索与多端整理。", alternates: { canonical: "/features" } };
export default function Page() { return <DetailPage page="features" />; }
