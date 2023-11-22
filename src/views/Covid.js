import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';


const Covid = () => {
    const [dataRandom, setDataRandom] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        setTimeout(async () => {
            let res = await axios.get('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
            let data = res && res.data ? res.data : [];
            if (data && data.length > 0) {
                data.map(item => {
                    item.date_of_birth = moment(item.date_of_birth).format('DD/MM/YYYY');
                })
            }
            setDataRandom(data);
            setLoading(false);
        }, 20000)


    }, [])
    return (
        <table>
            {console.log('check data', dataRandom)}
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                    <th>Phone</th>
                </tr>

            </thead>
            <tbody>
                {loading === false && dataRandom && dataRandom.length > 0 &&
                    dataRandom.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.gender}</td>
                                <td>{item.date_of_birth}</td>
                                <td>{item.phone_number}</td>
                            </tr>
                        )
                    })
                }

                {loading === true &&
                    <tr colSpan='5' style={{ 'textAlign': 'center' }}>Loading</tr>
                }

            </tbody>
        </table >
    )
}

export default Covid;