
import useFetch from "../customize/fetch";


const Covid = () => {

    const { data: dataRandom, isLoading, isError } = useFetch(`https://random-data-api.com/api/v2/users?size=2&is_xml=true`, true)

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
                {isError === false && isLoading === false && dataRandom && dataRandom.length > 0 &&
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

                {isLoading === true &&
                    <tr key='1' colSpan='5' style={{ 'textAlign': 'center' }}>Loading</tr>
                }
                {isError === true &&
                    <tr key='1' colSpan='5' style={{ 'textAlign': 'center' }}>Something...</tr>
                }

            </tbody>
        </table >
    )
}

export default Covid;