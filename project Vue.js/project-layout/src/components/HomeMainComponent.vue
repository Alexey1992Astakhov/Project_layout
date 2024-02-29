<template>
    <div>
        <section class="main center">
        <div class="main__content">
          <div class="main__text">
            <h1 class="main__title">Let Your Home Be Unique</h1>
            <p class="main__desc">
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </p>
            <a href="#" class="main__button">
              <div class="main__button_text">
                Get Started
                <svg
                  width="17.151062"
                  height="16.005859"
                  viewBox="0 0 17.1511 16.0059"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1.00992 7.93823L14.7331 7.80151M9.62808 1.41431L16.1511 7.93726L9.49667 14.5918"
                    stroke="#CDA274"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
    name: 'HomeMainComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
$dm_Serif_display: "DM Serif Display", serif;
$jost: "Jost", sans-serif;
$baseColor: #292f36;
.main {
    padding-bottom: 95px;

    &__content {
        background-image: url(../assets/images/Banner_1.png);
        width: 1200px;
        height: 758px;
        background-repeat: no-repeat;
        background-size: 1200px;
        border-radius: 50px;
        padding: 200px 50px;
    }

    &__title {
        font-family: $dm_Serif_display;
        font-size: 65px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        max-width: 484px;
        color: $baseColor;
        margin-bottom: 18px;
    }

    &__desc {
        font-family: $jost;
        font-size: 22px;
        font-weight: 400;
        max-width: 434px;
        color: #4D5053;
        margin-bottom: 21px;
    }

    &__button {
        padding: 26px 48px;
        border-radius: 15px;
        display: inline-block;
        background-color: $baseColor;
        max-width: 221px;
        transition: all 0.4s;
        &:hover {
            background-color: #818181;
        }
        &:active {
            background-color: $baseColor;
        }
        &_text {
            color: #FFFFFF;
            font-family: $jost;
            font-size: 18px;
            font-weight: 600;
            display: flex;
            gap: 10px;
            align-items: center;
        }
    }
}
</style>