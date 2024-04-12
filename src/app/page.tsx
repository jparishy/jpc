import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${mont.className} flex min-h-screen items-center justify-center p-24`}
    >
      <div className="flex flex-col items-center -m-8">
        <div className="text-6xl">JP</div>
      </div>
    </main>
  );
}
