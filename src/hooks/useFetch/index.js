import {useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
              if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
              } 
              return res.json();
            })
            .then(data => {
              setLoading(false);
              setData(data);
              setErr(null);
            })
            .catch(err => {
              // auto catches network / connection error
              setLoading(false);
              setErr(err.message);
            })
          }, 1000);
    },[url])

    return { data, loading, err}
}

export default useFetch;