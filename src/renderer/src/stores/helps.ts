import { songApi } from '~/api';
import { colord } from 'colord';
import { Ref } from 'vue';
type AddPlauListResult = {
  url: string;
  name: string;
  id: number;
};
export const addPlayList = async (
  id: number | number[],
  list: Ref<Song.Detail[]>,
): Promise<AddPlauListResult> => {
  const isArr = Array.isArray(id);
  const songId = isArr ? id.join() : id.toString();
  try {
    const { songs } = await songApi.detail(songId);
    list.value.push(...songs);
    const song = await songApi.url(isArr ? songId.split(',')[0] : songId);
    return {
      id: song.id,
      url: song.url,
      name: songs[0].name,
    };
  } catch (error) {
    return error as any;
  }
};

export const getSatusColor = (color: string = '#ff461f') => {
  return {
    color: color,
    hover: colord(color).lighten(0.1).toHex(),
    pressed: colord(color).darken(0.1).toHex(),
    suppl: colord(color).lighten(0.1).toHex(),
  };
};
