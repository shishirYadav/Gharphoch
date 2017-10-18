import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CategoryPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  fruitsVegetablesRoot = 'FruitsVegetablesPage'
  groceriesStaplesSpicesRoot = 'GroceriesStaplesSpicesPage'
  dairyBakeryBeveragesRoot = 'DairyBakeryBeveragesPage'
  snacksSpreadsPacksRoot = 'SnacksSpreadsPacksPage'
  householdNeedsRoot = 'HouseholdNeedsPage'
  personalCareBabyCareRoot = 'PersonalCareBabyCarePage'
  currState:any;
  cat:any;

  constructor(public navCtrl: NavController) {
    this.currState=0;
    
  }

  
  onTabUpdate(event){
        let newIndexAfterUpdate = event.activeIndex;
        this.currState = String(newIndexAfterUpdate);
 }

}
