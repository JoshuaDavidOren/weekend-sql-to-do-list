CREATE TABLE to_do(
"id" serial PRIMARY KEY ,
"task" varchar(250) NOT NULL,
"complete" boolean 
);

INSERT INTO "to_do" ( "task", "complete" )
VALUES ('Win the pod race', FALSE),
('Free my mom from slavery', FALSE),
('Become a Jedi', FALSE),
('Be the best pilot in the Galaxy', FALSE),
('Become powerful enough to prevent Death and divide by 0', FALSE),
('Kill all of the Jedi starting with the younglings',	FALSE),
('Save Padme', FALSE),
('Definitely do not kill Padme', FALSE);