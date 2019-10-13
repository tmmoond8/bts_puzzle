import {
  AllowNull,
  Column,
  Default,
  Model,
  Table,
} from 'sequelize-typescript';
import { generateToken } from '../lib/token';

@Table({
  timestamps: true,
})
export class User extends Model<User> {
  @AllowNull(false)
  @Column
  name!: string;

  @Default('/static/images/default_thumbnail.png')
  @Column
  thumbnail?: string;

  @Column
  email!: string;

  @AllowNull(false)
  @Column
  provider!: string;

  @AllowNull(false)
  @Column
  snsId!: string;

  @Column
  description?: string;

  public get profile(): object {
    return {
      description: this.description,
      id: this.id,
      thumbnail: this.thumbnail,
      name: this.name,
    };
  }

  public generateToken() {
    const payload = {
      profile: this.profile,
    };
    return generateToken(payload);
  }
}