CREATE DATABASE pharmacy;
\c pharmacy;

-- From this point, execute the following lines of the script from the psql command line or from pdAdmin.

CREATE TABLE medicines (id SERIAL, 
  medicine VARCHAR(50) NOT NULL, 
  price INT NOT NULL, 
  stock INT NOT NULL CHECK (stock >= 0)  
);

INSERT INTO medicines values
(DEFAULT, 'Paracetamol', 3500, 25 ),
(DEFAULT, 'Ibuprofeno', 6900, 10 ),
(DEFAULT, 'Orfidal', 10900, 30 ),
(DEFAULT, 'Zolpidem', 5000, 12 ),
(DEFAULT, 'Mentix', 35900, 22 ),
(DEFAULT, 'Diclofenaco', 1900, 50 ),
(DEFAULT, 'Frenadol', 4900, 41 ),
(DEFAULT, 'Piretanyl', 1290, 7 ),
(DEFAULT, 'Aspirina', 4500, 35 ),
(DEFAULT, 'Ventolin', 22900, 5 );

CREATE TABLE staff (id SERIAL, 
  staff_name VARCHAR(50), 
  rol VARCHAR(50) NOT NUlL, 
  salary INT NOT NULL
); 

INSERT INTO staff values
(DEFAULT, 'Jane Margolis', 'administrador' , 5000),
(DEFAULT, 'Skyler White', 'cajero' , 3500),
(DEFAULT, 'Ignacio Vargas', 'administrador' , 2200),
(DEFAULT, 'Walter White', 'farmaceutico' , 7000),
(DEFAULT, 'Jesse Pinkman', 'farmaceutico' , 6500),
(DEFAULT, 'Gustavo Fring', 'gerente' , 10000),
(DEFAULT, 'Saul Goodman', 'abogado' , 4000),
(DEFAULT, 'Hank Schrader', 'seguridad' , 1500),
(DEFAULT, 'Mike Ehrmantraut', 'seguridad' , 1750);

SELECT * FROM medicines;
SELECT * FROM staff;
