import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081'
})

export default {
    getPrices(id) {
        return apiClient.get(`/admin/prices/${id}`)
    },
    getReviews() {
        return apiClient.get('/admin/reviews')
    },
    getAvailability() {
        return apiClient.get('/availability')
    },
    postBooking() {
        return apiClient.post('/booking')
    }
}