import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDomainsTable1578685784696 implements MigrationInterface {
    name = 'CreateDomainsTable1578685784696'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "domain" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_27e3ec3ea0ae02c8c5bceab3ba9" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "domain"`, undefined);
    }

}
