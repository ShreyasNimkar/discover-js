import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema({
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

adminSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
  }
});

adminSchema.methods.correctPassword = async function (inPass, userPass) {
  // eslint-disable-next-line no-return-await
  return await bcrypt.compare(inPass, userPass);
};

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;
