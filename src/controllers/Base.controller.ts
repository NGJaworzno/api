import {
  getRepository,
  ObjectType,
  EntitySchema,
  getConnection,
  FindConditions,
} from 'typeorm-plus';

import { QueryDeepPartialEntity } from 'typeorm-plus/query-builder/QueryPartialEntity';
import { ID } from '@types';

export type AddDataType<T> = QueryDeepPartialEntity<T> | QueryDeepPartialEntity<T>[];

export default interface BaseController<T> {
  GetAll(): Promise<T[]>;
  GetById(id: ID): Promise<T | void>;
  Add(data: AddDataType<T>): Promise<void>;
  Update(data: T, id: ID): Promise<void>;
  Delete(id: ID): Promise<void>;
}

type EntityClass<T> = ObjectType<T> | EntitySchema<T> | string;

export const simpleGetOneById = <T>(
  entityClass: EntityClass<T>,
  id: ID,
): Promise<T | void> => (
    getRepository(entityClass).findOne(id)
  );

export const simpleGetOneByConditions = <T>(
  entityClass: EntityClass<T>,
  conditions: FindConditions<T>,
): Promise<T | void> => (
    getRepository(entityClass).findOne(conditions)
  );

export const simpleGetMany = <T>(
  entityClass: EntityClass<T>,
  alias: string,
): Promise<T[]> => (
    getRepository(entityClass)
      .createQueryBuilder(alias)
      .getMany()
  );

export const simpleAdd = async <T>(
  entityClass: EntityClass<T>,
  data: AddDataType<T>,
): Promise<void> => {
  await getRepository(entityClass).insert(data);
};

export const simpleUpdate = async <T>(
  entityClass: EntityClass<T>,
  data: T,
  id: ID,
): Promise<void> => {
  await getConnection()
    .createQueryBuilder()
    .update(entityClass)
    .set(data)
    .where('id = :id', { id })
    .execute();
};

export const simpleSoftDelete = async <T>(
  entityClass: EntityClass<T>,
  id: ID,
): Promise<void> => {
  await getConnection()
    .getRepository(entityClass)
    .softDelete(id);
};
