import {MigrationInterface, QueryRunner} from "typeorm";

export class asdf1578690331765 implements MigrationInterface {
    name = 'asdf1578690331765'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user_domain_role" ("id" SERIAL NOT NULL, "emailAddress" character varying NOT NULL, "userId" integer, "domainId" integer, "roleId" integer, CONSTRAINT "PK_6b69b13503e2138c824ace28786" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" ADD CONSTRAINT "FK_1fcf7b6de7d99bb7d64aad41ced" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" ADD CONSTRAINT "FK_4ab38f3b3c250c042f4505f04ea" FOREIGN KEY ("domainId") REFERENCES "domain"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" ADD CONSTRAINT "FK_a7c998c4e00da191069401a932e" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_domain_role" DROP CONSTRAINT "FK_a7c998c4e00da191069401a932e"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" DROP CONSTRAINT "FK_4ab38f3b3c250c042f4505f04ea"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" DROP CONSTRAINT "FK_1fcf7b6de7d99bb7d64aad41ced"`, undefined);
        await queryRunner.query(`DROP TABLE "user_domain_role"`, undefined);
    }

}
