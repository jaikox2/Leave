import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  dataPage:any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataPage = this.navParams.get('data');
    this.id = this.navParams.get('id');

    console.log("data: "+this.dataPage);
    console.log("id: "+this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  back(){
    this.navCtrl.pop();
  }

 

}
