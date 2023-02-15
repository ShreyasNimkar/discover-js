/* eslint-disable func-names */
/* eslint-disable new-cap */
import mongoose from 'mongoose';
import validator from 'validator';

const projectSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      validate: {
        // eslint-disable-next-line object-shorthand
        validator: function (val) {
          return validator.isURL(val, {
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
  },
  {
    timestamps: {
      createdAt: 'createdAt',
    },
  }
);

const Project =
  mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
