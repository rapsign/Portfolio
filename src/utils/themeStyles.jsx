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
    bgColor: "bg-[#121212]",
    textColor: "text-gray-100",
    borderColor: "border-gray-300",
    cardBgColor: "bg-gray-900",
    cardTextColor: "text-white",
    titleColor: "text-white",
  },
};
export const getThemeStyles = (isDarkMode) => ({
  ...themeStyle[isDarkMode ? "dark" : "light"],
});
