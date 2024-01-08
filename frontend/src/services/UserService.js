import axios from 'axios';

const API_BASE_URL = 'http://localhost:9080/api/reports';

class TransaksiKeuanganService {
  getTransaksiKeuangans() {
    return axios.get(API_BASE_URL);
  }

  addTransaksiKeuangan(transaction) {
    return axios.post(API_BASE_URL, transaction );
  }

  getTransaksiKeuanganById(transactionId) {
    return axios.get(API_BASE_URL + '/' + transactionId );
  }

  editTransaksiKeuangan(transaction, transactionId) {
    return axios.put(API_BASE_URL + '/' + transactionId, transaction );
  }

  deleteTransaksiKeuangan(transactionId) {
    return axios.delete(API_BASE_URL + '/' + transactionId );
  }
}

export default new TransaksiKeuanganService();
