-- CreateTable
CREATE TABLE "Route" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "grade" TEXT NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Move" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "routeId" INTEGER,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;
