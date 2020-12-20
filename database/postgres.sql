CREATE DATABASE uplight;

\c uplight

CREATE TABLE accounts (
    building_id TEXT PRIMARY KEY,
    account_number INT  NOT NULL

);


CREATE TABLE homes_data (
    building_id TEXT,
    hour INT,
    kwh_usage REAL,
    CONSTRAINT building_id FOREIGN KEY (building_id)
        REFERENCES accounts (building_id)
        ON UPDATE NO ACTION
        ON DELETE CASCADE

);


COPY accounts
FROM '/Users/ryanweaver/programming/coding-challenges/uplight_challenge/csv_files/example_accounts.csv'
DELIMITER ','
CSV HEADER;

COPY homes_data
FROM '/Users/ryanweaver/programming/coding-challenges/uplight_challenge/csv_files/example_homes_data.csv'
DELIMITER ','
CSV HEADER;

