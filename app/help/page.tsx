import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "帮助与常见问题｜闪念", description: "闪念快速上手、首次安装、账号会员、多端同步与 AI 隐私常见问题。", alternates: { canonical: "/help" } };
export default function Page() { return <DetailPage page="help" />; }
