import { MigrationInterface, QueryRunner } from 'typeorm';

export class addcalledUsername1660313915984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "call" ADD "calledUsername" character varying default '';`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "call" DROP "calledUsername";`,
      undefined,
    );
  }
}
