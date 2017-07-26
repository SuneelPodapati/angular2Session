import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Cart } from "./cart.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDatasource{
    baseURL: string;
    auth_token: string;

    constructor(private http: Http){
        this.baseURL = `${PROTOCOL}://${location.hostname}: ${PORT}/`;
        console.log("REST Server url -> "+ this.baseURL);
    }

    private sendRequest(verb: RequestMethod, url:string, body?: Product | Order): Observable<Product[]|Order[]>{
        console.log("From Send Requst URL: " + url);
        return this.http.request(new Request({
                    method: verb,
                    url: this.baseURL+ url,
                    body: body
                })).map(response => response.json());
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, "products");
    }

    getOrders(): Observable<Order[]> {
        return this.sendRequest(RequestMethod.Get, "orders");
    }

    saveOrders(order: Order) {
        console.log(`From RESTDatasource:\n ${JSON.stringify(order)}`);
        return this.sendRequest(RequestMethod.Post, "orders",order);
    }

}