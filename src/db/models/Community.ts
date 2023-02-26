import { model, Schema } from 'mongoose';

interface ICommunity {
  title: string;
  image: string;
  memberCount?: number;
}
const communitySchema = new Schema<ICommunity>(
  {
    title: { type: String, required: true, trim: true, maxLength: 60 },
    image: { type: String, trim: true },
    memberCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Community = model<ICommunity>('Community', communitySchema);

export { ICommunity, Community };
