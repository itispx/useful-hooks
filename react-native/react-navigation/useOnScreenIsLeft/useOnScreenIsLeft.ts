import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const useOnScreenIsLeft = (func: () => void, dependencies: [] | undefined) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      func();
    });
    return unsubscribe;
  }, [navigation, dependencies]);
};

export default useOnScreenIsLeft;
