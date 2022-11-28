

const storeUserInformation = info => {

    console.log(info)
    
   
        fetch(`http://localhost:5000/user/info/${info.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {

                console.log('Data iinside useToken', data);
            })
    

    return "Store Sucessfully";
}

export default storeUserInformation;