CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"link" TEXT NOT NULL,
	"category_id" integer NOT NULL,
	"professor_subject_school_id" integer NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"subject" TEXT NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "professors_subjects_schools" (
	"id" serial NOT NULL,
	"professor_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	"school_id" integer NOT NULL,
	CONSTRAINT "professors_subjects_schools_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"professor" TEXT NOT NULL,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "schools" (
	"id" serial NOT NULL,
	"school" TEXT NOT NULL,
	CONSTRAINT "schools_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"category" varchar(255) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("category_id") REFERENCES "categories"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("professor_subject_school_id") REFERENCES "professors_subjects_schools"("id");
ALTER TABLE "professors_subjects_schools" ADD CONSTRAINT "professors_subjects_schools_fk0" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");
ALTER TABLE "professors_subjects_schools" ADD CONSTRAINT "professors_subjects_schools_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "professors_subjects_schools" ADD CONSTRAINT "professors_subjects_schools_fk2" FOREIGN KEY ("school_id") REFERENCES "schools"("id");
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id");
ALTER TABLE "users_exams" ADD CONSTRAINT "users_exams_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users_exams" ADD CONSTRAINT "users_exams_fk1" FOREIGN KEY ("exam_id") REFERENCES "exams"("id");
INSERT INTO "categories" (category) VALUES ('E1');
INSERT INTO "categories" (category) VALUES ('E2');
INSERT INTO "categories" (category) VALUES ('E3');
INSERT INTO "categories" (category) VALUES ('2call');
INSERT INTO "categories" (category) VALUES ('Others');
INSERT INTO "professors" (professor) VALUES ('Louise Leichtman');
INSERT INTO "professors" (professor) VALUES ('Delbert Gallier');
INSERT INTO "professors" (professor) VALUES ('Graham Goldhorn');
INSERT INTO "professors" (professor) VALUES ('Callie Adjutant');
INSERT INTO "professors" (professor) VALUES ('Haley Kollman');
INSERT INTO "professors" (professor) VALUES ('Riley Wickkiser');
INSERT INTO "professors" (professor) VALUES ('Presley Pont');
INSERT INTO "professors" (professor) VALUES ('Tom Roske');
INSERT INTO "professors" (professor) VALUES ('Mariah Mcnair');
INSERT INTO "professors" (professor) VALUES ('Nova Siglin');
INSERT INTO "professors" (professor) VALUES ('John Trunk');
INSERT INTO "professors" (professor) VALUES ('Giuliana Kercy');
INSERT INTO "professors" (professor) VALUES ('Angie Bichler');
INSERT INTO "professors" (professor) VALUES ('Roberto Tatel');
INSERT INTO "professors" (professor) VALUES ('Ashley Dimitroff');
INSERT INTO "subjects" (subject) VALUES ('Medicine');
INSERT INTO "subjects" (subject) VALUES ('Business');
INSERT INTO "subjects" (subject) VALUES ('Computer Science');
INSERT INTO "subjects" (subject) VALUES ('Economics');
INSERT INTO "subjects" (subject) VALUES ('Psychology');
INSERT INTO "subjects" (subject) VALUES ('Chemical Engineering');
INSERT INTO "subjects" (subject) VALUES ('Biology');
INSERT INTO "subjects" (subject) VALUES ('Law');
INSERT INTO "schools" (school) VALUES ('Federal Fluminense University');
INSERT INTO "schools" (school) VALUES ('Rio de Janeiro Federal University');
INSERT INTO "schools" (school) VALUES ('São Paulo Federal University');
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (1, 1, 1);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (2, 1, 1);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (3, 2, 1);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (4, 2, 1);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (5, 3, 1);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (6, 3, 2);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (7, 3, 2);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (8, 4, 2);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (9, 5, 2);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (10, 5, 2);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (11, 3, 3);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (12, 3, 3);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (13, 6, 3);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (14, 7, 3);
INSERT INTO "professors_subjects_schools" (professor_id, subject_id, school_id) VALUES (15, 8, 3);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2016.1 - Python', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 5);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2016.2 - Data structure', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 6);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2017.1 - General administration', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 3);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - Physiology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 3, 1);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2015.1 - Histology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 2);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2016.2 - Marketing', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 4, 3);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2020.1 - General administration', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 5, 4);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - Javascript', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 5);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2021.1 - Data structure', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 6);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.2 - Python', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 7);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - General economy', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 5, 8);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2015.1 - History of psychology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 3, 9);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - History of psychology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 10);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2016.2 - Python', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 3, 12);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2016.2 - Javascript', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 4, 11);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.2 - Cell biology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 14);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2017.1 - Political Science', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 15);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2017.1 - Basic chemistry', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 4, 13);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.2 - Python', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 12);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - Javascript', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 5, 12);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2020.1 - Physiology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 2);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2020.2 - Marketing', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 3, 3);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - Marketing', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 4);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2018.1 - Data structure', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 5, 5);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.2 - Python', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 5, 6);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2015.1 - Javascript', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 4, 7);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2018.1 - General economy', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 4, 8);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.2 - Behavioral theory', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 3, 9);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.2 - Behavioral theory', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 3, 10);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2020.2 - Javascript', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 11);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - Python', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 12);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2021.1 - Javascript', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 12);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2019.1 - Basic chemistry', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 13);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2021.1 - Molecular biology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 14);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2021.1 - Civil law', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 2, 15);
INSERT INTO "exams" (title, link, category_id, professor_subject_school_id) VALUES ('2021.1 - Histology', 'https://www.univates.br/editora-univates/media/publicacoes/17/pdf_17.pdf', 1, 1);