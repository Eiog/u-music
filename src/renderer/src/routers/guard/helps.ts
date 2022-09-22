import { loginApi } from '~/api';
import { storeToRefs } from 'pinia';
import NProgress from 'nprogress';
import { RouteLocation } from 'vue-router';
import { useTitle } from '@vueuse/core';
const { refresh, status, anonimous } = loginApi;
export const refreshStatus = async () => {
  const { refreshed } = storeToRefs(useAppStore());
  if (refreshed.value) return;
  try {
    await status();
    refreshed.value = true;
  } catch (error) {
    await anonimous();
  }
  return;
};

/**使用进度条 */
export function useNProgress() {
  /**进度条开始 */
  function start() {
    if (!NProgress.isStarted()) {
      NProgress.start();
    }
  }
  /**进度条结束 */
  function done() {
    NProgress.done();
  }
  return { start, done };
}
export function useChangeTitle(to: RouteLocation) {
  const title = useTitle();
  const envTitle = import.meta.env.VITE_APP_TITLE || '';
  title.value = (to.meta.title ?? envTitle) as string;
}
