import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skp-wortschatz',
  templateUrl: './wortschatz.component.html',
  styles: ['./wortschatz.component.css']
})
export class WortschatzComponent implements OnInit {

  private wortschartz = [
    { word : 'Montag', translation : 'segunda-feira' },
    { word : 'Dienstag', translation : 'terça-feira' },
    { word : 'Mittwoch', translation : 'quarta-feira' },
    { word : 'Donnerstag', translation : 'quinta-feira' },
    { word : 'Freitag', translation : 'sexta-feira' },
    { word : 'Samstag', translation : 'sábado' },
    { word : 'Sonntag', translation : 'domingo' },
  ];

  random;

  constructor() {  }

  ngOnInit() {
    this.setRandomWordToTranslate();
  }

  nextWord(): void {
    this.setRandomWordToTranslate();
  }
  
  private setRandomWordToTranslate(): void {
    this.random = this.wortschartz[Math.floor(Math.random() * this.wortschartz.length)];
  }
}
