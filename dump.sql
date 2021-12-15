CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"semester" varchar(255) NOT NULL,
	"link" TEXT NOT NULL,
	"category_id" integer NOT NULL,
	"professor_subject_school_id" integer NOT NULL,
	"user_id" integer NOT NULL,
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
	"school_Id" integer NOT NULL,
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
CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"token" TEXT NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "users" (
	"id" serial NOT NULL,
	"code" TEXT NOT NULL,
	"nickname" TEXT NOT NULL,
	"avatar_id" integer NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "avatars" (
	"id" serial NOT NULL,
	"url" TEXT NOT NULL,
	CONSTRAINT "avatars_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("category_id") REFERENCES "categories"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("professor_subject_school_id") REFERENCES "professors_subjects_schools"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk2" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "professors_subjects_schools" ADD CONSTRAINT "professors_subjects_schools_fk0" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");
ALTER TABLE "professors_subjects_schools" ADD CONSTRAINT "professors_subjects_schools_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "professors_subjects_schools" ADD CONSTRAINT "professors_subjects_schools_fk2" FOREIGN KEY ("school_Id") REFERENCES "schools"("id");
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id");