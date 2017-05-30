import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skp-wortschatz',
  templateUrl: './wortschatz.component.html',
  styles: ['./wortschatz.component.css']
})
export class WortschatzComponent implements OnInit {

  private wortschartz = [
    { word : 'Montag', options : ['segunda-feira', 'terça-feira', 'quarta-feira'] },
    { word : 'Dienstag', options : ['sábado', 'terça-feira', 'quarta-feira'] },
    { word : 'Mittwoch', options : ['quarta-feira', 'terça-feira', 'sexta-feira'] },
    { word : 'Donnerstag', options : ['quinta-feira', 'sexta-feira', 'sábado'] },
    { word : 'Freitag', options : ['segunda-feira', 'sexta-feira', 'quarta-feira'] },
    { word : 'Samstag', options : ['domingo', 'terça-feira', 'sábado'] },
    { word : 'Sonntag', options : ['quinta-feira', 'domingo', 'quarta-feira'] },
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
