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
    getBookings(home) {
        return apiClient.get(`/admin/get-booking/${home}`)
    },
    deleteBooking(name, date, home) {
        return apiClient.delete('/admin/delete-booking', {
            data: {
                name,
                date,
                home
            }
        })
    },
    postBooking(name, arrival, departure, home) {
        return apiClient.post('admin/add-booking',
        {
            data: {
                name,
                home,
                reservation: {
                    arrivalDate: arrival,
                    departureDate: departure
                }
            }
        })
    }
}