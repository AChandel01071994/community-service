import { connect } from 'mongoose';

export const dbConnect = async (): Promise<void> => {
  try {
    console.log('Connecting to DB...');
    await connect(process.env.MONGODB_URI as string);
    console.log('DB connected successfully');
  } catch (err) {
    console.log(`Error while connecting mongoDB, ${(err as Error)?.message}`);
  }
};
