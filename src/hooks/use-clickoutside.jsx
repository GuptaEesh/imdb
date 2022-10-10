import { useEffect } from "react";

export const useClickout = (modalRef, selectEdit) => {
  useEffect(() => {
    const outsideHandler = (e) => {
      if (!modalRef.current.contains(e.target)) selectEdit();
    };
    document.addEventListener("mousedown", outsideHandler);
    return () => {
      document.removeEventListener("mousedown", outsideHandler);
    };
  }, []);
};
