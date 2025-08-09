const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class AddedNewRoles1733601014399 {
    name = 'AddedNewRoles1733601014399'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`subcategory_places_place\` (\`subcategorySubcategoryId\` int NOT NULL, \`placePlaceId\` int NOT NULL, INDEX \`IDX_76ef2f1eeaa226da941a15484d\` (\`subcategorySubcategoryId\`), INDEX \`IDX_c4fd74254c27439ac58f512d8e\` (\`placePlaceId\`), PRIMARY KEY (\`subcategorySubcategoryId\`, \`placePlaceId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` enum ('owner', 'admin', 'vendor', 'user') NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE \`subcategory_places_place\` ADD CONSTRAINT \`FK_76ef2f1eeaa226da941a15484d6\` FOREIGN KEY (\`subcategorySubcategoryId\`) REFERENCES \`subcategory\`(\`subcategory_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`subcategory_places_place\` ADD CONSTRAINT \`FK_c4fd74254c27439ac58f512d8e7\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`subcategory_places_place\` DROP FOREIGN KEY \`FK_c4fd74254c27439ac58f512d8e7\``);
        await queryRunner.query(`ALTER TABLE \`subcategory_places_place\` DROP FOREIGN KEY \`FK_76ef2f1eeaa226da941a15484d6\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`DROP INDEX \`IDX_c4fd74254c27439ac58f512d8e\` ON \`subcategory_places_place\``);
        await queryRunner.query(`DROP INDEX \`IDX_76ef2f1eeaa226da941a15484d\` ON \`subcategory_places_place\``);
        await queryRunner.query(`DROP TABLE \`subcategory_places_place\``);
    }
}
