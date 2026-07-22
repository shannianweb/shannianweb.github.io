import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "会员与价格｜闪念", description: "查看闪念月度、年度与终身会员方案，以及跨平台会员权益。", alternates: { canonical: "/pricing" } };
export default function Page() { return <DetailPage page="pricing" />; }
