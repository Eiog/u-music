import http from '~/axios';
export type SongType = {
  songDetail: {
    code: number;
    privileges: {
      chargeInfoList: {
        chargeMessage: null;
        chargeType: number;
        chargeUrl: null;
        rate: number;
      }[];
      cp: number;
      cs: boolean;
      dl: number;
      dlLevel: string;
      downloadMaxBrLevel: string;
      downloadMaxbr: number;
      fee: number;
      fl: number;
      flLevel: string;
      flag: number;
      freeTrialPrivilege: {
        resConsumable: boolean;
        userConsumable: boolean;
        listenType: null;
      };
      id: number;
      maxBrLevel: string;
      maxbr: number;
      payed: number;
      pl: number;
      plLevel: string;
      playMaxBrLevel: string;
      playMaxbr: number;
      preSell: boolean;
      rscl: null;
      sp: number;
      st: number;
      subp: number;
      toast: boolean;
    }[];
    songs: Song.Detail[];
  };
  sontUrl: {
    code: number;
    data: Song.Url;
  };
  songStatus: {
    success: boolean;
    message: string;
  };
  lrc: {
    lyric: string;
    version: number;
  };
};
const detail = (ids: string | number): Promise<SongType['songDetail']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/song/detail', { ids })
      .then((res: any) => {
        if (res.code === 200) return resolve(res);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const url = (
  id: string | number,
  br: number = 999000,
): Promise<SongType['sontUrl']['data']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/song/url', { id, br })
      .then((res: any) => {
        if (res.code === 200) return resolve(res.data[0]);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const check = (
  id: string | number,
  br: number = 999000,
): Promise<SongType['songStatus']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/check/music', { id, br })
      .then((res: any) => {
        if (res.success) return resolve(res);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};

const lyric = (id: number | string): Promise<SongType['lrc']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/lyric', { id })
      .then((res: any) => {
        if (res.code === 200) return resolve(res.lrc);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const fm = () => {
  return new Promise((resolve, reject) => {
    http
      .get('/personal_fm')
      .then((res: any) => {
        console.log(res);

        if (res.code === 200) return resolve(res.lrc);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
export const songApi = {
  detail,
  url,
  lyric,
  check,
  fm,
};
