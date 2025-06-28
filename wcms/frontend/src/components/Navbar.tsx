import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavItem {
  title: string
  url: string
}

const fetchNavItems = async (): Promise<NavItem[]> => {
  const res = await fetch("/api/navigation")
  if (!res.ok) throw new Error("Failed to fetch nav items")
  return res.json()
}

export default function Navbar() {
  const [navItems, setNavItems] = useState<NavItem[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchNavItems().then(setNavItems).catch(console.error)
  }, [])

  return (
    <header className="bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="text-lg font-semibold">
          Home
        </a>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        <div
          className={cn(
            "flex-col md:flex md:flex-row md:space-x-6 md:static absolute top-full left-0 w-full bg-white border-t md:border-none p-4 md:p-0 transition-all duration-300 ease-in-out",
            open ? "flex" : "hidden"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className="py-2 md:py-0 hover:underline"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
