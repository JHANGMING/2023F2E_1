/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: '64px',
        // md: '12px',

      },
    },
    fontSize: {
      base: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      "sm": [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      "m": [
        "20px",
        {
          lineHeight: "30px",
        },
      ],
      "l": [
        "24px",
        {
          lineHeight: "36px",
        },
      ],
      "xl": [
        "32px",
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
      0.5:"4px",
      1: "8px",
      1.5: "12px",
      1.75: "14px",
      2: "16px",
      2.5: "20px",
      3: "24px",
      3.5: "28px",
      3.75:"30px",
      4: "32px",
      4.5:"36px",
      5: "40px",
      6: "48px",
      6.25:"50px",
      7: "56px",
      8: "64px",
      9:"72px",
      9.5:"76px",
      11:"88px",
      14.5:"116px",
      16.5:"132px",
      22.5:"180px",
      37.5:"300px",
      41.5:"332px"

    },
    extend: {
      colors: {
        election: {
          DEFAULT: "#F2F1DE",
          first: "#DD5E98",
          second: "#474FDE",
          third:"#5AD5E6",
          fourth:"#F2E94E",
          fifth:"#FA8334",
          sixth:"#383838"
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
    },
    screens: {
      md: "768px",
      lg: "992px",
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
        },
      });
    },
  ],
}

