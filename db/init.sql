drop table if exists users;
drop table if exists posts;

create table users (
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

create table posts (
    id serial primary key,
    author_id int references users (id),
    title varchar (45),
    img text,
    content text
);

insert into users (username, password, profile_pic) values 
('TestDummy', 'pass123', 'https://robohash.org/86.125.239.86.png');

insert into posts (author_id, title, img, content) values
(1, 'DummyTitle', 'https://picsum.photos/200/300/?random', 'DummyContent');

select * from users;
select * from posts;