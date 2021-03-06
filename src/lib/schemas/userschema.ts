import { Schema, model } from 'mongoose';

const reqString = {
  type: String,
  require: true,
};

interface User {
  guildId: string;
  userId: string;
  xp: number;
  level: number;
  rank: number;
}

const userSchema = new Schema<User>({
  guildId: reqString,
  userId: reqString,
  xp: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  rank: Number,
});

export const UserModel = model<User>('user-profiles', userSchema);
