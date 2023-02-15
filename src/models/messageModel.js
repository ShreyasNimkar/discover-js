/* eslint-disable new-cap */
import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema(
  {
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      validate: {
        // eslint-disable-next-line func-names, object-shorthand
        validator: function (val) {
          return validator.isEmail(val);
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

const Message =
  mongoose.models.Message || mongoose.model('Message', messageSchema);

export default Message;
