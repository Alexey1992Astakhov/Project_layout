<template>
    <div>
        <footer class="footer center">
        <div class="footer__left">
          <div class="footer__left_logo">
            <img src="../assets/images/Logo_icon.png" alt="logo">
            <h5 class="footer__left_logo-text">Interno</h5>
          </div>

          <p class="">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div class="footer__left_social">
            <img src="../assets/images/twitter_icon.png" alt="twitter">
            <img src="../assets/images/in_icon.png" alt="in">
          </div>
        </div>
        <div class="footer__center">
          <h5>Pages</h5>
          <a href="#home">Home</a>
          <a href="#project">Project</a>
          <a href="#blog">Blog</a>
        </div>
        <div class="footer__right">
          <h5>Contact</h5>
          <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <a href="mailto:contact@interno.com">contact@interno.com</a>
          <a href="tel:(123) 456 - 7890">(123) 456 - 7890</a>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent',

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

.footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 95px;
    padding-bottom: 135px;
    &__left {
        display: flex;
        flex-direction: column;
        gap: 25px;
        & p {
            font-family: $jost;
            font-size: 22px;
            font-weight: 400;
            color: #4D5053;
        }
        &_logo {
            display: flex;
            gap: 10px;
            align-items: center;
            &-text {
                font-family: DM Serif Display;
                font-size: 40px;
                font-weight: 400;
                font-size: 40px;
            }
        }
        &_social {
            display: flex;
            gap: 50px;
            align-items: center;
        }
    }
    &__center {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-left: 100px;
        & h5 {
            font-family: $dm_Serif_display;
            font-size: 25px;
            font-weight: 400;
            color: $baseColor;
        }
        & a {
            font-family: $jost;
            font-size: 22px;
            font-weight: 400;
            color: #4D5053;
        }
    }
    &__right {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-left: 100px;
        & h5 {
            font-family: $dm_Serif_display;
            font-size: 25px;
            font-weight: 400;
            color: $baseColor;
        }
        & a, p {
            font-family: $jost;
            font-size: 22px;
            font-weight: 400;
            color: #4D5053;
        }
    }
}
</style>