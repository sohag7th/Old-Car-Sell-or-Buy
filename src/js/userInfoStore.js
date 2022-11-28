

const userInfoStore = info => {
    const { user, status } = info;

    const userEmail = user?.email;
    const userName = user?.displayName;
    const currentUser = {
        name: userName,
        email: userEmail,
        status
    };
    if (userEmail) {
        fetch(`http://localhost:5000/user/${userEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {

                console.log('Data iinside useToken', data);
            })
    }

    return "Store Sucessfully";
}

export default userInfoStore;