

const imageUpload = imageUrl => {

    const formData = new FormData();
        formData.append('image', imageUrl);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagestorageKey}`;

        return fetch(url, {
            method: 'POST',
            body: formData
        })

}

export default imageUpload;