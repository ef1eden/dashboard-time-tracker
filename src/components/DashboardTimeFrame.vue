<template>
  <div class="left-side">
    <div class="side-container">
        <div class="user-info">
        <img class="avatar" src="@/assets/img/avatar-jeremy.png" alt="Jeremy Robson">
        <div class="name">
            <span>Report for</span>
            <h2>Jeremy Robson</h2>
        </div>
        </div>
        <div class="time-period">
        <span @click="sendTimeFrame" :class="{ active: timeframeDaily }">Daily</span>
        <span @click="sendTimeFrame" :class="{ active: timeframeWeekly }">Weekly</span>
        <span @click="sendTimeFrame" :class="{ active: timeframeMonthly }">Monthly</span>
        </div>
    </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name: "DashboardTimeFrame",
    setup(props, {emit}) {

        const timeframeDaily = ref(null);
        const timeframeWeekly = ref(true);
        const timeframeMonthly = ref(null);

        function sendTimeFrame(e) {
            if(e.target.innerHTML == 'Daily') {
                timeframeDaily.value = true;
                timeframeWeekly.value = false;
                timeframeMonthly.value = false;
            } else if(e.target.innerHTML == 'Weekly') {
                timeframeDaily.value = false;
                timeframeWeekly.value = true;
                timeframeMonthly.value = false;
            } else if(e.target.innerHTML == 'Monthly') {
                timeframeDaily.value = false;
                timeframeWeekly.value = false;
                timeframeMonthly.value = true;
            }

            emit('set-time-frame', {
                timeframeDaily: timeframeDaily.value, 
                timeframeWeekly: timeframeWeekly.value,
                timeframeMonthly: timeframeMonthly.value,
            });
        }

        return { sendTimeFrame, timeframeDaily, timeframeWeekly, timeframeMonthly }
    }
}
</script>

<style lang="scss" scoped>
.left-side {
    width: 25%;
    min-width: 25%;

    @media (max-width: 991px) {
        width: 100%;
        min-width: 100%;
    }

    .side-container {
      background: $dark-blue-color;
      border-radius: 15px;
      margin-right: 22px;

      @media (max-width: 991px) {
        margin: 0 0 30px;
      }

      .user-info {
        background: $blue-color;
        border-radius: 15px;
        min-height: 354px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 31px 45px;

        @media (max-width: 991px) {
            flex-direction: initial;
            padding: 0 15px 10px;
            min-height: 195px;
            align-items: center;
        }

        .avatar {
          max-width: 84px;
          max-height: 84px;
          border-radius: 50%;
          border: 3px solid #fff;
          margin-bottom: 39px;

          @media (max-width: 991px) {
            margin: 0 25px 0 0;
          }
        }

        .name {
            @media (max-width: 991px) {
                margin-top: 8px;
            }
          span {
            color: $pale-blue-color;
            font-size: 15px;
            font-weight: 400;
            display: block;
            margin-bottom: 2px;
          }

          h2 {
            color: #fff;
            font-weight: 300;
            font-size: 40px;
            margin: 0;
          }
        }
      }

      .time-period {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 31px 7px;
        min-height: 164px;

        @media (max-width: 991px) {
            flex-direction: initial;
            justify-content: space-around;
            align-items: center;
            padding: 0 25px 0px;
            min-height: 80px;
        }

        span {
          cursor: pointer;
          display: inline-block;
          font-size: 18px;
          line-height: 43px;
          font-weight: 400;
          color: $desaturated-blue-color;
          transition: all .2s ease;

          &.active {
            color: #fff;
            pointer-events: none;
          }

          &:hover {
            color: #fff;
          }
        }
      }
    }     
  }
</style>