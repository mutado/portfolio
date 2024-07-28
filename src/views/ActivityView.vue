<template>
  <main class="grow flex flex-col gap-10">
    <section class="flex flex-col justify-start items-start">
      <h3 class="text-lg mb-3">
        latest tracked activity
        <small class="text-xs opacity-75">(over a year)</small>
      </h3>
      <div class="overflow-x-auto w-full pb-3">
        <table class="table-fixed w-max border-spacing-[3px] border-separate">
          <caption class="sr-only">
            Activity graph showing the last year of tracked activity.
          </caption>
          <thead>
            <tr>
              <th></th>
              <template
                v-for="(week, key) in activity"
                :key="key"
              >
                <th
                  v-if="week.month"
                  :colspan="week.span"
                  class="text-xs h-[13px] relative"
                >
                  <span class="sr-only">
                    {{ week.month }}
                  </span>
                  <span
                    :class="[week.span <= 1 ? 'right-1' : 'left-0']"
                    class="absolute top-0"
                  >
                    {{ week.monthLabel }}
                  </span>
                </th>
              </template>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(_, i) in 7"
              :key="'weekday-' + i"
              class="p-4 h-2.5"
            >
              <td class="relative w-7">
                <span class="text-xs absolute -bottom-[3px]">
                  {{ i === 1 ? 'Mon' : i === 3 ? 'Wed' : i === 5 ? 'Fri' : '' }}
                </span>
              </td>
              <template
                v-for="(week, key) in activity"
                :key="'week-' + key + '-day-' + i"
              >
                <td
                  v-if="week.days[i]"
                  :class="{
                    'animate-pulse-white': week.days[i].placeholder,
                  }"
                  :style="{
                    '--tw-bg-opacity':
                      week.days[i]?.grand_total.total_seconds / 8 / 60 / 60,
                    animationDelay: `${
                      week.days[i]?.placeholder ? week.days[i]?.delay : 0
                    }s`,
                  }"
                  class="w-3 h-3 bg-white rounded-sm text-center outline outline-1 outline-white/20"
                />
              </template>
            </tr>
          </tbody>
        </table>
        <!--        <div class="grid grid-rows-8 grid-flow-col gap-1">-->
        <!--          <div-->
        <!--            v-for="i in 8"-->
        <!--            class="text-xs leading-none flex items-center justify-end"-->
        <!--          >-->
        <!--            {{ i === 3 ? 'Mon' : i === 5 ? 'Wed' : i === 7 ? 'Fri' : '' }}-->
        <!--          </div>-->
        <!--          <div-->
        <!--            v-for="(act, index) in activity ??-->
        <!--            Array(50 * 7)-->
        <!--              .fill(0)-->
        <!--              .map((_, i) => {-->
        <!--                return {-->
        <!--                  placeholder: true,-->
        <!--                  range: {-->
        <!--                    date: moment().subtract(i, 'days').format('YYYY-MM-DD'),-->
        <!--                  },-->
        <!--                  grand_total: {-->
        <!--                    total_seconds: 0,-->
        <!--                  },-->
        <!--                }-->
        <!--              })-->
        <!--              .reverse()"-->
        <!--            :key="act.range?.date"-->
        <!--            v-tooltip="{-->
        <!--              content:-->
        <!--                moment(act.range?.date).format('MMM DD, YYYY') +-->
        <!--                ' - ' +-->
        <!--                Math.round(act.grand_total.total_seconds / 60 / 60) +-->
        <!--                ' hours',-->
        <!--              placement: 'top',-->
        <!--            }"-->
        <!--            :class="{-->
        <!--              'animate-pulse-white': act.placeholder,-->
        <!--            }"-->
        <!--            :style="{-->
        <!--              borderColor: act.today ? 'lightblue' : undefined,-->
        <!--              backgroundColor: act.placeholder-->
        <!--                ? undefined-->
        <!--                : `rgba(255,255,255,${act.grand_total.total_seconds / 8 / 60 / 60})`,-->
        <!--              animationDelay: `${act.placeholder ? Math.floor(index / 7) / 100 : 0}s`,-->
        <!--            }"-->
        <!--            class="h-4 w-4 border border-white/10 transition-colors duration-1000 text-xs"-->
        <!--          ></div>-->
        <!--        </div>-->
      </div>
      <small
        v-if="moment('2024-04-07') < moment()"
        class="text-xs opacity-75"
      >
        Activity data before
        {{ moment('2024-04-07').format('MMM DD, YYYY') }} is not available,
        approximate data is shown.
      </small>
    </section>
    <section>
      <h3 class="text-lg mb-3">
        tracked languages
        <small class="text-xs opacity-75">(over the last 7 days)</small>
      </h3>
      <transition-group
        :css="false"
        appear
        class="w-full"
        tag="ul"
        @enter="
          (el, done) => {
            animate(
              el,
              { opacity: [0, 1] },
              {
                delay: el.dataset.index * 0.05,
                duration: 0.1,
                easing: 'ease-in',
              }
            ).finished.then(() => {
              done()
            })
          }
        "
      >
        <li
          v-for="(skill, i) in skills"
          :key="skill.name"
          :data-index="i"
          class="flex items-center text-sm"
        >
          <code class="w-40 truncate">
            {{ skill.name }}
          </code>
          <div class="grow bg-black-mute rounded-full overflow-hidden">
            <div
              :style="{
                width: skill.percent + '%',
              }"
              class="h-1 bg-white"
            ></div>
          </div>
          <code class="w-16 text-end">{{ skill.percent }}%</code>
        </li>
      </transition-group>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { animate } from 'motion'
import useActivity from '@/utils/activity'
import moment from 'moment'

const { activity, skills } = useActivity()
</script>

<style scoped>
@keyframes pulse-white {
  0% {
    background-color: rgba(255, 255, 255, 0.01);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.1);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.01);
  }
}

.animate-pulse-white {
  animation: pulse-white 0.5s infinite;
}
</style>
