import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "隐私说明｜闪念", description: "了解闪念 AI 功能的明确同意、关闭方式、第三方服务与数据保护原则。", alternates: { canonical: "/privacy" } };
export default function Page() { return <DetailPage page="privacy" />; }
