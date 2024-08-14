import Image from "next/image";
import Navbar from "./Components/Navbar";

import Categories from "./Components/Categories";
import DataContext, { DashBoardContext } from "./hooks/DataContext";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="w-full">
      <DataContext>
        <Navbar />
        <Categories />
        <Toaster />
      </DataContext>
    </main>
  );
}
