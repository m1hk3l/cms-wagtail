// src/components/Header.tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

type MenuItem = {
  title: string;
  url: string;
};

type Props = {
  homeUrl: string;
  menuItems: MenuItem[];
};

export default function Header({ homeUrl, menuItems }: Props) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href={homeUrl} className="text-lg font-bold">MySite</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href={homeUrl} className="hover:text-black">Home</a>
            {menuItems.map((item) => (
              <a key={item.url} href={item.url} className="hover:text-black">
                {item.title}
              </a>
            ))}
          </nav>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open mobile menu">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       className="h-6 w-6" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="mt-4 flex flex-col space-y-4 text-base text-gray-700">
                  <a href={homeUrl} className="hover:text-black">Home</a>
                  {menuItems.map((item) => (
                    <a key={item.url} href={item.url} className="hover:text-black">
                      {item.title}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
