import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbergeneratorService {
  numbers : number[] = [];
  numbers1 : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
  numberOne : number = 1;
  toggleNumberOne : boolean = false;

  numberOneButtonClickSubject = new Subject<void>();
  buttonClick$ = this.numberOneButtonClickSubject.asObservable();

  constructor(){}

  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    this.numbers.push(randomNumber);
  }

  getRandomNumbersList(){
    return this.numbers;
  }

  getReadyNumbers(){
    return this.numbers1;
  }

  getNumberOne(){
    return this.numberOne;
  }

  getNumberOneToggle(){
    return this.toggleNumberOne;
  }

  changeNumberOneToggle(){
    this.toggleNumberOne = !this.toggleNumberOne;
    this.numberOneButtonClickSubject.next();
  }
}
