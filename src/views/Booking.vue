<template>
  <div class="booking">
    <Banner />
    <div class="booking__calendar">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import Banner from '../components/Banner';

export default {
  components: {
    FullCalendar,
    Banner
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth'
      }
    }
  }
}
</script>

<style>

</style>