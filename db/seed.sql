create table if not exists cart (
    id serial primary key,
    food varchar(60)
);

create table if not exists price (
    id serial primary key,
    food varchar(60),
    cost varchar(60)
);