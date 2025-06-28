
const Header = () => {
  return (
    <header className="bg-white p-4 border-b border-gray-200">
      <nav className="flex space-x-4">
        {/* These links can be hydrated or enhanced */}
        <a href="/">Home</a>
        {/* Optionally: React fetch to get nav items from an API */}
      </nav>
    </header>
  );
};

export default Header;