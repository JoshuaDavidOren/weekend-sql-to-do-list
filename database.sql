CREATE TABLE to_do(
"id" serial PRIMARY KEY ,
"task" varchar(250) NOT NULL,
"complete" boolean 
);

INSERT INTO "to_do" ( "task", "complete" )
VALUES ('Win the pod race', FALSE),
('free my mom from slavery', FALSE),
('become a Jedi', FALSE),
('Be the best pilot in the Galaxy', FALSE),
('Become powerful enough to prevent Death and divide by 0', FALSE),
('Kill all of the Jedi starting with the younglings (they taste the best)',	FALSE),
('Save Padme', FALSE),
('definitely do not kill Padme', FALSE);