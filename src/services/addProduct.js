const API = 'https://blooming-escarpment-52354.herokuapp.com';

const addProduct = async ({name,category,description,imgURL}) => {
 
    const res = await fetch(`${API}/api/product/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            category,
            description,
            imgURL 
        })
    })
        
        const data = await res.json();
        console.log('Create Product: ',data)
        return data;
        
}

export default addProduct