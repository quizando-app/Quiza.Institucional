import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export const Navbar = () => {
  const handleLoginClick = () => {
    window.location.href = "https://google.com";
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Quiza!</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={handleLoginClick}>Login</Button>
            <Button className="bg-primary hover:bg-primary/90">SignUp</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};