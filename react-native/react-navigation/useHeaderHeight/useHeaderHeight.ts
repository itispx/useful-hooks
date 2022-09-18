import { getDefaultHeaderHeight } from "@react-navigation/elements";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const useHeaderHeight = (): number => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const height = getDefaultHeaderHeight(frame, false, insets.top);

  return height;
};

export default useHeaderHeight;
