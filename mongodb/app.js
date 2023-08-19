const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String, isBig: Boolean });

const kitty = new Cat({ name: 'tom', isBig: 'false' });
kitty.save()
      .then(() => console.log('✅ Cat Saved'))
      .catch( err => console.log('❌ Error'))
      // .finally( () => mongoose.disconnect())

Cat.find((err, cats) => {
      if(err) return
      console.log(cats)
})