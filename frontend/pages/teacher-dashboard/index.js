import ECommerce from "../../components/Dashboard/E-commerce";
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";

export const metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

export default function Home() {
  return (
    <PageTemplate>
      <ECommerce />
    </PageTemplate>
  );
}
