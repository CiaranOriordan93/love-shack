<template>
  <div class="booking">
    <Banner />
    <div class="booking__nav-tab">
      <button class="booking__nav-tab__btn" @click="displayType = false">Create Booking</button>
      <button class="booking__nav-tab__btn" @click="displayType = true">Delete Booking</button>
    </div>
    <div class="seperator"></div>
    <div class="booking__container">
      <CreateBooking :arrivalDate="arrivalDate" :departureDate="departureDate" :refreshFn="refresh" v-if="!displayType" />
      <DeleteBooking v-if="displayType" />
      <div class="booking__calendar">
        <FullCalendar :options="calendarOptions"/>
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
import api from '../services/api';

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
        dateClick: this.handleDateClick,
        events: []
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
    },
    refresh() {
      api.getBookings().then(result => {
        this.calendarOptions.events = result.data.bookings;
      })
      .catch(error => console.log(error));
    }
  },
  created() {
      api.getBookings().then(result => {
        this.calendarOptions.events = result.data.bookings;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>