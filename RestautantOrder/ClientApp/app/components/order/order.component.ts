import { Component, Inject } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Component({
    selector: 'order',
    templateUrl: './order.component.html'
})
export class OrderComponent {
    public orders: Order[] = [];
    public output: string = "";


    constructor(private http: Http) {
    }

    public InsertOrder(input: string) {

        this.http.post('http://localhost:52550/api/order/' + input, null).subscribe(result => {
            this.orders.push(result.json() as Order);
            this.output = (result.json() as Order).dishies;
        }, error => console.error(error));
    }

}

interface Order {
    timeOfDay: string;
    dishies: string;
}
