import http from '~/axios';
export type SearchType = {
  vagueSearch: {
    albums: {
      name: string;
      artist: {
        albumSize: number;
        alias: any[];
        fansGroup: null;
        id: number;
        img1v1: number;
        img1v1Url: string;
        name: string;
        picId: number;
        picUrl: string;
        trans: null;
      };
      copyrightId: number;
      id: number;
      mark: number;
      picId: number;
      publishTime: number;
      size: number;
      status: number;
    }[];
    artists: {
      accountId: number;
      albumSize: number;
      alias: [];
      fansGroup: number;
      id: number;
      img1v1: number;
      img1v1Url: string;
      name: string;
      picId: number;
      picUrl: string;
      trans: null;
    }[];
    order: string[];
    playlists: {
      action: null;
      actionType: null;
      bookCount: number;
      coverImgUrl: string;
      creator: null;
      description: string;
      highQuality: false;
      id: number;
      name: string;
      officialTags: null;
      playCount: number;
      recommendText: null;
      score: null;
      specialType: number;
      subscribed: false;
      trackCount: number;
      userId: number;
    }[];
    songs: {
      album: {
        artist: {
          albumSize: number;
          alias: any[];
          fansGroup: null;
          id: number;
          img1v1: number;
          img1v1Url: string;
          name: string;
          picId: number;
          picUrl: null;
          trans: null;
        };
        copyrightId: number;
        id: number;
        mark: number;
        name: string;
        picId: number;
        publishTime: number;
        size: number;
        status: number;
      };
      alias: string[];
      artists: {
        albumSize: number;
        alias: [];
        fansGroup: null;
        id: number;
        img1v1: number;
        img1v1Url: string;
        name: string;
        picId: number;
        picUrl: null;
        trans: null;
      }[];
      copyrightId: number;
      duration: number;
      fee: number;
      ftype: number;
      id: number;
      mark: number;
      mvid: number;
      name: string;
      rUrl: null;
      rtype: number;
      status: number;
    }[];
  };
  hotSearch: {
    alg: string;
    content: string;
    iconType: number;
    iconUrl: string;
    score: number;
    searchWord: string;
    source: number;
    url: string;
  }[];
  searchResult: {
    searchQcReminder: null;
    songCount: number;
    songs: Song.Detail[];
  };
};

const vagueSearch = (val: string): Promise<SearchType['vagueSearch']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/search/suggest', { keywords: val })
      .then((res: any) => {
        if (res.code === 200 && Object.keys(res.result).length !== 0)
          return resolve(res.result);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const hotSearch = (): Promise<SearchType['hotSearch']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/search/hot/detail')
      .then((res: any) => {
        if (res.code === 200) return resolve(res.data as any);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
const search = (
  keywords: string,
  limit?: number,
  offset?: number,
  type?: number,
): Promise<SearchType['searchResult']> => {
  return new Promise((resolve, reject) => {
    http
      .get('/cloudsearch', { keywords, limit, offset, type })
      .then((res: any) => {
        if (res.code === 200 && res.result) return resolve(res.result as any);
        return reject(res);
      })
      .catch((err) => reject(err));
  });
};
export const searchApi = {
  vagueSearch,
  hotSearch,
  search,
};
