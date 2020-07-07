<template>
  <div class="booking">
    <Banner />
    <div class="booking__nav-tab">
      <button class="booking__nav-tab__btn" @click="displayType = false">Create Booking</button>
      <button class="booking__nav-tab__btn" @click="displayType = true">Delete Booking</button>
    </div>
    <div class="booking__container">
      <CreateBooking :arrivalDate="arrivalDate" :departureDate="departureDate" v-if="!displayType" />
      <DeleteBooking v-if="displayType" />
      <div class="booking__calendar">
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Banner from '../components/Banner';
import CreateBooking from '../components/CreateBooking';
import DeleteBooking from '../components/DeleteBooking';

export default {
  components: {
    FullCalendar,
    Banner,
    CreateBooking,
    DeleteBooking
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: this.handleDateClick
      },
      arrivalDate: '',
      departureDate: '',
      displayType: false
    }
  },
  methods: {
    handleDateClick(info) {
      if (!this.confirmArrivalButton) {
        this.arrivalDate = info.dateStr;
      }else this.departureDate = info.dateStr;
    }
  }
}
</script>

<style>

</style>