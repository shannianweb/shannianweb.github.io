import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "关于闪念｜独立开发者北城", description: "了解闪念的产品起源、长期维护方式，以及专注语音捕捉与 AI 整理的产品理念。", alternates: { canonical: "/about" } };
export default function Page() { return <DetailPage page="about" />; }
