import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "联系我们｜闪念", description: "通过邮箱或社交平台联系闪念开发者北城，反馈产品问题、建议或合作想法。", alternates: { canonical: "/contact" } };
export default function Page() { return <DetailPage page="contact" />; }
