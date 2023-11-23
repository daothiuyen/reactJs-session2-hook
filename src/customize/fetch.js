
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = (url) => {
    const [data, setDataRandom] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step
        try {
            async function fetchData() {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                })
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.date_of_birth = moment(item.date_of_birth).format('DD/MM/YYYY');
                    })
                }
                setDataRandom(data);
                setIsLoading(false);
                setIsError(false);
            }
            setTimeout(() => {
                fetchData();
            }, 3000)

        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message)
            } else {
                setIsError(true);
                setIsLoading(false);
            }

        }
        return () => {
            ourRequest.cancel() // <-- 3rd step
        }
    }, [url])
    return {
        data, isError, isLoading
    }

}

export default useFetch;