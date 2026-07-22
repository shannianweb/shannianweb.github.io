import type { Metadata } from "next";
import DetailPage from "../detail-page";
export const metadata: Metadata = { title: "全平台下载与安装｜闪念", description: "下载闪念 iOS、Android、Windows、macOS 与 Linux 版本，并查看首次安装指引。", alternates: { canonical: "/download" } };
export default function Page() { return <DetailPage page="download" />; }
