import { MigrationInterface, QueryRunner } from 'typeorm';

export class socketId1659783561548 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "userSocketId" character varying DEFAULT '';`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP "userSocketId";`,
      undefined,
    );
  }
}
