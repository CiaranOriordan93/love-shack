<template>
  <div class="create-booking">
      <div class="create-booking__name-container">
        <span class="regular-span create-booking__span">Enter your name</span>
        <input v-model="bookingName" type="text" class="create-booking__name" placeholder="Enter your name" />
        <span class="create-booking__date-error" v-if="nameError">Enter your name</span>
      </div>
      <div class="create-booking__date-container">
        <span class="regular-span create-booking__span">Select your arrival date</span>
        <input v-model="arrival" type="date" class="create-booking__date" />
        <span class="create-booking__date-error" v-if="arrivalError">Invalid date</span>
      </div>
      <div class="create-booking__date-container">
        <span class="regular-span create-booking__span">Select your departure date</span>
        <input v-model="departure" type="date" class="create-booking__date" />
        <span class="create-booking__date-error" v-if="departureError">Invalid date</span>
        <span class="create-booking__date-error" v-if="dateOrderError">Departure date is after arrival date!</span>
        
      </div>
      <button class="create-booking__button" @click="makeBooking(bookingName, arrival, departure, home)">Confirm Booking</button>
      <div v-if="confirmation" class="create-booking__confirmation">
          <span class="create-booking__confirm-message">Booking successfully made!</span>
      </div>
      <div v-if="error" class="create-booking__error">
          <span class="create-booking__error-message">Booking Failed!</span>
      </div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
    props: {
        refreshFn: Function,
        home: String,
        events: Array
    },
    data() {
        return {
            bookingName: '',
            arrival: '',
            departure: '',
            confirmation: false,
            error: false,
            arrivalError: false,
            departureError: false,
            dateOrderError: false,
            nameError: false
        }
    },
    watch: {
        arrival: function() {
            this.dateChecker();
        },
        departure: function() {
            this.dateChecker();
        }
    },
    methods: {
        makeBooking(name, arrival, departure, home) {
            if(!this.arrivalError && !this.departureError && this.bookingName.length > 0) {
                api.postBooking(name, arrival, departure, home).then(() => {
                    this.refreshFn();
                }).catch(() => {
                    this.errorMessage();
                })
            }else this.errorMessage();
        },
        confirmationMessage() {
            this.confirmation = true;
            const self = this;
            setTimeout(function() {
                self.confirmation = false;
            }, 3000);
        },
        errorMessage() {
            this.error = true;
            const self = this;
            setTimeout(function() {
                self.error = false;
            }, 3000)
        },
        dateChecker(){
            const a = this.beforeArrivalCheck();
            if (a === true) {
                this.arrivalError = true;
            }else this.arrivalError = false;

            const b = this.afterArrivalCheck();
            if (b === true) {
                this.departureError = true;
            }else this.departureError = false;

            const c = this.dateOrderCheck();
            if (c === true) {
                this.dateOrderError = true;
            }else this.dateOrderError = false;
            
        },
        beforeArrivalCheck() {
            const self = this;
            const arrivalChecker = this.events.filter(booking => {
                const a = parseInt(booking.start.split("-").join(""));
                const b = parseInt(self.arrival.split("-").join(""));
                return a <= b;
            });
            const departureChecker = arrivalChecker.filter(booking => {
                const a = parseInt(booking.end.split("-").join(""));
                const b = parseInt(self.arrival.split("-").join(""));
                return a > b;
            });
            return departureChecker.length > 0 ? true : false;
        },
        afterArrivalCheck() {
            const self = this;
            const arrivalDate = this.events.filter(booking => {
                const a = parseInt(booking.start.split("-").join(""));
                const b = parseInt(self.arrival.split("-").join(""));
                return a >= b
            });
            const departureDate = arrivalDate.filter(booking => {
                const a = parseInt(booking.end.split("-").join(""));
                const b = parseInt(self.departure.split("-").join(""));
                const c = parseInt(booking.start.split("-").join(""));
                return a > b && c < b;
            });
            return departureDate.length > 0 ? true : false;
        },
        dateOrderCheck() {
            const self = this;
            const a = parseInt(self.arrival.split("-").join(""));
            const b = parseInt(self.departure.split("-").join(""));
            
            return a >= b ? true : false;
        }
    }
}
</script>

<style>

</style>