import { Component, OnInit } from '@angular/core';
import {Realm, RealmServiceService, RootObject} from '../service/realm-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-realm',
  templateUrl: './realm.component.html',
  styleUrls: ['./realm.component.css']
})
export class RealmComponent implements OnInit {

  constructor(private realmService:RealmServiceService) { }
  realms: Realm[];
  realmSubscription: Subscription;

  ngOnInit() {
   this.showRealms();
  }

  showRealms() {
    this.realmSubscription = this.realmService.getRealms().subscribe((root: RootObject) => {
      this.realms = root.realms;
    });
    console.log(this.realms);
  }
}
