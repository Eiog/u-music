<script setup lang="ts">
import { DataTableColumns, NTag } from 'naive-ui';
import { RouterLink } from 'vue-router';
const { play } = usePlayerStore();
type Props = {
  data?: Song.Detail[];
  loading?: boolean;
  prefixCount?: number;
};
const props = withDefaults(defineProps<Props>(), {
  prefixCount: 1,
});
const rowProps = (row: Song.Detail) => {
  return {
    ondblclick: () => {
      play(row.id);
    },
  };
};
const columns: DataTableColumns<Song.Detail> = [
  {
    title: '#',
    key: '',
    width: 30,
    render: (row, rowIndex) => {
      return h('span', {}, { default: () => rowIndex + props.prefixCount });
    },
  },
  {
    key: 'action',
    title: '操作',
    width: 40,
    render: (row) => {
      return h('div', { class: 'flex items-center gap1' }, [
        h('i', {
          class:
            'i-ri-heart-3-line cursor-pointer hover:text-rose5 active:text-rose6',
        }),
        h('i', {
          class:
            'i-ri-download-line cursor-pointer hover:text-rose5 active:text-rose6',
        }),
      ]);
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
    width: 80,
    ellipsis: {
      tooltip: true,
    },
    render: (row) => {
      return h(
        RouterLink,
        {
          to: `/al/${row.al.id}`,
          class: 'cursor-pointer hover:text-rose5 active:text-rose6',
        },
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
            RouterLink,
            {
              to: `/ar/${item.id}`,
              class: 'cursor-pointer hover:text-rose5 active:text-rose6',
            },
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
    width: 40,
    render: (row) => {
      let fee = {
        type: 'success',
        title: '免费',
      };
      if (row.fee === 1) fee = { type: 'error', title: 'VIP' };
      if (row.fee === 4) fee = { type: 'warning', title: '付费' };
      if (row.fee === 8) fee = { type: 'info', title: '普通' };
      return h(
        NTag,
        { bordered: false, size: 'small', type: fee.type },
        { default: () => fee.title },
      );
    },
  },
  {
    title: '时长',
    key: 'dt',
    width: 40,
    render: (row) => {
      return h(
        NTag,
        { bordered: false, size: 'small' },
        { default: () => (row.dt / 60000).toFixed(2) },
      );
    },
  },
];
</script>
<template>
  <n-data-table
    size="small"
    :row-props="rowProps"
    :columns="columns"
    :data="props.data"
    :loading="props.loading"
  />
</template>
<style scoped lang="less"></style>
