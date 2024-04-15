import Image from "next/image";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <section className="h-screen flex flex-col bg-[#FFF5EC]">
      <Header />

      <main className="h-[100%] flex items-center justify-center flex-col">
        <Image
          src="/logo.png"
          width={160}
          height={160}
          alt=""
          quality={100}
          className="mb-2"
        />
        <h1 className="font-black text-dark-blue-400 text-5xl">ME&apos;OD</h1>
        <h2 className="text-2xl font-semibold uppercase text-orange-400 tracking-tight">
          Juventude
        </h2>
      </main>
    </section>
  );
}
