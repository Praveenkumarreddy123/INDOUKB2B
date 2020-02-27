import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Tender, SearchTenderFilter } from 'src/app/classes/tender';
import { MultiFilterTender } from 'src/app/pipes/tendermultisearch';
import * as _ from 'lodash';


@Component({
  selector: 'app-opprotunites',
  templateUrl: './opprotunites.component.html',
  styleUrls: ['./opprotunites.component.scss']
})
export class OpprotunitesComponent implements OnInit {
  public TenderList = [];
  public searchTender: any;

  public people = [];
  constructor(public service: DataserviceService, public tender: Tender, public filterObject: SearchTenderFilter) { }

  ngOnInit() {
    this.service.getTenderDetails().subscribe((datas: Tender[]) => {
      if (datas) {
        datas.forEach((data, index) => {
          data.Opportunity_Value_Max = +data.Opportunity_Value_Max;
          data.Opportunity_Value_Min = +data.Opportunity_Value_Min;
          this.TenderList.push(data);
        });
      }
    }, error => {
      console.log(error);
    });
  }

  OnSearchFilter() {
    const searchFilter: SearchTenderFilter = this.filterObject;
    const filter =  _.filter(this.TenderList, function(o) {
     return ((searchFilter.hasOwnProperty('Tender_Title') ? o.Tender_Title.includes(searchFilter.Tender_Title) : true) && (searchFilter.hasOwnProperty('Industry') ? o.Industry === searchFilter.Industry : true));
  });
  console.log(filter);
  }
  OnResetSearchFilter() {
    this.filterObject = new SearchTenderFilter();
  }
}
