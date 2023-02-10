/* eslint-disable new-cap */
import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      validate: {
        validator: function (val) {
          return validator.isEmail(value);
        },
        message: 'Enter a valid Email Address',
      },
    },
    message: String,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
    },
  }
);

const Message = new mongoose.model('Message', messageSchema);

export default Message;