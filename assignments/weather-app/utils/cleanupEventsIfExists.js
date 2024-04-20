const activeListeners = {};

export function storeToActiveListeneres(id, listener) {
  activeListeners[id] = listener;
}

export function removeListenerIfExists(id) {
  activeListeners[id]?.();
  delete activeListeners[id];
}

export default function cleanupEventsIfExists(ComponentInvoked) {
  const { el, cleanups, EL_DATA_ID } = ComponentInvoked;
  console.log('🚀 ~ cleanupEventsIfExists ~ EL_DATA_ID:', EL_DATA_ID);

  if (document.querySelector(`[${EL_DATA_ID}]`)) {
    cleanups.forEach((cleanup) => cleanup());
  }

  return el();
}
