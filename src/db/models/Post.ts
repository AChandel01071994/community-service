import { Schema, model } from 'mongoose';
import { ICommunity } from './Community';
import { IUser } from './User';

enum PostStatus {
  PendingApproval = 0,
  Approved = 1,
}

interface IPost {
  title: string;
  summary: string;
  body: string;
  author: IUser;
  community: ICommunity;
  likes?: number;
  status?: PostStatus;
}

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true, trim: true, maxLength: 60 },
    summary: { type: String, required: true, trim: true, maxLength: 150 },
    body: { type: String, required: true, trim: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    community: { type: Schema.Types.ObjectId, ref: 'Community' },
    likes: { type: Number, default: 0 },
    status: {
      type: Number,
      default: PostStatus.PendingApproval,
      enum: PostStatus,
    },
  },
  { timestamps: true }
);

const Post = model<IPost>('Post', postSchema);

export { IPost, Post };
