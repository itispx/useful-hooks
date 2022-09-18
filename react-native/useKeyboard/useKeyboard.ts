import { useState, useEffect } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

const useKeyboard = (
  keyboardDefaultHeight = 250
): { isKeyboardVisible: boolean; keyboardHeight: number } => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(keyboardDefaultHeight);

  function keyboardDidShowHandler(e: KeyboardEvent) {
    setKeyboardVisible(true);
    setKeyboardHeight(e.endCoordinates.height);
  }

  function keyboardDidHideHandler() {
    setKeyboardVisible(false);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShowHandler
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHideHandler
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return { isKeyboardVisible, keyboardHeight };
};

export default useKeyboard;
