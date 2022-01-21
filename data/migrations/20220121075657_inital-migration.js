exports.up = async function(knex) {
    await knex.schema 
        .createTable('projects', table=> {
            table.increments('project_id')
            table.string('project_name', 128).notNullable().unique()
            table.boolean('project_completed')
            table.string('project_description',128).defaultTo('null')
        })
        .createTable('resources', table =>{
            table.increments('resource_id')
            table.string('resource_name', 128).notNullable().unique()
            table.string('resource_description', 128).defaultTo('null')
            table.string()
        })
        .createTable('tasks', table =>{
            table.increments('task_id')
            table.string('task_description')
            table.boolean('task_completed')
            table.string('task_notes')
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