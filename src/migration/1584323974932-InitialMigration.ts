import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1584323974932 implements MigrationInterface {
    name = 'InitialMigration1584323974932'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_domain_role" ("id" SERIAL NOT NULL, "emailAddress" character varying NOT NULL, "userId" integer, "roleId" integer, CONSTRAINT "PK_6b69b13503e2138c824ace28786" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "emailAddress" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "application" ("id" SERIAL NOT NULL, "userId" integer, CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "section" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "applicationId" integer, CONSTRAINT "PK_3c41d2d699384cc5e8eac54777d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "question" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "responseOptions" character varying NOT NULL, "externalUse" boolean NOT NULL, "sectionId" integer, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "answer" ("id" SERIAL NOT NULL, "body" character varying NOT NULL, "responseSelection" character varying NOT NULL, "questionId" integer, "noteId" integer, CONSTRAINT "REL_5fa39e8f57383ff0c3f26a5a15" UNIQUE ("noteId"), CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" ADD CONSTRAINT "FK_1fcf7b6de7d99bb7d64aad41ced" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" ADD CONSTRAINT "FK_a7c998c4e00da191069401a932e" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_b4ae3fea4a24b4be1a86dacf8a2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "section" ADD CONSTRAINT "FK_90d9e517f8986d46dbec4f99cc6" FOREIGN KEY ("applicationId") REFERENCES "application"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_c0dcb2fbd1522ea83d4750de69d" FOREIGN KEY ("sectionId") REFERENCES "section"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_5fa39e8f57383ff0c3f26a5a151" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_5fa39e8f57383ff0c3f26a5a151"`, undefined);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637"`, undefined);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_c0dcb2fbd1522ea83d4750de69d"`, undefined);
        await queryRunner.query(`ALTER TABLE "section" DROP CONSTRAINT "FK_90d9e517f8986d46dbec4f99cc6"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_b4ae3fea4a24b4be1a86dacf8a2"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" DROP CONSTRAINT "FK_a7c998c4e00da191069401a932e"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_domain_role" DROP CONSTRAINT "FK_1fcf7b6de7d99bb7d64aad41ced"`, undefined);
        await queryRunner.query(`DROP TABLE "answer"`, undefined);
        await queryRunner.query(`DROP TABLE "note"`, undefined);
        await queryRunner.query(`DROP TABLE "question"`, undefined);
        await queryRunner.query(`DROP TABLE "section"`, undefined);
        await queryRunner.query(`DROP TABLE "application"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "user_domain_role"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
    }

}
