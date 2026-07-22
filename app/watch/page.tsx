import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "Apple Watch 端｜闪念", description: "抬腕开始录音，在 Apple Watch 上暂停、结束并查看闪念笔记卡片。", alternates: { canonical: "/watch" } };
export default function Page() { return <DetailPage page="watch" />; }
