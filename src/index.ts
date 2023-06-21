import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { proxy } from '@abcnews/dev-proxy';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import type { Mount } from '@abcnews/mount-utils';
import App from './components/OceanGrid.svelte';

let appMountEl: Mount;
let appProps;

Promise.all([proxy('titanic-submersible'), whenOdysseyLoaded]).then(() => {
  [appMountEl] = selectMounts('titanic-submersible');

  if (appMountEl) {
    appProps = acto(getMountValue(appMountEl));
    new App({
      target: appMountEl,
      props: appProps
    });
  }
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[The Deep] public path: ${__webpack_public_path__}`);
}
