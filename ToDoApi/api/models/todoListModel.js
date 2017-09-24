// require mongoose
// this creates a model of how the collection should look.

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema(
{
  name:
  {
    type: String,
    required: 'ENTER A TASK PLEASE'
  },

  Created_At:
  {
    type: Date,
    default: Date.now
  },

  status:
  {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
