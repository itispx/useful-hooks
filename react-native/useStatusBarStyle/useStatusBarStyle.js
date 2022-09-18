import { useEffect } from "react";
import { StatusBar } from "react-native";

/**
 *
 * @param {"light-content" | "dark-content" | "default"} style
 * @param {"light-content" | "dark-content" | "default"} cleanup
 */

const useStatusBarStyle = (style, cleanup) => {
  useEffect(() => {
    StatusBar.setBarStyle(style);

    return () => cleanup && StatusBar.setBarStyle(cleanup);
  }, []);
};

export default useStatusBarStyle;
