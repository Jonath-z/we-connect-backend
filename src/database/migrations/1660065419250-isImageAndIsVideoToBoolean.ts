import { MigrationInterface, QueryRunner } from 'typeorm';

export class isImageAndIsVideoToBoolean1660065419250
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "messages" ADD "isVideo" boolean DEFAULT false;`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ADD "isImage" boolean DEFAULT false;`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "isImage";`);
    await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "isVideo";`);
  }
}
