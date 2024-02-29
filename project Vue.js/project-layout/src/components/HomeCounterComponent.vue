<template>
    <section class="counter">
        <div class="counter__content center">
          <div class="counter__item">
            <p class="counter__item_number">12</p>
            <p class="counter__item_text">Years&nbsp;Of&nbsp;Experiance</p>
          </div>
          <div class="counter__item">
            <p class="counter__item_number">85</p>
            <p class="counter__item_text">Success&nbsp;Project</p>
          </div>
          <div class="counter__item">
            <p class="counter__item_number">15</p>
            <p class="counter__item_text">Active&nbsp;Project</p>
          </div>
          <div class="counter__item">
            <p class="counter__item_number">95</p>
            <p class="counter__item_text">Happy&nbsp;CUstomers</p>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'HomeCounterComponent',

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
.counter {
    background-color: #f4f0ec;
    padding-top: 150px;
    padding-bottom: 150px;
    &__content {
        justify-content: center;
        display: flex;
    }
    &__item {
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        align-items: center;
        padding-left: 75px;
        padding-right: 75px; 
        border-right: 1px solid rgb(205, 162, 116);
        &:last-child {
            border: none;
        }
        &_number {
            font-family: $dm_Serif_display;
            font-size: 85px;
            font-weight: 400;
            color: #cda274;
        }
        &_text {
            font-family: $jost;
            font-size: 22px;
            font-weight: 400;
            color: #4D5053;
            text-align: center;
        }
    }
}
</style>