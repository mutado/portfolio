import { ref } from 'vue'
import axios from 'axios'
import moment from 'moment/moment'
import data from '@/data.json'

const activity = ref<Array<any> | null>(null)
const skills = ref<Array<any> | null>(null)
const loading = ref<boolean>(false)

function loadActivity(data: Array<any>) {
  let activity = data.map((item: any) => {
    let total_seconds = item.grand_total.total_seconds
    const dt = moment(item.range.date)
    if (dt < moment('2024-04-07')) {
      total_seconds = Math.floor(
        Math.random() * 60 * 60 * (dt.day() === 0 || dt.day() === 6 ? 2 : 8)
      )
    }
    return {
      today: dt.isSame(moment(), 'day'),
      range: item.range,
      grand_total: {
        total_seconds,
      },
    }
  })

  // If first day is not start of week, remove first week
  if (moment(activity[0].range.date).day() !== 0) {
    activity = activity.slice(7 - moment(activity[0].range.date).day())
  }

  // If last day is not end of week, add empty days to end
  if (moment(activity[activity.length - 1].range.date).day() !== 6) {
    const days = 6 - moment(activity[activity.length - 1].range.date).day()
    for (let i = 0; i < days; i++) {
      activity.push({
        today: false,
        range: {
          date: moment(activity[activity.length - 1].range.date)
            .add(1, 'day')
            .format('YYYY-MM-DD'),
        },
        grand_total: {
          total_seconds: 0,
        },
      })
    }
  }

  // group by week
  const weeks = activity.reduce((acc: any, item: any) => {
    const week =
      moment(item.range.date).weekday() === 0
        ? moment(item.range.date).format('YYYY-MM-DD')
        : moment(item.range.date).startOf('week').format('YYYY-MM-DD')
    if (!acc[week]) {
      acc[week] = {
        date: week,
        days: [],
      }
    }
    acc[week].days.push(item)
    return acc
  }, {})

  // mark month start for each week
  let lastMonth = null as string | null
  for (const week in weeks) {
    const month = moment(week).format('MMMM')
    if (!lastMonth || lastMonth !== month) {
      weeks[week].month = month
      weeks[week].monthLabel = moment(week).format('MMM')
      lastMonth = month
    }
  }

  // calculate number of weeks in each month
  let lastMonthWeeks = 0
  let lastMonthKey = null as string | null
  lastMonth = null as string | null
  for (const week in weeks) {
    if (weeks[week].month) {
      if (lastMonth && lastMonthKey && lastMonth !== weeks[week].month) {
        weeks[lastMonthKey].span = lastMonthWeeks
      }
      lastMonthWeeks = 0
      lastMonthKey = week
      lastMonth = weeks[week].month
    }
    lastMonthWeeks++
  }
  return weeks
}

export default function useActivity() {
  if (!loading.value) {
    loading.value = true
    if (!activity.value) {
      const start = moment().startOf('week')
      // activity.value = loadActivity(data.temp.data)
      activity.value = Array(52)
        .fill(0)
        .map((_, i) => {
          const dt = start.subtract(7, 'days')
          return {
            date: dt.format('YYYY-MM-DD'),
            days: Array(7)
              .fill(0)
              .map((_, j) => {
                return {
                  placeholder: true,
                  delay: (i + j) / 100,
                  today: dt.isSame(moment(), 'day'),
                  range: {
                    date: dt.format('YYYY-MM-DD'),
                  },
                  grand_total: {
                    total_seconds: 0,
                  },
                }
              }),
          }
        })
        .reverse()

      axios
        .get(
          'https://wakatime.com/share/@018ebbdd-5dc0-4271-ab88-e2ebac323edb/79c8f125-f077-4e26-9a71-2e992e1279ab.json'
        )
        .then((resp) => {
          setTimeout(() => {
            activity.value = loadActivity(resp.data.data)
          }, 3000)
        })
    }

    if (!skills.value) {
      axios
        .get(
          'https://wakatime.com/share/@018ebbdd-5dc0-4271-ab88-e2ebac323edb/31c660a1-d6f6-4597-9f55-047dd220bc64.json'
        )
        .then((resp) => {
          skills.value = resp.data.data
        })
    }
  }

  return {
    activity,
    skills,
    loading,
  }
}
