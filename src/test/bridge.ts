import { clearPersistedState } from '../features/pulseboard-canary/pulseboard-canary.repo';
import type { AppActions, AppState } from '../features/pulseboard-canary/pulseboard-canary.store';

export interface AppBridge {
  state: AppState;
  actions: AppActions;
}

export function getAppBridge(): AppBridge | undefined {
  return (globalThis as unknown as { app?: AppBridge }).app;
}

export function resetTestPersistence(): void {
  clearPersistedState();
}
