import { useEffect } from "react";
import { BackHandler } from "react-native";

const useBackAction = (func, dependencies) => {
  useEffect(() => {
    const backAction = () => {
      func();
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, dependencies);
};

export default useBackAction;