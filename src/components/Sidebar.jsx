import { Home, Book, Settings } from "lucide-react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-purple-900 text-white w-64 p-4 space-y-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 fixed h-full z-40`}
    >
      <h2 className="text-2xl font-bold mb-6">Menú</h2>
      <nav className="space-y-3">
        <a href="#" className="flex items-center gap-2 hover:text-purple-300">
          <Home size={20} />
          Inicio
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-purple-300">
          <Book size={20} />
          Cursos
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-purple-300">
          <Settings size={20} />
          Configuración
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
