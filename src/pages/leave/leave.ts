import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class LeavePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavePage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'กรุณาเข้าสู่ระบบ!',
      subTitle: 'หากท่านต้องการยื่นใบลา กรุณาเข้าสู่ระบบ',
      buttons: [{
        text: "ตกลง",
        handler: data=>{
          this.navCtrl.setRoot(LoginPage);
        }
      }]
    });
    alert.present();
  }

}
