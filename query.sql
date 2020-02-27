
/* ------------------ Get  Tender Details -------------- */
 
 select 
	tender.Tender_Id,
	tender.Tender_Title,
	users.user_fname AS Posted_User, 
	country.Country_Name AS Country,
	contract_type.Contract_Type as Contract_Type,
	tender.Opportunity_Value_Min,
	tender.Opportunity_Value_Max,
	tender.Opportunity_Description,
	tender.Created_Date AS Posted_date,
	tender.Closed_Date,
	industries_category.Industries_Name as Industry
from 
tender inner join users on tender.User_id = users.id
inner join country on country.Country_Id = users.user_Country 
inner join industries_category on industries_category.Industries_Id = tender.Industries_Id
inner join contract_type on contract_type.Contract_Id = tender.Contract_Id
order by tender.Tender_Id
  
/* ------------------ Get  Tender Details -------------- */