import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect } from "react";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme,"I am theme")
  useEffect(() => {
    setTheme("dark")
  },[setTheme])
  return (
    <DarkModeSwitch
      className="ml-4 text-gray-700"
      checked={theme === "dark"}
      sunColor="#9ca3af"
      moonColor="#d1d5db"
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      size={20}
    />
  );
};

export default Toggle;
