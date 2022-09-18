import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

const useKeyboard = (keyboardDefaultHeight = 250) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(keyboardDefaultHeight);

  async function keyboardDidShowHandler(e) {
    setKeyboardVisible(true);
    setKeyboardHeight(e.endCoordinates.height);
  }

  async function keyboardDidHideHandler(e) {
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
