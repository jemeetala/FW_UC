module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_51: "#eaecf0",
        black_901: "#000000",
        gray_400: "#bbbcbc",
        gray_200: "#eaebeb",
        blue_50: "#dceefd",
        white_A700: "#ffffff",
        bluegray_201: "#bac1ce",
        bluegray_50: "#ebeff3",
        bluegray_200: "#b0bbc4",
        amber_100: "#f6efab",
        gray_50: "#f9fafb",
        orange_50: "#fef2e5",
        indigo_50: "#e4e8eb",
        gray_201: "#e5e8eb",
        indigo_51: "#e5ebf9",
        bluegray_100: "#d6dae2",
        gray_51: "#f7f6fe",
        deep_orange_50: "#fbe7e8",
        green_50: "#ebf9f1",
        bluegray_300: "#9ea8ba",
        blue_500: "#1da1f2",
        blue_800: "#2c5cd0",
        gray_100: "#f5f7f9",
        light_blue_800: "#0073b1",
        black_900: "#090b0d",
        amber_500: "#feb909",
        red_900: "#a30d11",
        red_700: "#d03329",
        colors1: "#d03329ff",
        bluegray_701: "#424c5d",
        bluegray_600: "#5f6c86",
        orange_900: "#cd6200",
        red_600: "#e93c40",
        bluegray_900: "#12344d",
        blue_A400: "#1877f2",
        green_700: "#1f9254",
        bluegray_901: "#262b35",
        bluegray_700: "#39566b",
        bluegray_400: "#74839d",
        deep_orange_A700: "#c92800",
        colors: "#c92800ff",
        gray_900_d8: "#121212d8",
      },
      fontFamily: {
        sourcesanspro: "Source Sans Pro",
        inter: "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        radius4: "4px",
        radius6: "6px",
        radius8: "8px",
        radius10: "10px",
        radius18: "18px",
        radius20: "20px",
        radius25: "2.5px",
        radius50: "50%",
        radius155: "15.5px",
      },
      borderWidth: { bw083: "0.83px" },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
