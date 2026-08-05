function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          LeadDesk Mini
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;