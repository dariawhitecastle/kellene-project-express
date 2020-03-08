import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOrganizationsTable1578684943821 implements MigrationInterface {
    name = 'CreateOrganizationsTable1578684943821'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "organization" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "organization"`, undefined);
    }

}
