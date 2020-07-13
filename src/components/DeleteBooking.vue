<template>
  <div class="del-booking">
      <div class="del-booking__name-container">
        <span class="regular-span create-booking__span">Enter the name on the booking you made</span>
        <input v-model="bookingName" type="text" placeholder="Enter the name" class="del-booking__name" />
      </div>
      <div class="del-booking__date-container">
        <span class="regular-span create-booking__span">Enter the arrival date of your booking</span>
        <input v-model="arrivalDate" type="date" class="del-booking__date" />
      </div>
      <div></div>
      <button class="del-booking__button" @click="deleteBooking">Confirm delete</button>
  </div>
</template>

<script>
import api from '../services/api';

export default {
    data() {
        return {
            bookingName: '',
            arrivalDate: ''
        }
    },
    methods: {
      deleteBooking() {
        api.deleteBooking(this.bookingName, this.arrivalDate);
      }
    }
}
</script>

<style>
</style>