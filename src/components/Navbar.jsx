import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-purple-700 text-white p-4 flex items-center">
      <button onClick={toggleSidebar} className="mr-4">
        <Menu size={28} />
      </button>
      <h1 className="text-xl font-semibold">Mi Aplicación</h1>
    </nav>
  );
};

export default Navbar;
