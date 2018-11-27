import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  chartData = [];
  products: {
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  }[] = [];
  dataReady: boolean;

  constructor(private http: HttpClient) {
  }


  getObservableForChart() {
    return this.http.get<any[]>('https://my-json-server.typicode.com/tamasPetki/springTab_fakeJSONserver/orders');
  }

  retrieveDataForChart() {
    this.getObservableForChart().subscribe((data) => this.chartData = data, (error) => console.log(error), () => {
      console.dir(this.chartData);
      this.dataReady = true;
    });
  }

  getObservableForTable() {
    return this.http.get<{
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number
    }[]>('https://my-json-server.typicode.com/tamasPetki/springTab_fakeJSONserver/products');
  }

  retrieveDataForTable() {
    this.getObservableForTable().subscribe((data) => this.products = data, (error) => console.log(error), () => {
      console.log('PRODUCTS:');
      console.dir(this.products);
      this.dataReady = true;
    });
  }


}
