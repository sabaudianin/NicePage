import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";
import { getDefaultTheme } from "../utils/getDefaultTheme";

export const ThemeInitializer = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const defaultTheme = getDefaultTheme();
    dispatch(setTheme(defaultTheme));
    //Synchronization redux=> tailwind
    if (defaultTheme === "dark" || mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return null;
};
