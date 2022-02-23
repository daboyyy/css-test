import { useEffect, useState } from 'react';
// api
import picsumApi from './api';
// styles
import styles from './App.module.css';

function App() {
  const [imageList, setImageList] = useState(null);

  const fetchData = async () => {
    const data = await picsumApi.getImageList();
    setImageList(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (imageList !== null) {
    return (
      <div className={styles.app}>
        <p className={styles.title}>
          Everyone's photos
          <span className={styles.viewAll}>View all 2,724,700</span>
        </p>
        <ul>
          {imageList.map((data) => (
            <li key={data.id}>
              <img alt={data.author} height="150px" src={data.download_url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default App;
