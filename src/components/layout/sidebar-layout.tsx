/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VVMjDeDnWa6
 */
import Link from "next/link";
import {
  BookSVG,
  BoxSVG,
  GearSVG,
  PersonOutlineSVG,
  UsersSVG,
} from "@/components/svg";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      key="1"
      className="grid h-screen w-full grid-cols-[280px_1fr] overflow-hidden"
    >
      <div className="border-r bg-zinc-100/40 dark:bg-zinc-800/40">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 text-left">
            Johnson Marine
          </h1>
          <nav className="flex flex-col items-start gap-4">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
              href="/services"
            >
              <BookSVG />
              Services
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
              href="/users"
            >
              <UsersSVG />
              Users
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
              href="/parts"
            >
              <BoxSVG />
              Parts
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
              href="/settings"
            >
              <GearSVG />
              Settings
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
              href="/faq"
            >
              <BookSVG />
              Guides
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
              href="/profile"
            >
              <PersonOutlineSVG />
              Profile
            </Link>
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
