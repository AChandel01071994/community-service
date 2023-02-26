import { model, Schema } from 'mongoose';

interface IWatchList {
  words: string[];
}
const watchListSchema = new Schema<IWatchList>(
  {
    words: [{ type: String, trim: true, required: true }],
  },
  { timestamps: true }
);

const WatchList = model<IWatchList>('WatchList', watchListSchema);

export { IWatchList, WatchList };
