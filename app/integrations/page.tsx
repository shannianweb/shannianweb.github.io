import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "联动与 AI｜闪念", description: "了解闪念的 AI 转写、总结、待办提取、Notion 联动以及隐私控制。", alternates: { canonical: "/integrations" } };
export default function Page() { return <DetailPage page="integrations" />; }
