import Admin from '@entities/Admin.entity';
import BaseController, { simpleAdd, simpleGetOneByConditions } from './Base.controller';

interface AdminControllerType<T> extends Partial<BaseController<T>>{
  Add(data: T): Promise<void>;
  GetByEmail(email: string): Promise<T | void>;
}

const AdminController: AdminControllerType<Admin> = {
  GetByEmail(email) {
    return simpleGetOneByConditions<Admin>(Admin, { email });
  },
  async Add(data) {
    await simpleAdd<Admin>(Admin, data);
  },
};

export default AdminController;
