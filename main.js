console.log("vue ok", Vue);

const app = Vue.createApp({
  data() {
    return {
      links: [
        {
          language: "English",
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
