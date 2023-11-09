import type { PageWrapperProps } from "@/lib/types/page-wrapper";
import { NavbarSearch } from "./navbar-search";
import { Breadcrumbs } from ".";

export function PageWrapper({ breadcrumbs, children }: PageWrapperProps) {
  return (
    <main className="flex flex-col p-6 h-screen overflow-y-scroll">
      <div className="flex items-center justify-between py-2 px-4 mb-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
        {breadcrumbs ? <Breadcrumbs items={[...breadcrumbs]} /> : null}
        <NavbarSearch />
      </div>
      {children}
    </main>
  );
}
