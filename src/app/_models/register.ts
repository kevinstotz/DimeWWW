import { DeviceInfo } from 'ngx-device-detector';
import { Status } from './index';

export class Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  ipAddress: string;
  deviceInfo: DeviceInfo;
  status: Status;
}
