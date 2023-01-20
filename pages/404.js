import Link from "next/link";
import Layout from "../components/Layout";

export default function Custom404() {
    return (
      <Layout title="PAGE NOT FOUND">
        <div className="py-48 font-notosans text-center">
          <p className="text-[#FC165B] font-semibold tracking-wider mb-4">ERROR</p>
          <p className="font-bold text-4xl text-white w-[500px] mx-auto tracking-wide leading-relaxed mb-5">The page you are looking for is not on this website, please check again</p>
          <p className="font-medium text-[#ffffff9d] w-[500px] mx-auto leading-loose mb-10">The system cannot find the page you are looking for, maybe you have the wrong path or the page has been deleted.</p>
          <Link href="/" className="bg-[#ffffff2c] text-white font-semibold py-3 px-12 rounded">Back to Home</Link>
        </div>
        <div className="w-[784px] h-[784px] rounded-full bg-[#fca0162a] blur-[100px] absolute top-0 -left-64 z-10"></div>
        <div className="w-[700px] h-[700px] rounded-full bg-[#16fcd228] blur-[100px] absolute -top-40 left-72"></div>
        <div className="w-[784px] h-[784px] rounded-full bg-[#fc165b21] blur-[100px] absolute -top-56 right-48 z-10"></div>
      </Layout>
    )
  }