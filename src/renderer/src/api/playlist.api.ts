import http from '~/axios';
export type PlayListResult = {
  detail: {
    code: number;
    playlist: Song.Playlist;
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
      dlLevel: 'exhigh';
      downloadMaxBrLevel: 'exhigh';
      downloadMaxbr: number;
      fee: number;
      fl: number;
      flLevel: 'standard';
      flag: number;
      freeTrialPrivilege: {
        resConsumable: boolean;
        userConsumable: boolean;
        listenType: null;
      };
      id: number;
      maxBrLevel: 'exhigh';
      maxbr: number;
      paidBigBang: boolean;
      payed: number;
      pc: null;
      pl: number;
      plLevel: 'exhigh';
      playMaxBrLevel: 'exhigh';
      playMaxbr: number;
      preSell: boolean;
      realPayed: number;
      rscl: null;
      sp: number;
      st: number;
      subp: number;
      toast: boolean;
    }[];
    relatedVideos: null;
    resEntrance: null;
    sharedPrivilege: null;
    urls: null;
  };
  trackAll: {
    code: number;
    privileges: {
      chargeInfoList: {
        chargeMessage: null;
        chargeType: 0;
        chargeUrl: null;
        rate: 128000;
      }[];
      cp: 1;
      cs: false;
      dl: 0;
      dlLevel: 'none';
      downloadMaxBrLevel: 'exhigh';
      downloadMaxbr: 320000;
      fee: 8;
      fl: 128000;
      flLevel: 'standard';
      flag: 2;
      freeTrialPrivilege: {
        listenType: null;
        resConsumable: false;
        userConsumable: false;
      };
      id: 1818237485;
      maxBrLevel: 'exhigh';
      maxbr: 320000;
      payed: 0;
      pl: 128000;
      plLevel: 'standard';
      playMaxBrLevel: 'exhigh';
      playMaxbr: 320000;
      preSell: false;
      rscl: null;
      sp: 7;
      st: 0;
      subp: 1;
      toast: false;
    }[];
    songs: Song.Detail[];
  };
};
const detail = (
  id: number | string,
  s = 8,
): Promise<PlayListResult['detail']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/playlist/detail', { id, s })
      .then((res: any) => {
        if (res.code === 200) return resolve(res);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const trackAll = (
  id: number | string,
  limit?: number,
  offset?: number,
): Promise<PlayListResult['trackAll']> => {
  return new Promise((resolve, reject) => {
    http
      .post('/playlist/track/all', { id, limit, offset })
      .then((res: any) => {
        if (res.code === 200) return resolve(res);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
export const playlistApi = {
  detail,
  trackAll,
};
