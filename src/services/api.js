import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://loveshack.herokuapp.com'
})

export default {
    getPrices(id) {
        return apiClient.get(`/admin/prices/${id}`)
    },
    getReviews() {
        return apiClient.get('/admin/reviews')
    },
    getBookings() {
        return apiClient.get('/admin/get-booking')
    },
    deleteBooking(name, date) {
        return apiClient.delete('/admin/delete-booking', {
            data: {
                name,
                date
            }
        })
    },
    postBooking(name, arrival, departure) {
        return apiClient.post('admin/add-booking',
        {
            data: {
                name,
                reservation: {
                    arrivalDate: arrival,
                    departureDate: departure
                }
            }
        })
    }
}