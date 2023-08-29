import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {


selectednavigation=0
pagetitle='home'
disabled=true
public popover$=new BehaviorSubject(false)
public dropdowncreator$=new BehaviorSubject(false)
public dropdownprofessional$=new BehaviorSubject(false)
public dropdownsettings$=new BehaviorSubject(false)
public activenavmenu=0
  currentpage: string='home';


constructor(private router:Router){}

switchnav(input:number,route:string){
  this.selectednavigation=input
  this.router.navigateByUrl(`${route}`)

}

disablepopover(){

  if(this.disabled==true)return
  this.popover$.next(false)
    this.dropdowncreator$.next(false)
  this.dropdownprofessional$.next(false)
  this.dropdownsettings$.next(false)
  console.log('pop over disabled');
  this.disabled=true

}

enablepopover(){
  this.popover$.next(true)

}

leave(){

  this.disabled=true

  // console.log('mouse left');

}

enter(){
  this.disabled=false
  // console.log('mouse enter');

}

activemenuselect(active:number){
  this.activenavmenu=active

}



acvtivepage(page:string){
  this.currentpage=page
}

selectedmenunavigationmethod(select:number){
  this.selectednavigation=select
}
}
