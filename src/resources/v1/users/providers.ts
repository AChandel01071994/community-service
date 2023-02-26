import { IUser, User } from '../../../db/models/User';
import { UserInput } from '../../../types/inputSchemas';

const createUser = async (userPayload: UserInput): Promise<IUser> => {
  const user = new User(userPayload);
  await user.validate();
  await user.save();
  return user;
};

export { createUser };
