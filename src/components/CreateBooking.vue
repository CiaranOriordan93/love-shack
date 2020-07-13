<template>
  <div class="create-booking">
      <div class="create-booking__name-container">
        <span class="regular-span create-booking__span">Enter your name</span>
        <input v-model="bookingName" type="text" class="create-booking__name" placeholder="Enter your name" />
      </div>
      <div class="create-booking__date-container">
        <span class="regular-span create-booking__span">Select your arrival date</span>
        <input v-model="arrival" type="date" class="create-booking__date" />
      </div>
      <div class="create-booking__date-container">
        <span class="regular-span create-booking__span">Select your departure date</span>
        <input v-model="departure" type="date" class="create-booking__date" />
      </div>
      <button class="create-booking__button" @click="makeBooking(bookingName, arrival, departure), confirmationMessage()">Confirm Booking</button>
      <div v-if="confirmation" class="create-booking__confirmation">
          <span class="create-booking__confirm-message">Booking successfully made!</span>
      </div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
    props: {
        arrivalDate: String,
        departureDate: String,
        refreshFn: Function
    },
    data() {
        return {
            bookingName: '',
            arrival: '',
            departure: '',
            confirmation: false
        }
    },
    watch: {
        arrivalDate: function(val) {
            this.arrival = val;
        },
        departureDate: function(val) {
            this.departure = val;
        }
    },
    methods: {
        makeBooking(name, arrival, departure) {
            api.postBooking(name, arrival, departure).then(response => {
                console.log(response);
                this.refreshFn();
            })
            .catch(error => console.log(error));
        },
        confirmationMessage() {
            this.confirmation = true;
            const self = this;
            setTimeout(function() {
                self.confirmation = false;
            }, 3000);
        }
    }
}
</script>

<style>

</style>