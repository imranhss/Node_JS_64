const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');




const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);




app.get('/', (req, res)=>{

    // res.send('<p>Welcome to Node JS</p>'); 

    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});













app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});







