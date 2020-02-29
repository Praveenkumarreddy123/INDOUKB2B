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
  public TenderList_cpy = [];
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
          this.TenderList_cpy = this.TenderList;
        });
      }
    }, error => {
      console.log(error);
    });
  }

  OnSearchFilter() {
    const searchFilter: SearchTenderFilter = this.filterObject;
    this.TenderList = this.TenderList_cpy;
    console.log(searchFilter);
    const filterTender =  this.TenderList.filter((tender: Tender, index: number) => {
      return ((searchFilter.hasOwnProperty('Tender_Title') ? tender.Tender_Title.includes(searchFilter.Tender_Title) : true) && (searchFilter.hasOwnProperty('Industry') ? tender.Industry === searchFilter.Industry : true) && this.AmountFilter(tender, searchFilter) && this.filterByJoinDate(tender, searchFilter));
    });
    this.TenderList = filterTender;
  }
  OnResetSearchFilter() {
    this.filterObject = new SearchTenderFilter();
    this.TenderList = this.TenderList_cpy;
  }

  AmountFilter(tender: Tender, fliterObj: SearchTenderFilter) {
    return fliterObj.hasOwnProperty('filterByTenderValue') ?  this.AmountFormetCostomization(tender, fliterObj)  : true ;
  }
  filterByJoinDate(user: any, fliterObj: any) {
    return fliterObj.hasOwnProperty('Posted_date') ? this.DateFormetCustomization(user, fliterObj) : true ;
  }

  AmountFormetCostomization(tender: Tender, fliterObj: SearchTenderFilter) {
    switch (fliterObj.filterByTenderValue) {
      case 'below-1-lakh':
          return tender.Opportunity_Value_Max < 100000;
          break;
      case '1-lakh-to-5-lakh':
          return tender.Opportunity_Value_Max >= 100000 && tender.Opportunity_Value_Max <= 500000;
          break;
      case '10-lakh-to-1-core':
          return tender.Opportunity_Value_Max >= 1000000 && tender.Opportunity_Value_Max <= 1000000;
          break;
      case 'above-1-core':
          return tender.Opportunity_Value_Max > 1000000;
          break;
      default :
          return true;
          break;
    }
  }

  DateFormetCustomization(tender: Tender, fliterObj: SearchTenderFilter) {
    const currentDate = new Date();
    switch (fliterObj.Posted_date) {
        case 'last-24-hours':
            return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) === 1 ? true : false;
            break;
        case 'last-Week':
            return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) <= 7 ? true : false;
            break;
        case 'last-Month':
            return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) <= 31 ? true : false;
            break;
        case 'last-6-Month':
            return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) <= (31 * 6) ? true : false;
            break;
        default :
            return true;
            break;
    }
  }


  getsecoundsDiffbt(Date1, Date2) {
    const diffsec = Math.abs(Date1 - Date2);
    const diffDays = Math.ceil(diffsec / (1000 * 3600 * 24));
    return diffDays;
  }

}
