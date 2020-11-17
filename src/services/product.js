const API = 'https://blooming-escarpment-52354.herokuapp.com';

export default async function getProducts(){
    return fetch(`${API}/api/product`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
      }).then(res => {
        return res
      })
}