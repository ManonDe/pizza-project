import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PizzaService{

  date: any;
  private readonly url = "http://10.13.2.167:8080/pizza";

  constructor(public http: HttpClient){
    console.log('Hello PizzaServiceProvider Provider');
  }

  load(){
    if(this.date){
      return Promise.resolve(this.date);
    }

    return new Promise(resolve =>{
      this.http.get(this.url)
        .suscribe(date =>{
          this.data = date;
          resolve(this.date);
        });
    });
  }
}
