import type { Metadata } from "next";
import PlaybookPage from "../playbook-page";
export const metadata: Metadata = { title: "使用指南｜闪念 AI 语音笔记", description: "闪念使用指南：三步心智模型加上会议纪要、腕上灵感、周复盘等真实场景，每一条都能直接照做。", alternates: { canonical: "/workflow" } };
export default function Page() { return <PlaybookPage />; }
