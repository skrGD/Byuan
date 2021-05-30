
import { Request } from '@utils/request';


export interface IHome {
  name: string,
  password: string,
}

export function login(parameter: IHome) {
  return Request.axiosInstance({
    url: '/about',
    method: 'get',
    data: parameter,
  })
}