use apiclients;
create index index_client on clients (guid,first, last, street, city, zip);
