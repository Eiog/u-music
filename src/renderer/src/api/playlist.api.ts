import http from '~/axios';
import { SongType } from './song.api';
export type PlayListResult = {
  detail: {
    code: number;
    playlist: {
      adType: number;
      algTags: null;
      backgroundCoverId: number;
      backgroundCoverUrl: string;
      cloudTrackCount: number;
      commentCount: number;
      commentThreadId: string;
      copied: boolean;
      coverImgId: number;
      coverImgId_str: string;
      coverImgUrl: string;
      createTime: number;
      creator: {
        accountStatus: number;
        anchor: boolean;
        authStatus: number;
        authenticationTypes: number;
        authority: number;
        avatarDetail: {
          userType: number;
          identityLevel: number;
          identityIconUrl: string;
        };
        avatarImgId: number;
        avatarImgIdStr: string;
        avatarImgId_str: string;
        avatarUrl: string;
        backgroundImgId: number;
        backgroundImgIdStr: string;
        backgroundUrl: string;
        birthday: number;
        city: number;
        defaultAvatar: boolean;
        description: string;
        detailDescription: string;
        djStatus: number;
        expertTags: null;
        experts: null;
        followed: boolean;
        gender: number;
        mutual: boolean;
        nickname: string;
        province: number;
        remarkName: null;
        signature: string;
        userId: number;
        userType: number;
        vipType: number;
      };
      description: string;
      englishTitle: string;
      gradeStatus: string;
      highQuality: boolean;
      historySharedUsers: null;
      id: number;
      name: string;
      newImported: boolean;
      officialPlaylistType: string;
      opRecommend: boolean;
      ordered: boolean;
      playCount: number;
      privacy: number;
      remixVideo: null;
      score: null;
      shareCount: number;
      sharedUsers: null;
      specialType: number;
      status: number;
      subscribed: true;
      subscribedCount: number;
      subscribers: {
        accountStatus: number;
        anchor: false;
        authStatus: number;
        authenticationTypes: number;
        authority: number;
        avatarDetail: null;
        avatarImgId: number;
        avatarImgIdStr: string;
        avatarImgId_str: string;
        avatarUrl: string;
        backgroundImgId: number;
        backgroundImgIdStr: string;
        backgroundUrl: string;
        birthday: number;
        city: number;
        defaultAvatar: false;
        description: string;
        detailDescription: string;
        djStatus: number;
        expertTags: null;
        experts: null;
        followed: false;
        gender: number;
        mutual: false;
        nickname: string;
        province: number;
        remarkName: null;
        signature: string;
        userId: number;
        userType: number;
        vipType: number;
      }[];
      tags: string[];
      titleImage: number;
      titleImageUrl: string;
      trackCount: number;
      trackIds: {
        alg: string;
        at: number;
        id: number;
        rcmdReason: string;
        sc: null;
        t: number;
        uid: number;
        v: number;
      }[];
      trackNumberUpdateTime: number;
      trackUpdateTime: number;
      tracks: SongType['songDetail']['songs'];
      updateFrequency: string;
      updateTime: number;
      userId: number;
      videoIds: null;
      videos: null;
    };
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
};
const detail = (
  id: number | string,
  s = 8,
): Promise<PlayListResult['detail']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/playlist/detail', { id, s })
      .then((res: any) => {
        console.log(res);
        if (res.code === 200) return resolve(res);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
export const playlistApi = {
  detail,
};
