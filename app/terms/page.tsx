import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "服务条款摘要｜闪念", description: "了解闪念会员权益、自动续费、取消、退款与支付渠道规则。", alternates: { canonical: "/terms" } };
export default function Page() { return <DetailPage page="terms" />; }
