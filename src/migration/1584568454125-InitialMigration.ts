import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1584568454125 implements MigrationInterface {
    name = 'InitialMigration1584568454125'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_b4ae3fea4a24b4be1a86dacf8a2"`, undefined);
        await queryRunner.query(`CREATE TABLE "submission" ("id" SERIAL NOT NULL, "userId" integer, "answerId" integer, CONSTRAINT "PK_7faa571d0e4a7076e85890c9bd0" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "answer" ADD "submissionId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "submission" ADD CONSTRAINT "FK_7bd626272858ef6464aa2579094" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "submission" ADD CONSTRAINT "FK_c2ab2118f46f205bfd6a1039e9e" FOREIGN KEY ("answerId") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_1398cb4bf7f1ccc37fa0dd538ff" FOREIGN KEY ("submissionId") REFERENCES "submission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_1398cb4bf7f1ccc37fa0dd538ff"`, undefined);
        await queryRunner.query(`ALTER TABLE "submission" DROP CONSTRAINT "FK_c2ab2118f46f205bfd6a1039e9e"`, undefined);
        await queryRunner.query(`ALTER TABLE "submission" DROP CONSTRAINT "FK_7bd626272858ef6464aa2579094"`, undefined);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "submissionId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD "userId" integer`, undefined);
        await queryRunner.query(`DROP TABLE "submission"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_b4ae3fea4a24b4be1a86dacf8a2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
