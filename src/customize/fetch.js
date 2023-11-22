
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = () => {
    const [data, setDataRandom] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
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
            fetchData();
        } catch (error) {
            console.log('dsd');
            setIsError(true);
            setIsLoading(false);
        }
    }, [])
    return {
        data, isError, isLoading
    }

}

export default useFetch;