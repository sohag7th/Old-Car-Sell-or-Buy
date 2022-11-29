import { useEffect, useState } from "react"

const useStatus = user => {
    const [status, setStatus] = useState(false);
    const [statusLoading, setStatusLoading] = useState(false);
    // console.log(user)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            setStatusLoading(true);
            fetch(`https://old-car-server.vercel.app/user/status/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json()).then(data => {
                // console.log(data);
                setStatus(data.status)
                setStatusLoading(false)

            }).catch(e => {
                setStatusLoading(false);
                // console.log(e);
            })
        }
    }, [user]);
    return [status, statusLoading];
}


export default useStatus;