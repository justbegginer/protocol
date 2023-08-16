create table Sportsman
(
    id                    int not null auto_increment primary key,
    name                  varchar,
    surname               varchar,
    date                  varchar,
    gender                varchar,
    bow_class             varchar,
    category              varchar,
    region                varchar,
    federation_membership varchar,
    club                  varchar,
    telephone_number      varchar,
    is_mark               boolean,
    shield                varchar,
    division              varchar,
    competition           varchar
)