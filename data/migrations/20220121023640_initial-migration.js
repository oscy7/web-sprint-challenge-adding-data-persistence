
exports.up = async function(knex) {
    await knex.schema 
        .createTable('projects', table=> {
            table.increments('project_id')
            table.string('project_name', 128).notNullable().unique()
            table.integer('project_completed').defaultTo('0')
        })
        .createTable('resources', table =>{
            table.increments('resource_id')
            table.string('resource_name', 128).notNullable().unique()
        })
        .createTable('tasks', table =>{
            table.increments('task_id')
            table.string('task_description')
            table.integer('task_completed').defaultTo('0')
            table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')  
};
