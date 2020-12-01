import axios from "axios";

export class MovementService {

    baseUrl = "https://blooming-escarpment-52354.herokuapp.com";

    create(movement){
        return axios.post(this.baseUrl+"/api/movement/", movement).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl+"/api/movement").then(res => res.data);
    }

    async update(movement){
        //console.log("IDDDDD: ", product)
        //return axios.put(this.baseUrl+"/api/product/"+product._id, product).then(res => res.data);
        const id = movement._id
        const provider = movement.provider
        const invoice = movement.invoice
        const price_unit = movement.price_unit
        const price_total = movement.price_total
        const quantity = movement.quantity
        const type_movement = movement.type_movement
        const date = movement.date

        const res = await fetch(this.baseUrl+"/api/movement/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                provider,
                invoice,
                price_unit,
                price_total,
                quantity,
                type_movement,
                date
            })
        })
            const data = await res.json();
            console.log("Editar Services: ",data)
            return data;
    }

    delete(id){
        return axios.delete(this.baseUrl+"/api/movement/"+id).then(res => res.data);
    }
}