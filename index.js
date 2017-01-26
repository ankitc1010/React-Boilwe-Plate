var express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.static('build'));
app.set('view-engine', 'html');
app.get('/', (req,res) => {
  res.render('index');
});

app.listen('3000',(err,succ)=>{
  if(!err) {
    console.log('Server Started');
  } else {
    console.log(err);
  }
});
