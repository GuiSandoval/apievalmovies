import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFilms1638936061626 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'films',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'director',
            type: 'varchar',
          },
          {
            name: 'cast',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'int',
          },
          {
            name: 'gender',
            type: 'varchar',
          },
          {
            name: 'evaluation',
            type: 'int',
          },
          {
            name: 'evaluation_description',
            type: 'text',
          },
          {
            name: 'creted_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('films');
  }
}
