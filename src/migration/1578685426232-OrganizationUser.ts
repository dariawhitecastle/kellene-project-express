import {MigrationInterface, QueryRunner} from "typeorm";

export class UsersJoinOrganizations1578685426232 implements MigrationInterface {
    name = 'UsersJoinOrganizations1578685426232'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "organizationId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_dfda472c0af7812401e592b6a61" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_dfda472c0af7812401e592b6a61"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "organizationId"`, undefined);
    }

}
