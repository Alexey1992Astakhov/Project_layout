<template>
    <section class="project center">
      <div class="project__top">
        <h2 class="project__top_title">Follow Our Projects</h2>
        <p class="project__top_text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div class="project__cards">
        <div
          class="project__item"
            v-for="(project, index) in projectList"
          :key="index.id"
        >
          <img
            :src="project.image"
            :alt="img"
            :class="project.class"
          />
          <div class="project__item_desc">
            <div class="project__item_desc-text">
              <h2 class="project__item_desc-title">{{ project.title }}</h2>
              <p class="project__item_desc-subtitle">{{ project.text }}</p>
            </div>
            <a href="#" class="project__item_desc-btn">
              <svg
                width="10.004051"
                height="20.008301"
                viewBox="0 0 10.0041 20.0083"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M1.00405 19.0042L9.00405 10.0042L1.00405 1.00415"
                  stroke="#292F36"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "HomeProjectComponent",

  data() {
    return {
      projectList: [
        {
          id: 0,
          image: "../images/project_img_1.png",
          class: "btrr",
          title: "Modern Kitchen",
          text: "Decor / Architecture",
        },
        {
          id: 1,
          image: "../images/project_img_2.png",
          class: "btlr",
          title: "Modern Kitchen",
          text: "Decor / Architecture",
        },
        {
          id: 2,
          image: "../images/project_img_3.png",
          class: "bbrr",
          title: "Modern Kitchen",
          text: "Decor / Architecture",
        },
        {
          id: 3,
          image: "../images/project_img_4.png",
          class: "bblr",
          title: "Modern Kitchen",
          text: "Decor / Architecture",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
$dm_Serif_display: "DM Serif Display", serif;
$jost: "Jost", sans-serif;
$baseColor: #292f36;
.project {
  padding-bottom: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__top {
    padding-bottom: 95px;
    &_title {
      font-family: $dm_Serif_display;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 2%;
      text-align: center;
      color: $baseColor;
    }
    &_text {
      font-family: $jost;
      color: $baseColor;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      text-align: center;
      max-width: 737px;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 100px;
    row-gap: 50px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 28px;
    &_img {
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &_desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-title {
        font-family: $dm_Serif_display;
        font-size: 25px;
        font-weight: 400;
        color: $baseColor;
      }
      &-subtitle {
        font-family: $jost;
        font-size: 22px;
        font-weight: 400;
        color: $baseColor;
      }
      &-btn {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #f4f0ec;
        padding: 26px 30px;
      }
    }
  }
}
</style>
