<script setup lang="ts" name="">
import { DataTableColumns, NButton, NTag } from 'naive-ui';
import { SearchType } from '@@/api';
import { usePlayerStore } from '@@/store';
const { play } = usePlayerStore();
type Song = SearchType['searchResult']['songs'][0];
type Props = {
  data?: Song[];
  loading?: boolean;
  prefixCount?: number;
};
const props = withDefaults(defineProps<Props>(), {
  prefixCount: 1,
});
const columns: DataTableColumns<Song> = [
  {
    title: '#',
    key: '',
    width: 60,
    render: (row, rowIndex) => {
      return h('span', {}, { default: () => rowIndex + props.prefixCount });
    },
  },
  {
    title: '歌曲名',
    key: 'name',
    width: 120,
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '专辑',
    key: 'al',
    width: 120,
    ellipsis: {
      tooltip: true,
    },
    render: (row) => {
      return h(
        NButton,
        { quaternary: true, size: 'small' },
        { default: () => row.al.name },
      );
    },
  },
  {
    title: '创作者',
    key: 'ar',
    width: 120,
    ellipsis: {
      tooltip: true,
    },
    render: (row) => {
      let vNodeArr: any[] = [];
      row.ar.forEach((item) => {
        vNodeArr.push(
          h(
            NButton,
            { quaternary: true, size: 'small' },
            { default: () => item.name },
          ),
        );
      });
      return h('div', {}, vNodeArr);
    },
  },
  {
    title: '版权',
    key: 'fee',
    width: 60,
    render: (row) => {
      let fee = 'Fee';
      if (row.fee === 1) fee = 'VIP';
      if (row.fee === 4) fee = '购买';
      if (row.fee === 8) fee = '试听';
      return h(
        NTag,
        { bordered: false, size: 'small' },
        { default: () => fee },
      );
    },
  },
  {
    title: '时长',
    key: 'dt',
    width: 60,
    render: (row) => {
      return h(
        NTag,
        { bordered: false, size: 'small' },
        { default: () => (row.dt / 60000).toFixed(2) },
      );
    },
  },
  {
    title: '播放',
    key: 'action',
    width: 100,
    fixed: 'right',
    render: (row) => {
      return h('div', { class: 'flex gap-2' }, [
        h(
          NButton,
          {
            quaternary: true,
            circle: true,
            size: 'small',
            onClick: () => handlePlay(row),
          },
          { default: () => h('i', { class: 'i-ri-play-fill' }) },
        ),
        h(
          NButton,
          {
            quaternary: true,
            circle: true,
            size: 'small',
            onClick: () => handleAddPlayList(row),
          },
          { default: () => h('i', { class: 'i-ri-play-list-add-fill' }) },
        ),
      ]);
    },
  },
];
const handlePlay = (song: Song) => {
  console.log(song);
  play(song.id);
};
const handleAddPlayList = (song: Song) => {};
</script>
<template>
  <div min-h="0">
    <n-data-table
      :style="{ height: '100%' }"
      flex-height
      size="small"
      :columns="columns"
      :data="props.data"
      :loading="props.loading"
    />
  </div>
</template>
<style scoped lang="less"></style>
