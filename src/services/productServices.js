import axios from "axios";

export class ProductService {

    baseUrl = "https://blooming-escarpment-52354.herokuapp.com";

    create(product){
        return axios.post(this.baseUrl+"/api/product/", product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl+"/api/product").then(res => res.data);
    }

    async update(product){
        //console.log("IDDDDD: ", product)
        //return axios.put(this.baseUrl+"/api/product/"+product._id, product).then(res => res.data);
        const id = product._id
        const name = product.name
        const category = product.category
        const description = product.description
        const imgURL = ""

        const res = await fetch(this.baseUrl+"/api/product/"+id, {
            method: 'PUT',
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
            console.log("Editar Services: ",data)
            return data;
    }

    delete(id){
        return axios.delete(this.baseUrl+"/api/product/"+id).then(res => res.data);
    }
}