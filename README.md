# uplight_challenge

Installations:
- node.js
- Postgres
- Gitbash to use bash terminal



Running Instructions for Uplight to test it
1) NPM install on command line while in directory
2) install postgres locally: sudo -i -u postgres(MacOs)
2) psql postgres < postgres.sql: This will run postres.sql file to create database, tables, and copy csv files into postgres tables
3) perform the queries:
   - command to run PeakUsageQuery: node -e 'require("./database").queryPeakUsage(<Account Number>)'
        - ex: node -e 'require("./database").queryPeakUsage(42754)'
   - command to run Expected Savings Query: node -e 'require("./database").expectedSavingsQuery(<Account Number>)'