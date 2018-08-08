import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  deDetail(){
    this.navCtrl.push(DetailPage,{
      data:"รายละเอียดการลา",
      id: 2
    });
    // this.navCtrl.pop();
  }

}
