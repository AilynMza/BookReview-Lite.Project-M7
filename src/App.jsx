import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router";
import BooksCatalog from "./pages/BooksCatalog";
import BooksDetail from "./pages/BooksDetail";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <Routes>
        <Route path="/" element={<BooksCatalog />} />
        <Route path="games/:gameId" element={<BooksDetail />} />
      </Routes>
    </div>
  );
}

export default App;
