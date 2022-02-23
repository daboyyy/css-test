import axios from 'axios';

const picsumApi = {
  getImageList: async () => {
    const res = await axios.get('https://picsum.photos/v2/list');
    const { data, status } = res;

    if (status === 200) {
      return data;
    }

    return false;
  },
};

export default picsumApi;
