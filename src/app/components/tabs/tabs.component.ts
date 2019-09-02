import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs: any = [
    { title: 'EM DESTAQUE', path: '/', active: true },
    { title: 'PODCASTS', path: '/', active: false },
    { title: 'PARADAS', path: '/', active: false },
    { title: 'GENÊROS', path: '/', active: false },
    { title: 'LANÇAMENTOS', path: '/', active: false },
    { title: 'DESCOBRIR', path: '/', active: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
