import axios from "axios";

export class ProductService {

    baseUrl = "https://blooming-escarpment-52354.herokuapp.com";

    create(product){
        return axios.post(this.baseUrl+"/api/product/", product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl+"/api/product").then(res => res.data);
    }

    update(product){
        return axios.put(this.baseUrl+"/api/product/"+product._id, product).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+"/api/product/"+id).then(res => res.data);
    }
}