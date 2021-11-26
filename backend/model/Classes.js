const mongoose = require('mongoose');

const ClassesSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
   },
   zoomid: {
      type: String,
      required: true
   },
   title: {
      type: String,
      required: true
   },
   desc: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
});

const Classes = mongoose.model('Classes', ClassesSchema);
module.exports = Classes;
