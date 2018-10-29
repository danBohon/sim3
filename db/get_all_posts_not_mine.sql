select * 
from users u
join posts p 
on u.id = p.author_id
where p.author_id != ${id};