/* eslint-disable new-cap */
import mongoose from 'mongoose';
import validator from 'validator';

const projectSchema = new mongoose.Schema({
  link: {
    type: String,
    validate: {
      validator: function (val) {
        return validator.isURL(value, {
          protocols: ['http', 'https', 'ftp'],
          require_tld: true,
          require_protocol: true,
        });
      },
      message: 'Enter a valid URL for Project Link',
    },
  },
  thumbnail: String,
  description: String,
  title: {
    type: String,
    required: true,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
    },
  }
});

const Project = new mongoose.model('Project', projectSchema);

export default Project;
