import { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const useOnScreenIsLeft = (func, dependencies) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      func();
    });

    return unsubscribe;
  }, [navigation, dependencies]);
};

export default useOnScreenIsLeft;
