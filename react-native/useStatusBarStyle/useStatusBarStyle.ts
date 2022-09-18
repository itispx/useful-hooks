import { useEffect } from "react";
import { StatusBar } from "react-native";

const useStatusBarStyle = (
  style: "light-content" | "dark-content" | "default",
  cleanup: "light-content" | "dark-content" | "default"
) => {
  useEffect(() => {
    StatusBar.setBarStyle(style);

    return () => cleanup && StatusBar.setBarStyle(cleanup);
  }, []);
};

export default useStatusBarStyle;
