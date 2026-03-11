import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4 sm:p-8">
      <main className="flex flex-col items-center justify-center text-center space-y-8 max-w-3xl">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/50 flex flex-col items-center w-full max-w-lg transition-transform hover:scale-[1.02] duration-300">
          <div className="mb-8 relative w-64 h-24">
            <Image
              src="/logo.png"
              alt="My ER Abilene Logo"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-3">
            Patient Registration
          </h1>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Welcome to the new My ER Abilene patient portal.
            {"\n"}
            Fast, secure, and easy registration.
          </p>
          <div className="flex w-full">
            <Link href="/register" className="w-full">
              <Button size="lg" className="cursor-pointer w-full text-lg h-14 rounded-xl shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all">
                Begin Registration
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="absolute bottom-8 text-sm text-slate-500/80 text-center font-medium">
        © {new Date().getFullYear()} My ER Abilene, LLC. All rights reserved.
      </footer>
    </div>
  );
}
