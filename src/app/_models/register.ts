
import { Status, UserAgent } from './index';

export class Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  ipAddress: string;
  userAgent: UserAgent;
  status: Status;
}
