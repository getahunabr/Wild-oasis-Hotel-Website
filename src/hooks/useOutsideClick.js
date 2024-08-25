import { useEffect, useRef } from "react";

const useOutsideClick = (handler, listenCapturing = true) => {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("click outside");
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler]);
  return ref;
};

export default useOutsideClick;
