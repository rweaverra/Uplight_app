INSERT INTO accounts(building_id, account_number)
VALUES ('white_house', 58420);

INSERT INTO homes_data(building_id, hour, kwh_usage)
VALUES ('white_house',1,4.898962);



 SELECT account_number, accounts.building_id, hour, kwh_usage
    FROM accounts
    INNER JOIN homes_data
    ON homes_data.building_id = accounts.building_id
    WHERE kwh_usage = (
    SELECT MAX (kwh_usage)
    FROM homes_data);




 SELECT account_number, accounts.building_id, hour, kwh_usage
    FROM accounts
    INNER JOIN homes_data
    ON homes_data.building_id = accounts.building_id
    WHERE accounts.building_id = 'white_house'
    ORDER BY kwh_usage DESC;