Vue.component("articles", {
  data() {
    return {
      filterText: "",
      articles: [
        {
          type: "Kitchen",
          title: "Let’s Get Solution for Building Construction Work",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "26 December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
        {
          type: "Bedroom",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "22 December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
        {
          type: "Building",
          title: "Best For Any Office & Business Interior Solution",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "23 December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
        {
          type: "Kitchen",
          title: "Let  ’s Get Solution for Building Construction Work",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "29 December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
        {
          type: "Bedroom",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "21 December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
        {
          type: "Architecture",
          title: "Let  ’s Get Solution for Building Construction Work",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "26 December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
        {
          type: "Kitchen Planning",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "27   December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
        {
          type: "Architecture",
          title: "Best For Any Office & Business Interior Solution",
          image: "./images/article.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          date: "26 December, 2022 ",
          breadCrumbs: "Interior / Home / Decore",
        },
      ],
      tags: [
        {
          name: "Kitchen",
          active: false,
        },
        {
          name: "Building",
          active: false,
        },
        {
          name: "Bedroom",
          active: false,
        },
        {
          name: "Architecture",
          active: false,
        },
        {
          name: "Kitchen Planning",
          active: false,
        },
      ],
    };
  },

  template: `
    <div class="articles center">
    <div class="articles__contents">
      <div v-for="(item, index) in filterArticles" :key="index" class="articles__item">
      <h2 class="articles__item_title">{{ item.title }}</h2>
      <img :src="item.image" alt="rubbish">
      <div class="articles__item_info">
          <span>{{ item.date }}</span>
          <span>{{ item.breadCrumbs }}</span>
      </div>
      <p class="articles__item_text">{{ item.text }}</p>
      <div class="articles__item_quote">
          <span class="articles__item_quote-sign">
              <svg width="72.800293" height="54.600098" viewBox="0 0 72.8003 54.6001" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>
                      Created with Pixso.
                  </desc>
                  <defs/>
                  <path id="“" d="M58.0001 -7.62939e-06C62.4001 0 66.0001 1.46667 68.8001 4.39999C71.4668 7.33334 72.8001 11.2667 72.8001 16.2C72.8001 24.8667 69.9334 32.4 64.2001 38.8C58.3334 45.2 51.3334 50.4667 43.2001 54.6L41.2001 51.2C44.5334 49.0667 47.6668 46.3333 50.6001 43C53.4001 39.6667 55.6001 36.0667 57.2001 32.2L51.6001 28C49.3334 26.5333 47.4668 24.5333 46.0001 22C44.5334 19.6 43.8001 17.2667 43.8001 15C43.8001 10.7333 45.1334 7.13333 47.8001 4.19999C50.3334 1.39999 53.7334 -7.62939e-06 58.0001 -7.62939e-06ZM16.8001 -7.62939e-06C21.2001 -7.62939e-06 24.8001 1.46666 27.6001 4.39999C30.2668 7.33333 31.6001 11.2667 31.6001 16.2C31.6001 24.8667 28.7334 32.4 23.0001 38.8C17.1334 45.2 10.1334 50.4667 2.00009 54.6L9.15527e-05 51.2C3.33343 49.0667 6.46676 46.3333 9.40009 43C12.2001 39.6666 14.4001 36.0667 16.0001 32.2L10.4001 28C8.13342 26.5333 6.26675 24.5333 4.80009 22C3.33343 19.6 2.6001 17.2667 2.6001 15C2.6001 10.7333 3.93343 7.13333 6.60009 4.19999C9.13342 1.39999 12.5334 -7.62939e-06 16.8001 -7.62939e-06Z" fill="#CDA274" fill-opacity="1.000000" fill-rule="evenodd"/>
              </svg>
          </span>
          <span class="articles__item_quote-text">{{ item.quote }}</span>
          </div>
      </div>
    </div>
    <div class="articles__tags">
      <h3 class="articles__tags_title">Tags</h3>
      <div class="articles__tags_btns">
          <button v-for="(item, index) in tags" :key="index" @click="setFilterText(item)" class="articles__tags_btns-item" :class="{'active-tag': item.active }">{{ item.name }}</button>
      </div>
        
    </div>
  </div>
      `,
  methods: {
    setFilterText(value) {
      if (value.active) {
        value.active = false;
        this.filterText = "";
      } else {
        this.tags.forEach((tag) => {
          tag.active = false;
        });
        value.active = true;
        this.filterText = value.name;
      }
    },
  },
  computed: {
    filterArticles() {
      if (this.filterText === "") return this.articles.slice();
      return this.articles
        .slice()
        .filter((item) => item.type === this.filterText);
    },
  },
});
