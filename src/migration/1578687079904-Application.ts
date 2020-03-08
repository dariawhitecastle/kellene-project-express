import {MigrationInterface, QueryRunner} from "typeorm";

export class Application1578687079904 implements MigrationInterface {
    name = 'Application1578687079904'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "application" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "application"`, undefined);
    }

}
