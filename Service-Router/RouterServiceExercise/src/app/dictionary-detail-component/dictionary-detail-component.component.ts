import {Component, OnInit} from '@angular/core';
import {Iword} from '../iword';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  word: Iword;

  constructor(private dictionaryService: DictionaryServiceService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(success => {
      const text = success.get('text');
      if (text != null) {
        this.word = this.dictionaryService.getByWord(text);
      }
    }, error => {
    },
      () => {
    }
  )
    ;
  }

  ngOnInit(): void {
  }

}
