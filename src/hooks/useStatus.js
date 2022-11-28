import { useEffect, useState } from "react"

const useStatus = user => {
    const [status, setStatu] = useState(false);
    const [statusLoading, setStatusLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/user/status/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>  res.json())
            .then(data => {
                // console.log(data);
                setStatu(data.status)
                setStatusLoading(false)
            })
        }
    }, [user]);
    return [status, statusLoading];
}


export default useStatus;