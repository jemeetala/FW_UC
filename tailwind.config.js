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
        gray_51: "#f7f6fe",
        deep_orange_50: "#fbe7e8",
        bluegray_50: "#ebeff3",
        red_700: "#d03329",
        red_600: "#e93c40",
        blue_A400: "#1877f2",
        red_900: "#a30d11",
        green_700: "#1f9254",
        gray_50: "#f9fafb",
        light_blue_800: "#0073b1",
        black_900: "#090b0d",
        black_901: "#000000",
        gray_400: "#bbbcbc",
        blue_800: "#2c5cd0",
        amber_500: "#feb909",
        indigo_50: "#e4e8eb",
        blue_500: "#1da1f2",
        orange_900: "#cd6200",
        indigo_51: "#e5ebf9",
        bluegray_100: "#d6dae2",
        amber_100: "#f6efab",
        gray_200: "#e5e8eb",
        green_50: "#ebf9f1",
        gray_201: "#eaebeb",
        blue_50: "#dceefd",
        gray_100: "#f5f7f9",
        bluegray_900: "#12344d",
        bluegray_701: "#39566b",
        bluegray_700: "#424c5d",
        gray_900_d8: "#121212d8",
        orange_50: "#fef2e5",
        bluegray_600: "#5f6c86",
        bluegray_400: "#74839d",
        bluegray_201: "#b0bbc4",
        bluegray_300: "#9ea8ba",
        bluegray_200: "#bac1ce",
        white_A700: "#ffffff",
        bluegray_901: "#262b35",
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
