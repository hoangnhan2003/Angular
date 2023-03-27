import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {Iword} from '../iword';

@Component({
  selector: 'app-dictionary-page-component',
  templateUrl: './dictionary-page-component.component.html',
  styleUrls: ['./dictionary-page-component.component.css']
})
export class DictionaryPageComponentComponent implements OnInit {
  dictionaries: Iword[] = [];

  constructor(private dictionaryService: DictionaryServiceService) {
    this.dictionaries = this.dictionaryService.getALl();
  }

  ngOnInit(): void {
  }

  getInfo(text: string): any {
    this.dictionaryService.translate(text);
  }


}
