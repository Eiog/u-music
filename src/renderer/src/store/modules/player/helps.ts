
import { songApi, SongType } from "@@/api"
import { Ref } from "vue"
type SongDetail = SongType['songDetail']
type AddPlauListResult = {
    url: string
    name: string
    id: number
}
export const addPlayList = async (id: number | number[], list: Ref<SongDetail['songs']>): Promise<AddPlauListResult> => {
    const isArr = Array.isArray(id)
    const songId = isArr ? id.join() : id.toString()
    try {
        const { songs } = await songApi.songDetail(songId)
        list.value.push(...songs)
        const song = await songApi.songUrl(isArr ? songId.split(',')[0] : songId)
        return {
            id: song.id,
            url: song.url,
            name: songs[0].name
        }
    } catch (error) {
        return error as any
    }
}
export const getSongUrl = async (id: number | string) => {

}