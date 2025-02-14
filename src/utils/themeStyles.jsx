export const themeStyle = {
  light: {
    bgColor: "bg-gray-100",
    textColor: "text-primary",
    borderColor: "border-primary",
    cardBgColor: "bg-white",
    cardTextColor: "text-primary",
    titleColor: "text-primary",
  },
  dark: {
    bgColor: "bg-[#0e1b31]",
    textColor: "text-gray-100",
    borderColor: "border-gray-300",
    cardBgColor: "bg-[#081c3d]",
    cardTextColor: "text-white",
    titleColor: "text-white",
  },
};
export const getThemeStyles = (isDarkMode) => ({
  ...themeStyle[isDarkMode ? "dark" : "light"],
});
