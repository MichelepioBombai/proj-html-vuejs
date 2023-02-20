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
    };
  },
});

app.mount("#app");
