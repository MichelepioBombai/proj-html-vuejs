console.log("vue ok", Vue);

const app = Vue.createApp({
  data() {
    return {
      // HEADER

      jobs: ["Become an instructor", "For Enterprise"],

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

      // FOOTER
      itemsAbout: [
        {
          title: "ABOUT",
          text: "Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel, rutrum eu ipsum, Mauris accumsan eros eget libero posuere vulputate.",
        },
      ],
      itemsContact: [
        {
          title: "CONTACT",
          address: "USA, California 20, First Avenue, California",
          phone: "+1 212 458 300 32",
          fax: "+1 212 375 24 14",
          email: "info@masterstudy.com",
        },
      ],

      img: "./img/Top-udemy-courses-90-percent-off.jpg",
      img2: "./img/footer-logo2x-50x56.png",

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
