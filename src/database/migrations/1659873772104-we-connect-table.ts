import { MigrationInterface, QueryRunner } from 'typeorm';

export class weConnectTable1659873772104 implements MigrationInterface {
  name = 'weConnectTable1659873772104';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contact" ("id" SERIAL NOT NULL, "userAvatartUrl" character varying DEFAULT '', "userCoverUrl" character varying DEFAULT '', "usernameId" integer, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "messages" ("id" SERIAL NOT NULL, "senderId" integer DEFAULT 0, "receiver" character varying DEFAULT '', "receiverId" character varying DEFAULT '', "message" character varying DEFAULT '', "date" character varying DEFAULT '', "time" character varying DEFAULT '', CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "story" ("id" SERIAL NOT NULL, "storyUrl" character varying DEFAULT '', "storyDescription" character varying DEFAULT '', "storyType" character varying DEFAULT '', "expirationDate" character varying DEFAULT '', "allowReaction" boolean NOT NULL DEFAULT false, "storyOwnerId" integer, CONSTRAINT "PK_28fce6873d61e2cace70a0f3361" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying DEFAULT '', "usernameLowerCase" character varying DEFAULT '', "userPassword" character varying DEFAULT '', "userToken" character varying DEFAULT '', "userSocketId" character varying DEFAULT '', "userProfileUrl" character varying DEFAULT '', "userCoverUrl" character varying DEFAULT '', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "call" ("id" SERIAL NOT NULL, "userAvatarUrl" character varying DEFAULT '', "date" character varying DEFAULT '', "time" character varying DEFAULT '', "missed" boolean NOT NULL DEFAULT false, "isIncoming" boolean DEFAULT false, "isVideo" boolean NOT NULL DEFAULT false, "usernameId" integer, CONSTRAINT "PK_2098af0169792a34f9cfdd39c47" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "contact" ADD CONSTRAINT "FK_e05c7a7447f5bb481813aa27c5e" FOREIGN KEY ("usernameId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ADD CONSTRAINT "FK_2db9cf2b3ca111742793f6c37ce" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "story" ADD CONSTRAINT "FK_d62c308264256f934facdf00c9d" FOREIGN KEY ("storyOwnerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "call" ADD CONSTRAINT "FK_42b18e2fdea0657adf4f3c79caf" FOREIGN KEY ("usernameId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "call" DROP CONSTRAINT "FK_42b18e2fdea0657adf4f3c79caf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "story" DROP CONSTRAINT "FK_d62c308264256f934facdf00c9d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" DROP CONSTRAINT "FK_2db9cf2b3ca111742793f6c37ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contact" DROP CONSTRAINT "FK_e05c7a7447f5bb481813aa27c5e"`,
    );
    await queryRunner.query(`DROP TABLE "call"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "story"`);
    await queryRunner.query(`DROP TABLE "messages"`);
    await queryRunner.query(`DROP TABLE "contact"`);
  }
}
