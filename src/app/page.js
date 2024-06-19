"use client";
import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Total from "@/components/Total";
import ResetButton from "@/components/ResetButton";
import { useState } from "react";

export default function Home() {
  const [totalValue, setTotalValue] = useState(0);

  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-between py-20">
      <Header />
      <Total totalValue={totalValue} setTotalValue={setTotalValue} />
      <Frame setTotalValue={setTotalValue} />

      <ResetButton setTotalValue={setTotalValue} />
      <Footer />
    </div>
  );
}
