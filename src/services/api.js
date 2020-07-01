import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081'
})

export default {
    getPrices() {
        return apiClient.get('/admin/prices')
    },
    getReviews() {
        return apiClient.get('/all_reviews')
    },
    getAvailability() {
        return apiClient.get('/availability')
    },
    postBooking() {
        return apiClient.post('/booking')
    }
}