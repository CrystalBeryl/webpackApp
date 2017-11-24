module.exports = {
    queryBugFormById: 'SELECT b.alias,a.title,a.description,a.attachment,' +
    'a.assigner,a.priority,a.status from form a LEFT JOIN project b on a.project_id=b.id WHERE a.id=?',
    queryBugList: 'SELECT a.id,b.alias,a.title,a.description,a.attachment,a.assigner,a.priority ' +
    'FROM form a LEFT JOIN project b ON a.project_id=b.id LIMIT ?,10',
    queryBugCounts: 'SELECT count(*) as counts FROM form'
}