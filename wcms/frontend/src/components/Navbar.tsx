import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  menu: MenuItem[];
  siteName: string;
}

export const Navbar = ({ menu }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [siteName, setSiteName] = useState("Akvarellistuudio");

  useEffect(() => {
    const navbarEl = document.getElementById('navbar');
    if (navbarEl) {
      const data = navbarEl.getAttribute('data-menu');
      if (data) {
        setMenuItems(JSON.parse(data));
      }
      const name = navbarEl.getAttribute('data-site-name');
      console.log("DATA-SITE-NAME FROM DOM:", name); // <- Add this
    if (name) {
      setSiteName(name);
    }
    }
    
  }, [menu]);

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">{siteName}</div>
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <a key={item.url} href={item.url} className="hover:text-black">
                {item.title}
              </a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden space-y-2">
            {menuItems.map((item) => (
              <a key={item.url} href={item.url} className="block hover:text-black">
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
