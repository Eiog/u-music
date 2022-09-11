import http from '~/axios';
import md5 from 'md5';
import { useAppStore } from '~/stores';
export type StatusResult = {
  code: number;
  account: {
    anonimousUser: boolean;
    ban: number;
    baoyueVersion: number;
    createTime: number;
    donateVersion: number;
    id: number;
    paidFee: boolean;
    status: number;
    tokenVersion: number;
    type: number;
    userName: string;
    vipType: number;
    whitelistAuthority: number;
  };
  profile: {
    accountStatus: number;
    accountType: number;
    anchor: boolean;
    authStatus: number;
    authenticated: boolean;
    authenticationTypes: number;
    authority: number;
    avatarDetail: null;
    avatarImgId: number;
    avatarUrl: string;
    backgroundImgId: number;
    backgroundUrl: string;
    birthday: number;
    city: number;
    createTime: number;
    defaultAvatar: boolean;
    description: null;
    detailDescription: null;
    djStatus: number;
    expertTags: null;
    experts: null;
    followed: boolean;
    gender: number;
    lastLoginIP: string;
    lastLoginTime: number;
    locationStatus: number;
    mutual: boolean;
    nickname: string;
    province: number;
    remarkName: null;
    shortUserName: string;
    signature: string;
    userId: number;
    userName: string;
    userType: number;
    vipType: number;
    viptypeVersion: number;
  };
};
export type CheckQrResult = {
  code: 800 | 801 | 802 | 803;
  cookie: string;
  message: string;
  avatarUrl?: string;
  nickname?: string;
};
const sentCaptcha = (phone: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    http
      .get('/captcha/sent', { phone: phone })
      .then((res: any) => {
        if (res.code === 200) return resolve(res.data);
        return reject(false);
      })
      .catch((err) => reject(err));
  });
};
const verifyCaptcha = (phone: string, captcha: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    http
      .get('/captcha/verify', { phone, captcha })
      .then((res: any) => {
        if (res.code === 200 && res.data) return resolve(res.data);
        return reject(false);
      })
      .catch((err) => reject(err));
  });
};
const getQrKey = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    http
      .get('/login/qr/key', { timestamp: Date.now() })
      .then((res: any) => {
        if (res.code === 200) return resolve(res.data.unikey);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const getQr = (key: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    http
      .get('/login/qr/create', { key, qrimg: 'qrimg ', timestamp: Date.now() })
      .then((res: any) => {
        if (res.code === 200) return resolve(res.data.qrimg);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const checkQr = (key: string): Promise<CheckQrResult> => {
  return new Promise((resolve, reject) => {
    http
      .get('/login/qr/check', { key, timestamp: Date.now() })
      .then((res: any) => {
        return resolve(res);
      })
      .catch((err) => reject(err));
  });
};
const logOut = () => {
  return new Promise((resolve, reject) => {
    http
      .get('/logout')
      .then((res: any) => {
        if (res.code === 200) {
          useAppStore().$patch({
            cookie: '',
            profile: undefined,
            account: undefined,
            refreshed: false,
          });
          return resolve(true);
        }
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const anonimous = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    http
      .get('/register/anonimous')
      .then((res: any) => {
        if (res.code === 200) {
          useAppStore().$patch({
            account: res.account,
            profile: res.profile,
            cookie: res.cookie,
            refreshed: true,
            tourist: res.profile ? false : true,
          });
          return resolve(res.cookie);
        }
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const emailLogin = (accoutn: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    http
      .post('/login', {
        email: accoutn,
        md5_password: md5(password),
      })
      .then((res: any) => {
        if (res.code === 200) {
          useAppStore().$patch({
            account: res.account,
            profile: res.profile,
            cookie: res.cookie,
            refreshed: true,
            tourist: res.profile ? false : true,
          });
          return resolve(res);
        }
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const captchaLogin = (accoutn: string, captcha: string) => {
  return new Promise((resolve, reject) => {
    http
      .post('/login/cellphone', {
        phone: accoutn,
        captcha,
      })
      .then((res: any) => {
        if (res.code === 200) {
          useAppStore().$patch({
            account: res.account,
            profile: res.profile,
            cookie: res.cookie,
            refreshed: true,
            tourist: res.profile ? false : true,
          });
          return resolve(res);
        }
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const phoneLogin = (accoutn: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    http
      .post('/login/cellphone', {
        phone: accoutn,
        md5_password: md5(password),
      })
      .then((res: any) => {
        if (res.code === 200) {
          useAppStore().$patch({
            account: res.account,
            profile: res.profile,
            cookie: res.cookie,
            refreshed: true,
            tourist: res.profile ? false : true,
          });
          return resolve(res);
        }
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const status = (): Promise<StatusResult> => {
  return new Promise((resolve, reject) => {
    http
      .get('/login/status')
      .then(({ data: res }: any) => {
        if (res.code === 200) {
          useAppStore().$patch({
            account: res.account,
            profile: res.profile,
            tourist: res.profile ? false : true,
          });
          return resolve(res);
        }
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const refresh = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    http
      .get('/login/refresh')
      .then((res: any) => {
        if (res.code === 200) {
          useAppStore().$patch({
            cookie: res.cookie,
            refreshed: true,
          });
          return resolve(res.cookie);
        }
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
export const loginApi = {
  sentCaptcha,
  verifyCaptcha,
  getQrKey,
  getQr,
  checkQr,
  status,
  logOut,
  anonimous,
  emailLogin,
  phoneLogin,
  captchaLogin,
  refresh,
};
