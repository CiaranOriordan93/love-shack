<template>
  <div class="booking">
    <Banner />
    <div class="booking__nav-tab">
      <form class="booking__form" @submit.prevent>
        <label for="booking__form__homes">
          <select id="booking__form__homes" class="booking__form__select" v-model="selectedHome">
            <option
              v-for="(home, index) in homes"
              :key="index">
              {{ home }}
            </option>
          </select>
        </label>
      </form>
      <button class="booking__nav-tab__btn" @click="displayType = false">Create Booking</button>
      <button class="booking__nav-tab__btn" @click="displayType = true">Delete Booking</button>
    </div>
    <div class="seperator"></div>
    <div class="booking__container">
      <CreateBooking :arrivalDate="arrivalDate" :departureDate="departureDate" :home="selectedHome" :refreshFn="refresh" v-if="!displayType" :events="calendarOptions.events" />
      <DeleteBooking v-if="displayType" :refreshFn="refresh" :home="selectedHome" />
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
        events: []
      },
      arrivalDate: '',
      departureDate: '',
      displayType: false,
      selectedHome: 'Drumboy',
      homes: ['Drumboy', 'Foxfield', 'Cloone', 'Annaduff', 'Aughnashelin']
    }
  },
  watch: {
    selectedHome: function() {
      this.refresh();
    }
  },
  methods: {
    refresh() {
      api.getBookings(this.selectedHome).then(result => {
        this.calendarOptions.events = result.data.bookings;
      })
    }
  },
  created() {
      api.getBookings(this.selectedHome).then(result => {
        this.calendarOptions.events = result.data.bookings;
      })
  }
}
</script>

<style>

</style>