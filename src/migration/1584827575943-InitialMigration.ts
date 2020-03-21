import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1584827575943 implements MigrationInterface {
    name = 'InitialMigration1584827575943'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "subQuestions"`, undefined);
        await queryRunner.query(`ALTER TABLE "question" ADD "subQuestions" text`, undefined);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "responseOptions"`, undefined);
        await queryRunner.query(`ALTER TABLE "question" ADD "responseOptions" text`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "responseOptions"`, undefined);
        await queryRunner.query(`ALTER TABLE "question" ADD "responseOptions" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "subQuestions"`, undefined);
        await queryRunner.query(`ALTER TABLE "question" ADD "subQuestions" integer`, undefined);
    }

}
