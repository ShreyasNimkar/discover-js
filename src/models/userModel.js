import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    select: false,
  },
  confirmPassword: {
    type: String,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  if (this.password != this.confirmPassword)
    console.log('Passwords do not match');
  // return next(new AppError('Passwords do not match', 400));
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (inPass, userPass) {
  // eslint-disable-next-line no-return-await
  return await bcrypt.compare(inPass, userPass);
};

const User = mongoose.model('User', userSchema);

export default User;
