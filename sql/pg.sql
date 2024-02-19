-- CreateTable
CREATE TABLE "ts_share" (
    "id" SERIAL NOT NULL,
    "shareId" VARCHAR(100) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),

    CONSTRAINT "ts_share_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "share_id_idx" ON "ts_share"("shareId");
