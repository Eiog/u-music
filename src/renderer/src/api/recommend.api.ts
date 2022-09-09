import http from '~/axios';
export type RecommendResult = {
  Resource: {
    code: number;
    featureFirst: boolean;
    haveRcmdSongs: boolean;
    recommend: {
      alg: string;
      copywriter: string;
      createTime: number;
      creator: {
        accountStatus: number;
        authStatus: number;
        authority: number;
        avatarImgId: number;
        avatarImgIdStr: string;
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
      id: number;
      name: string;
      picUrl: string;
      playcount: number;
      trackCount: number;
      type: number;
      userId: number;
    }[];
  };
};
const resource = (): Promise<RecommendResult['Resource']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/recommend/resource')
      .then((res: any) => {
        console.log(res);
        if (res.code === 200) return resolve(res);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
export const recommendApi = {
  resource,
};
