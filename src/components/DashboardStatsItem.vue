<template>
    <div class="stats-item">
        <div class="stats-box">
            <div class="name">{{ item.title }}</div>
            <div class="data">
            <span v-if="showDaily" class="stats-now">{{ item.timeframes.daily.current }}hrs</span>
            <span v-else-if="showWeekly" class="stats-now">{{ item.timeframes.weekly.current }}hrs</span>
            <span v-else class="stats-now">{{ item.timeframes.monthly.current }}hrs</span>
            <span v-if="showDaily" class="stats-before">Previous Day - {{ item.timeframes.daily.previous }}hrs</span>
            <span v-else-if="showWeekly" class="stats-before">Last Week - {{ item.timeframes.weekly.previous }}hrs</span>
            <span v-else class="stats-before">Last Month - {{ item.timeframes.monthly.previous }}hrs</span>
            </div>
        </div>
        <div class="stats-background">
            <div class="icon" 
            :class="{
                'icon--orange': catWork,
                'icon--light-blue': catPlay,
                'icon--light-red': catStudy,
                'icon--green': catExercise,
                'icon--violet': catSocial,
                'icon--yellow': catSelfCare
            }">
            <img v-if="catWork" src="@/assets/img/icon-work.svg" alt="">
            <img v-else-if="catPlay" src="@/assets/img/icon-play.svg" alt="">
            <img v-else-if="catStudy" src="@/assets/img/icon-study.svg" alt="">
            <img v-else-if="catExercise" src="@/assets/img/icon-exercise.svg" alt="">
            <img v-else-if="catSocial" src="@/assets/img/icon-social.svg" alt="">
            <img v-else-if="catSelfCare" src="@/assets/img/icon-self-care.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
export default {
    name: 'DashboardStatsItem',
    props: ['showDaily', 'showWeekly', 'showMonthly', 'item'],
    setup(props) {

        const statsCategories = reactive({
            catWork: null,
            catPlay: null,
            catStudy: null,
            catExercise: null,
            catSocial: null,
            catSelfCare: null,
        });

        const detectCategory  = function() { 
            if(props.item.title === 'Work') {
                statsCategories.catWork = true;
            } else if(props.item.title === 'Play') {
                statsCategories.catPlay = true;
            } else if(props.item.title === 'Study') {
                statsCategories.catStudy = true;
            } else if(props.item.title === 'Exercise') {
                statsCategories.catExercise = true;
            } else if(props.item.title === 'Social') {
                statsCategories.catSocial = true;
            } else if(props.item.title === 'Self Care') {
                statsCategories.catSelfCare = true;
            }
        }();

        

        return { props, detectCategory, ...toRefs(statsCategories) }
    }
}
</script>

<style lang="scss" scoped>
.stats-item {
    min-height: 244px;
    width: 33.33%;
    width: calc(100% / 3);
    padding: 45px 15px 0;
    margin-bottom: 30px;
    position: relative;
    
    @media (max-width: 1200px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    .stats-box {
        display: flex;
        flex-direction: column;
        background: $dark-blue-color;
        border-radius: 15px;
        height: 100%;
        padding: 0px 31px 1px;
        justify-content: center;
        z-index: 1;
        position: relative;

        .name {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 25px;
        }

        .data {
        display: flex;
        flex-direction: column;

        .stats-now {
            color: #fff;
            font-size: 55px;
            font-weight: 300;
            margin-bottom: 8px;
        }

        .stats-before {
            color: $pale-blue-color;
            font-size: 15px;
            font-weight: 400;
        }
        }
    }

    .stats-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 65px;
        padding: 0px 15px;

        .icon {
        position: relative;
        border-radius: 15px;
        height: 100%;
        width: 100%;
        overflow: hidden;

        img {
            position: absolute;
            right: 17px;
            top: -11px;
        }

        &--orange {
            background: $orange-color;
        }
        &--light-blue {
            background: $soft-blue-color;

            img {
            top: -5px;
            right: 22px;
            }
        }
        &--light-red {
            background: $light-red-color;

            img {
            right: 17px;
            top: -7px;
            }
        }
        &--green {
            background: $lime-green-color;

            img {
            top: -2px;
            }
        }
        &--violet {
            background: $violet-color;

            img {
            top: -15px;
            right: 13px;
            }
        }
        &--yellow {
            background: $soft-orange-color;
        }
        }
    }
}
</style>