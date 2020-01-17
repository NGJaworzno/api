import {
  BeforeInsert, BeforeUpdate,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm-plus';
import { validate } from 'class-validator';
import * as R from 'ramda';

import { HTTP400Error } from '@utils/httpErrors';

abstract class Base {
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  public deletedAt!: Date;

  @BeforeInsert()
  @BeforeUpdate()
  public async validate(): Promise<void> {
    const errors = await validate(this);
    const hasErrors = R.gt(R.length(errors), 0);
    if (hasErrors) {
      throw new HTTP400Error({
        validation: errors,
      });
    }
  }
}

export default Base;
