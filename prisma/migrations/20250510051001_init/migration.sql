-- CreateTable
CREATE TABLE "Lectures" (
    "id" SERIAL NOT NULL,
    "my_lecture" BOOLEAN NOT NULL DEFAULT false,
    "lecture_name" TEXT NOT NULL,
    "lecture_description" TEXT NOT NULL,
    "teacher_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lectures_pkey" PRIMARY KEY ("id")
);
