import logo from "@/assets/logo.svg";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="Phantom Scent Guard" className="h-10" />
        <CartDrawer />
      </div>
    </header>
  );
};
