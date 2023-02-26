import { Schema, model } from 'mongoose';
import { ICommunity } from './Community';

enum UserRole {
  Moderator,
  SuperModerator,
}
enum Country {
  India = 'IN',
  USA = 'USA',
  Israel = 'IS',
}

interface IUser {
  name: string;
  role?: UserRole;
  email?: string;
  image?: string;
  country: string;
  communities: ICommunity[];
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    role: { type: Number, enum: UserRole },
    email: { type: String, trim: true },
    image: { type: String, trim: true },
    country: { type: String, required: true, enum: Country, trim: true },
    communities: [{ type: Schema.Types.ObjectId, ref: 'Community' }],
  },
  { timestamps: true }
);

const User = model<IUser>('User', userSchema);

export { IUser, User, UserRole, Country };
