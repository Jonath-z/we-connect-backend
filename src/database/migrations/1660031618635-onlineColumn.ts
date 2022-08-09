import { MigrationInterface, QueryRunner } from 'typeorm';

export class onlineColumn1660031618635 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "online" boolean DEFAULT false;`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP "online";`, undefined);
  }
}
