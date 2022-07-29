var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

//set some defualts
db.defaults({ posts: []}).write();

//To read the documentation. 
console.log(db.get('posts').value());

// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome', published: true})
  .write()

// count posts
// ----------------------------
db.get(posts).

// find all posts ids
// YOUR CODE

// all matches of published false
console.log('all published false',db.get('posts').filter({published:false}).value())

// find post with published false
console.log('find fisrt published false',db.get('posts').find({published: false}).value())

