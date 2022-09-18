import { useEffect, useRef } from "react";

const useTrigger = (func: () => void, dependencies: [] | undefined) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      func();
    }
  }, dependencies);
};

export default useTrigger;
