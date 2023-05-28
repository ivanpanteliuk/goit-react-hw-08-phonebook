import axios from 'axios';

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const dataFromLs = JSON.parse(localStorage.getItem('persist:auth'));
      const storedToken = JSON.parse(dataFromLs.token);
      const axiosAuthorizationHeader =
        axios.defaults.headers.common.Authorization;
      if (storedToken && !axiosAuthorizationHeader) token.set(storedToken);
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      console.log(err);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
