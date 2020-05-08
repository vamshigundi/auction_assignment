import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';
// var jQuery:any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    num: string = '';
    size: number = 0;
    title = 'auction application';
    collection: any = [];
    saveForm: any = {
        reservePrice: 0,
        item: {
            itemId: null,
            description: null
        }
    }

    bid: any = {
        auctionItemId: 0,
        maxAutoBidAmount:0,
        bidderName:null
    }
    constructor(private apiService: ApiService) { }
    ngOnInit() {
        this.getalldata();
    }



    
    submitForm() {
        this.apiService
            .getSave('auctionItems', this.saveForm).subscribe((data: any[]) => {
                this.getalldata();
            });
    }
    submitBid() {
        this.apiService
            .getSave('bids', this.bid).subscribe((data: any[]) => {
               alert(data);
            });
    }
    getalldata() {
        this.apiService
            .getItems('auctionItems').subscribe((data: any[]) => {
                console.log(data);
                this.collection = data;
            });
    }
    // error => () => {
    //     () => {
    //         this.size = this.collection.length;
    //     });
    // }
}