import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "桌面端｜闪念 AI 语音笔记", description: "在 Windows、macOS 与 Linux 上整理长笔记、搜索标签、核对待办，并使用亮暗色界面。", alternates: { canonical: "/desktop" } };
export default function Page() { return <DetailPage page="desktop" />; }
