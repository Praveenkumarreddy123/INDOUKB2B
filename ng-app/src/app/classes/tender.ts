export class Tender {
    Tender_Id: string;
    Tender_Title: string;
    Posted_User: string;
    Country: string;
    Contract_Type: string;
    Opportunity_Value_Min: number;
    Opportunity_Value_Max: number;
    Opportunity_Description: string;
    Posted_date: string;
    Closed_Date: string;
    Industry: string;
    filterObject: SearchTenderFilter;
}


export class SearchTenderFilter {
    Tender_Title: string;
    Industry: string;
    Posted_date: string;
    filterByTenderValue: string;
}
