<template>
  <div class="right-side">
    <div class="side-container">
        <DashboardStatsItem 
            v-for="item in userData" 
            :key="item.title" :item="item"
            :showDaily="childTimeframeDaily" 
            :showWeekly="childTimeframeWeekly" 
            :showMonthly="childTimeframeMonthly" 
        />
    </div>
    </div>
</template>

<script>
import jsonData from '@/assets/json/data.json';
import DashboardStatsItem from '@/components/DashboardStatsItem.vue';
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

export default {
    name: 'DashboardStats',
    components: {
        DashboardStatsItem
    },
    props: ['activeDaily', 'activeWeekly', 'activeMonthly'],
    setup(props) {
        const userData = ref(jsonData);

        const childTimeframeDaily = ref(null);
        const childTimeframeWeekly = ref(true);
        const childTimeframeMonthly = ref(null);

        watch(() => ([props.activeDaily], [props.activeWeekly], [props.activeMonthly]), () => {
         if(props.activeDaily === true) {
          childTimeframeDaily.value = true;
          childTimeframeWeekly.value = false;
          childTimeframeMonthly.value = false;
         } else if(props.activeWeekly === true) {
          childTimeframeDaily.value = false;
          childTimeframeWeekly.value = true;
          childTimeframeMonthly.value = false;
         } else if(props.activeMonthly === true) {
          childTimeframeDaily.value = false;
          childTimeframeWeekly.value = false;
          childTimeframeMonthly.value = true;
         }
        });


        return { userData, props, childTimeframeDaily, childTimeframeWeekly, childTimeframeMonthly }
    },
}
</script>

<style lang="scss" scoped>
  .right-side {
    width: 75%;
    min-width: 75%;
    padding-left: 7px;

    @media (max-width: 991px) {
        width: 100%;
        min-width: 100%;
        padding: 0;
    }

    .side-container{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
  }
</style>