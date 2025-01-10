import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiLightBulb } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { toggleTheme } from "../redux/slices/themeSlice";

export const ThemeToggle = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2  "
    >
      {mode === "light" ? <HiLightBulb /> : <HiOutlineLightBulb />}
    </button>
  );
};
