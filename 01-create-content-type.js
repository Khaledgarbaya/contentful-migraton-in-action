// Create a Contenttype
module.exports = function(migration) {
  const lesson = migration
    .createContentType('lesson')
    .name('Lesson')
    .description('This is an eggheag.io lesson')
    .displayField('title')

  lesson
    .createField('title')
    .name('Title')
    .type('Symbol')
  lesson
    .createField('description')
    .name('Description')
    .type('Text')
}
