<template>
    <section class="blog center">
        <div class="blog__desc">
          <h3 class="blog__desc_title">Articles & News</h3>
          <p class="blog__desc_text">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div class="blog__articles">
          <div class="blog__articles_item">
            <div class="blog__articles_item-img">
              <img src="../assets/images/blog_1.png" alt="blog_1" />
            </div>
            <h4 class="blog__articles_item-title">
              Let’s Get Solution For Building Construction Work
            </h4>
            <div class="blog__articles_item-date">
              <p>26 December,2022</p>
              <a href="#"
                ><svg
                  width="7.946899"
                  height="15.379547"
                  viewBox="0 0 7.9469 15.3795"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1.00403 14.3755L6.9469 7.68977L1.00403 1.00406"
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
          <div class="blog__articles_item">
            <div class="blog__articles_item-img">
              <img src="../assets/images/blog_2.png" alt="blog_2" />
            </div>
            <h4 class="blog__articles_item-title">
              Low Cost Latest Invented Interior Designing <br />Ideas.
            </h4>
            <div class="blog__articles_item-date">
              <p>22 December,2022</p>
              <a href="#"
                ><svg
                  width="7.946899"
                  height="15.379547"
                  viewBox="0 0 7.9469 15.3795"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1.00403 14.3755L6.9469 7.68977L1.00403 1.00406"
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
          <div class="blog__articles_item">
            <div class="blog__articles_item-img">
              <img src="../assets/images/blog_3.png" alt="blog_3" />
            </div>
            <h4 class="blog__articles_item-title">
              Best For Any Office & Business Interior<br/>Solution
            </h4>
            <div class="blog__articles_item-date">
              <p>25 December,2022</p>
              <a href="#"
                ><svg
                  width="7.946899"
                  height="15.379547"
                  viewBox="0 0 7.9469 15.3795"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1.00403 14.3755L6.9469 7.68977L1.00403 1.00406"
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
    name: 'HomeArticlesComponent',

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
.blog {
    padding-top: 95px;
    &__desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &_title {
            text-align: center;
            font-size: 50px;
            font-weight: 400;
            margin-top: 12px;
            color: $baseColor;
            font-family: $dm_Serif_display;
        }
        &_text {
            text-align: center;
            font-family: $jost;
            font-size: 22px;
            font-weight: 400;
            margin-bottom: 50px;
            max-width: 801px;
        }
    }
    &__articles {
        display: flex;
        gap: 27px;
        &_item {
            border: 1px solid rgb(231, 231, 231);
            border-radius: 62px;
            padding: 21px;
            max-width: 382px;
            &-img {
                border-top-left-radius: 45px;
                border-top-right-radius: 45px;
                & img {
                    border-top-left-radius: 45px;
                    border-top-right-radius: 45px;
                    max-width: 100%;
                }
            }
            &-title {
                margin-top: 21px;
                font-family: $dm_Serif_display;
                font-size: 25px;
                font-weight: 400;
                color: $baseColor;
                max-width: 305px;
            }
            &-date {
                padding: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
            }
            & p {
                font-family: $jost;
                font-size: 16px;
                font-weight: 400;
                color: #4D5053;
            }
            & a {
                width: 52px;
                height: 52px;
                border-radius: 26px;
                background-color: #f4f0ec;
                padding: 19px 24px;
                }
                &:nth-child(2) {
                    background-color: #f4f0ec;
                    & a {
                        background-color: #fff;
                    }
            }
        }
    }
}
</style>