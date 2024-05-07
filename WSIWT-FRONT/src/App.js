import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import { PlaceContextProvider } from "./context/PlaceContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <PlaceContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
        </PlaceContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
