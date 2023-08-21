import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
