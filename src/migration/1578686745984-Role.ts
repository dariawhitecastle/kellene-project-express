import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRolesAndDomains1578686745984 implements MigrationInterface {
    name = 'CreateRolesAndDomains1578686745984'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "role"`, undefined);
    }

}
