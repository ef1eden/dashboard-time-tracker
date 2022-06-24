<template>
  <div class="dashboard">
    <div class="container">
      <DashboardTimeFrame 
        @set-time-frame="sendTimeFrame"
      />
      <DashboardStats 
        :activeDaily="atimeframeDaily" 
        :activeWeekly="atimeframeWeekly" 
        :activeMonthly="atimeframeMonthly" 
      />
    </div>
  </div>
</template>

<script>
import DashboardStats from '@/components/DashboardStats.vue'
import DashboardTimeFrame from '@/components/DashboardTimeFrame.vue'
import { ref } from '@vue/reactivity';

export default {
  name: "App",
  components: { 
    DashboardStats, DashboardTimeFrame
  },
  props: {
    
  },
  setup() {

    let atimeframeDaily = ref(null);
    let atimeframeWeekly = ref(null);
    let atimeframeMonthly = ref(null);

    function sendTimeFrame({timeframeDaily, timeframeWeekly, timeframeMonthly}) {
      console.log(timeframeDaily, timeframeWeekly, timeframeMonthly);

      atimeframeDaily.value = timeframeDaily;
      atimeframeWeekly.value = timeframeWeekly;
      atimeframeMonthly.value = timeframeMonthly;
    }

    return { sendTimeFrame, atimeframeDaily, atimeframeWeekly, atimeframeMonthly}
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
	position: relative;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-family-main;
  margin: 0;
  padding: 0;
}

#app {
  font-family: $font-family-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  position: relative;
	overflow-x: hidden;
  background: $very-dark-blue-color;
}

.dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 50px 25px;
  width: 100%;

  .container {
    max-width: 1110px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
  }
}
</style>
