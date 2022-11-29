

const storeUserInformation = info => {

    console.log(info)
    
   
        fetch(`https://old-car-server.vercel.app/user/info/${info.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {

             //   console.log('Data iinside useToken', data);
            })
    

    return "Store Sucessfully";
}

export default storeUserInformation;