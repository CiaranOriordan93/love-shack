<template>
  <div class="del-booking">
      <div class="del-booking__name-container">
        <span class="regular-span create-booking__span">Enter the name on the booking you made</span>
        <input type="text" placeholder="Enter the name" class="del-booking__name" />
      </div>
      <div class="del-booking__date-container">
        <span class="regular-span create-booking__span">Enter the arrival date of your booking</span>
        <input type="date" class="del-booking__date" />
      </div>
      <button class="del-booking__button">Confirm delete</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bookingName: '',
            arrivalDate: '',
            confirmDelete: false
        }
    }
}
</script>

<style>

</style>