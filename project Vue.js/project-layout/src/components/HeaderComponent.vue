<template>
    <div>
        <header class="header center">
        <div class="header__logo">
        <img src="../assets/images/Logo_icon.png" alt="logo">
          <p class="header__logo_text">Interno</p>
        </div>

        <nav class="header__menu">
          <a href="#" class="header__menu_link">Home</a>
          <a href="#" class="header__menu_link">Project</a>
          <a href="#" class="header__menu_link">Blog</a>
        </nav>
      </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
$dm_Serif_display: "DM Serif Display", serif;
$jost: "Jost", sans-serif;
$baseColor: #292f36;
.header {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
        display: flex;
        gap: 10px;
        align-items: center;

        &_text {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 40px;
            font-weight: 400;
        }
    }

    &__menu {
        display: flex;
        justify-content: end;
        gap: 50px;
        color: rgb(41, 47, 54);
        font-family: $jost;
        font-weight: 400;
        font-size: 20px;

        &_link {
            color: rgb(41, 47, 54);
        }
    }
}
</style>