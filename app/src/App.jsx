import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
