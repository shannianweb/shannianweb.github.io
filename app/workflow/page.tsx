import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "使用方法｜闪念 AI 语音笔记", description: "从手表与手机捕捉，到 AI 整理，再到桌面编辑与归档的完整闪念工作流。", alternates: { canonical: "/workflow" } };
export default function Page() { return <DetailPage page="workflow" />; }
