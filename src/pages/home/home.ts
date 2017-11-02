import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from "../../providers/pizza-service/pizza-service";

@component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
})

export class homePage{
  pizzas:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public pizzaService: PizzaService){

  }

  ionViewDidLoad(){
    //Une fois qu'il a chagé la page, il exécute
    console.log('ionViewLoad PizzaPage');
    this.pizzaService.get().then(date =>{
      console.log(data);
      this.pizzas=date;
    });
  }
}

