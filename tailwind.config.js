/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        md: "24px",
      },
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      s: [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      m: [
        "20px",
        {
          lineHeight: "30px",
        },
      ],
      l: [
        "24px",
        {
          lineHeight: "36px",
        },
      ],
      xl: [
        "32px",
        {
          lineHeight: "48px",
        },
      ],
      xxl: [
        "40px",
        {
          lineHeight: "48px",
        },
      ],
      "2xl": [
        "48px",
        {
          lineHeight: "72px",
        },
      ],
      "3xl": [
        "60px",
        {
          lineHeight: "90px",
        },
      ],
    },
    spacing: {
      0: "0px",
      0.5: "4px",
      1: "8px",
      1.5: "12px",
      1.75: "14px",
      2: "16px",
      2.25: "18px",
      2.5: "20px",
      2.75: "22px",
      3: "24px",
      3.25: "26px",
      3.5: "28px",
      3.75: "30px",
      4: "32px",
      4.5: "36px",
      5: "40px",
      6: "48px",
      6.25: "50px",
      7: "56px",
      8: "64px",
      9: "72px",
      9.5: "76px",
      10: "80px",
      11: "88px",
      12: "96px",
      12.25: "98px",
      12.875: "103px",
      13.75: "110px",
      14.5: "116px",
      14.75: "118px",
      15: "120px",
      16.5: "132px",
      19.75: "158px",
      22.5: "180px",
      28: "224px",
      28.75: "230px",
      30: "240px",
      37.5: "300px",
      41.5: "332px",
    },
    extend: {
      colors: {
        election: {
          DEFAULT: "#F2F1DE",
          first: "#DD5E98",
          second: "#474FDE",
          third: "#5AD5E6",
          fourth: "#F2E94E",
          fifth: "#FA8334",
          sixth: "#383838",
          red: "#F23030",
        },
      },
      fontFamily: {
        TC: ['"Noto Sans TC"', "sans-serif"],
      },
      spacing: {
        74: "296px",
      },
      boxShadow: {
        "2xl": "0px 0px 0px 1px #fff",
        "3xl": "0px 0px 0px 1px #3F5D45;",
      },
      keyframes: {
        flipcardMarquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-1116px)" },
        },
        pawSwing: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        pawSwing2: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        pawUpDown: {
          "0%, 100%": { transform: "translateY(0) rotate(6deg)" },
          "50%": { transform: "translateY(-15px) rotate(8deg)" },
        },
        pawUpDown2: {
          "0%, 100%": { transform: "translateY(0) rotate(8deg)" },
          "50%": { transform: "translateY(-5px) rotate(6deg)" },
        },
        pawUpDown3: {
          "0%, 100%": { transform: "translateY(0) rotate(4deg)" },
          "50%": { transform: "translateY(-10px) rotate(7deg)" },
        },
        pawMarquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-2439px)" },
        },
        cardFlip: {
          "0%": { transform: "rotateY(-0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        flipcardMarquee: "flipcardMarquee 30s linear infinite",
        pawSwing: "pawSwing 1.5s infinite",
        pawSwing2: "pawSwing2 1s infinite",
        pawUpDown: "pawUpDown 1s infinite",
        pawUpDown2: "pawUpDown2 0.5s infinite",
        pawUpDown3: "pawUpDown3 1s infinite",
        pawMarquee: "pawMarquee 30s linear infinite",
        cardFlip: "cardFlip 3s forwards",
        moveRight: "moveRight 10s linear",
      },
    },
    screens: {
      md: "768px",
      lg: "992px",
      xl: "1536px",
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",

          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1384px",
          },
          "@screen xl": {
            maxWidth: "1384px",
          },
        },
      });
    },
  ],
};
