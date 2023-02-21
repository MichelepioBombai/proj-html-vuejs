console.log("vue ok", Vue);

const app = Vue.createApp({
  data() {
    return {
      // HEADER
      links: [
        {
          language: "English",
          img: "./img/masterstudy-logo.svg",
          category: "CATEGORY",
          app: [
            "Business",
            "Design",
            "Development",
            "Lifestyle",
            "Office Productivity",
          ],
          job: ["Become an instructor", "For Enterprise"],
          link: ["Home", "Pages", "Course Formats", "Courses", "Demos"],

          icons: [
            "fa-brands fa-facebook",
            "fa-brands fa-twitter",
            "fa-brands fa-instagram",
            "fa-brands fa-linkedin",
            "fa-brands fa-google-plus-g",
            "fa-brands fa-youtube",
          ],
        },
      ],
      appIcons: {
        Business: "fa-solid fa-briefcase",
        Design: "fa-solid fa-palette",
        Development: "fa-solid fa-gear",
        Lifestyle: "fa-regular fa-face-smile",
        Office_Productivity: "fa-solid fa-print",
      },
    };
  },
});

app.mount("#app");
