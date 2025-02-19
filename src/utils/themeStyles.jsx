export const themeStyle = {
  light: {
    bgColor: "bg-gray-100",
    textColor: "text-gray-900",
    borderColor: "border-gray-900",
    cardBgColor: "bg-white",
    cardTextColor: "text-gray-900",
    titleColor: "text-gray-900",
    outlineColor: "gray",
  },
  dark: {
    bgColor: "bg-[#121212]",
    textColor: "text-gray-100",
    borderColor: "border-gray-300",
    cardBgColor: "bg-gray-900",
    cardTextColor: "text-gray-100",
    titleColor: "text-gray-100",
    outlineColor: "cyan",
  },
};

export const getThemeStyles = (isDarkMode) => ({
  ...themeStyle[isDarkMode ? "dark" : "light"],
});
