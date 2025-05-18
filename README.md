1. setup nodejs
2. npm install --save pg pg-hstore 
3. npm i --save-dev sequelize-cli
4. npm install sequelize sequelize-cli

https://sequelize.org/  - Reference of sequelize learning

4. Go to migrations > .sequelizerc > and copy all items and paste in .sequelizerc
5. npx sequelize-cli db:create           - command to create the database
5. Then create model with name and use  new Sequelize.define()
6. then run command npx sequelize-cli migration:generate --name create-users
7. # After run this command, you will see table user in your database -  npx sequelize-cli db:migrate            
8. then run command npx sequelize-cli db:seed:all
9. then run command npx sequelize-cli db:seed:all
10. then run command npx sequelize-cli db:seed:all


# Note : If forgert to add phoneNumber or add a new key like phoneNumber in any model then run this command
npx sequelize-cli migration:generate --name add-phoneNumber-to-user

and in migrations it will be like this :-
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('user', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true, // or false if required
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('user', 'phoneNumber');
  },
};

