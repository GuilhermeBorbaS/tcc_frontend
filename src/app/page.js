import Image from "next/image";
import Teste from "@/components/teste";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full">
        <Teste/>
      </div>
    </Layout>
  );
}
