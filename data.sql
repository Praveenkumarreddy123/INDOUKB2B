/*Tender Insert*/

CREATE TABLE `tender` (
	`Tender_Id` INT(11) NOT NULL AUTO_INCREMENT,
	`Tender_Title` VARCHAR(50) NOT NULL,
	`User_id` INT(11) NOT NULL,
	`Contract_Id` INT(11) NOT NULL,
	`Industries_Id` INT(11) NOT NULL,
	`Country_Id` INT(11) NOT NULL,
	`Currency_id` INT(11) NOT NULL,
	`Opportunity_Value_Min` INT(11) NOT NULL,
	`Opportunity_Value_Max` INT(11) NOT NULL,
	`Opportunity_Description` VARCHAR(100) NOT NULL,
	`Tender_Doc_location` VARCHAR(50) NULL DEFAULT NULL,
	`Created_Date` DATETIME NOT NULL,
	`Closed_Date` DATETIME NOT NULL,
	`Is_Deleted` INT(11) NOT NULL DEFAULT '0',
	PRIMARY KEY (`Tender_Id`),
	INDEX `User_id` (`User_id`),
	INDEX `Contract_Id` (`Contract_Id`),
	INDEX `Industries_Id` (`Industries_Id`),
	INDEX `Currency_Id` (`Country_Id`),
	INDEX `CurrencyId` (`Currency_id`),
	CONSTRAINT `Contract_Id` FOREIGN KEY (`Contract_Id`) REFERENCES `contract_type` (`Contract_Id`),
	CONSTRAINT `Country_Id` FOREIGN KEY (`Country_Id`) REFERENCES `country` (`Country_Id`),
	CONSTRAINT `CurrencyId` FOREIGN KEY (`Currency_id`) REFERENCES `currency` (`Currency_id`),
	CONSTRAINT `Industries_Id` FOREIGN KEY (`Industries_Id`) REFERENCES `industries_category` (`Industries_Id`),
	CONSTRAINT `User_id` FOREIGN KEY (`User_id`) REFERENCES `users` (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
 
INSERT INTO tender
( 
Tender_Title,
User_id,
Contract_Id,
Industries_Id,
Country_Id,
Currency_id,
Opportunity_Value_Min,
Opportunity_Value_Max,
Opportunity_Description,
Tender_Doc_location,
Created_Date,
Closed_Date,
Is_Deleted
)
VALUES
( 
'JVKM CONNECTS SINGAPORE',
15,
1,
1,
1,
1,
45000,
55000,
'Connect JVKM, Singapore to all your Known Business Community to connect them to establish Singapore Off-shore companies, Invest in Singapore and to optimize their Global Reach through Singapore. ',
'null',
NOW(),
NOW(),
0
),
( 
'LEADERSHIP RETREAT (Residential)',
14,
4,
1,
1,
1,
200000,
45000,
'Connect JVKM, Singapore to all your Known Business Community to connect them to establish Singapore Off-shore companies, Invest in Singapore and to optimize their Global Reach through Singapore. ',
'null',
NOW(),
NOW(),
0
);




/*contract_type*/
CREATE TABLE `contract_type` (`Contract_Id` INT(11) NOT NULL AUTO_INCREMENT,
	`Contract_Type` VARCHAR(50) NOT NULL DEFAULT '0',
	`Created_Date` DATETIME NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (`Contract_Id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

-- Insert rows into table 'TableName'
INSERT INTO contract_type
(  
 Contract_Type, Created_Date
)
VALUES 
(  
 'Project Based', NOW()
),
(  
 'Timeline & Material', NOW()
),
(  
 'Training Services', NOW()
),
(  
 'Consultancy Services', NOW()
),
(  
 'Agri Products/Commodities', NOW()
),
(  
 'Other Services', NOW()
)
/*contract_type*/
/*country*/
CREATE TABLE `country` (
	`Country_Id` INT(11) NOT NULL AUTO_INCREMENT,
	`Country_Name` VARCHAR(50) NOT NULL,
	`Country_code` VARCHAR(50) NOT NULL,
	`Created_Date` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`Country_Id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

INSERT INTO country
(  
 Country_Name, Country_code, Created_Date
)
VALUES
(  
 'INDIA','IND', NOW()
) 
/*country*/
/**/
CREATE TABLE `currency` (
	`Currency_id` INT(11) NOT NULL AUTO_INCREMENT,
	`Currency_name` VARCHAR(50) NOT NULL,
	`Created_Date` DATETIME NOT NULL,
	PRIMARY KEY (`Currency_id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;


INSERT INTO currency
(  
 Currency_name, Created_Date
)
VALUES
(  
 'INR',NOW()
),
(  
 'USD',NOW()
),
(  
 'EUR',NOW()
)


/**/



/**/
CREATE TABLE `industries_category` (
	`Industries_Id` INT(11) NOT NULL AUTO_INCREMENT,
	`Industries_Name` VARCHAR(50) NOT NULL,
	`Created_Date` DATETIME NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (`Industries_Id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;


INSERT INTO industries_category
(  
 Industries_Name, Created_Date
)
VALUES
(  
 'Accounting/Auditing/Taxation',NOW()
),
(  
 'Admin/Human Resources',NOW()
),
(  
 'Arts/Media/Communications',NOW()
),
(  
 'Industries &amp; Suppliers',NOW()
),
(  
 'Real Estate',NOW()
),
(  
 'Computer/Information Technology',NOW()
),
(  
 'Education/Training',NOW()
),
(  
 'Electronics/Electricals',NOW()
),
(  
 'Events/Promotions',NOW()
),
(  
 'Garments',NOW()
),
(  
 'Logistic/Supply chain',NOW()
),
(  
 'Healthcare/Pharmaceutical',NOW()
),
(  
 'Hotel/Restaurant',NOW()
),
(  
 'Manufacturing',NOW()
),
(  
 'Sales/Marketing',NOW()
),
(  
 'Agri Prodcuts/Commodities',NOW()
),
(  
 'Others Services',NOW()
)


/**/
CREATE TABLE `bid_tender` (
	`Bid_Id` INT(11) NOT NULL AUTO_INCREMENT,
	`Tender_Id` INT(11) NOT NULL,
	`User_Id` INT(11) NOT NULL,
	`Created_Date` DATETIME NOT NULL,
	`Is_Deleted` INT(11) NOT NULL DEFAULT '0',
	PRIMARY KEY (`Bid_Id`),
	FOREIGN KEY (`Tender_Id`) REFERENCES `tender` (`Tender_Id`),
	FOREIGN KEY (`User_Id`) REFERENCES `users` (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;


INSERT INTO bid_tender
(  
 Tender_Id, User_Id, Created_Date, Is_Deleted
)
VALUES
(  
 1,15,NOW(),0
)

/**/

/*Short List*/
CREATE TABLE `short_list` (
	`Shortlist_id` INT(11) NOT NULL AUTO_INCREMENT,
	`User_Id` INT(11) NOT NULL,
	`Tender_Id` INT(11) NOT NULL,
	`Created_Date` DATETIME NOT NULL,
	`Is_Deleted` INT(11) NOT NULL DEFAULT '0',
	PRIMARY KEY (`Shortlist_id`),
	INDEX `short_list_User_Id` (`User_Id`),
	INDEX `short_list_Tender_Id` (`Tender_Id`),
	CONSTRAINT `short_list_User_Id` FOREIGN KEY (`User_Id`) REFERENCES `users` (`id`),
	CONSTRAINT `short_list_Tender_Id` FOREIGN KEY (`Tender_Id`) REFERENCES `tender` (`Tender_Id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;


INSERT INTO short_list
(  
    User_Id, Tender_Id, Created_Date, Is_Deleted
)
VALUES
(  
 15,9,NOW(),0
)

/*Short List*/


-- Select rows from a Table or View 'TableOrViewName' in schema 'SchemaName'
SELECT * FROM tender 