import { AfterViewInit, ViewChild } from '@angular/core';
import { Content, ViewController } from 'ionic-angular';

export class BaseModal implements AfterViewInit {

  @ViewChild(Content) content: Content;

  constructor (
    protected viewCtrl: ViewController
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.resize();
    }, 10);
  }

  public close(data?: any) {
    this.viewCtrl.dismiss(data).catch((e) => console.log(e));
  }

  public resize(time: number = 10, scrollTo: boolean = false) {
    if (this.content) {
      setTimeout(() => {
        if (scrollTo) {
          this.content.scrollTo(0, 0, 100);
        }
        this.content.resize();
      }, Math.floor(time));
    }
  }
}
