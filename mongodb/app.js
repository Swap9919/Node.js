const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'tom' });
kitty.save()
      .then(() => console.log('✅ Cat Saved'))
      .catch( err => console.log('❌ Error'))