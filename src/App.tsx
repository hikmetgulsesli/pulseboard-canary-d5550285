import {
  PulseboardCanaryProvider,
  usePulseboardCanary,
  usePulseboardCanaryActions,
  type View,
} from './features/pulseboard-canary/pulseboard-canary.store';
import type { ReactNode } from 'react';
import {
  EmptyAndErrorRecoveryPulseboardCanary,
  RecordEditorPulseboardCanary,
  RecordOperationsPulseboardCanary,
  SettingsAndPreferencesPulseboardCanary,
  type EmptyAndErrorRecoveryPulseboardCanaryActionId,
  type RecordEditorPulseboardCanaryActionId,
  type RecordOperationsPulseboardCanaryActionId,
  type SettingsAndPreferencesPulseboardCanaryActionId,
} from './screens';

function Shell() {
  const { state } = usePulseboardCanary();
  const actions = usePulseboardCanaryActions();

  const navigate = (view: View) => () => actions.setView(view);

  const operationsActions: Partial<Record<RecordOperationsPulseboardCanaryActionId, () => void>> = {
    'operations-1': navigate('operations'),
    'editor-2': navigate('editor'),
    'settings-3': navigate('settings'),
    'recovery-4': navigate('recovery'),
    'support-5': navigate('operations'),
    'logs-6': navigate('operations'),
    'new-record-1': actions.newRecord,
    'retry-load-4': actions.retryLoad,
    'edit-5': () => actions.editRecord(state.records[0]?.id ?? ''),
    'edit-6': () => actions.editRecord(state.records[1]?.id ?? ''),
    'edit-7': () => actions.editRecord(state.records[2]?.id ?? ''),
    'edit-8': () => actions.editRecord(state.records[0]?.id ?? ''),
    'edit-9': () => actions.editRecord(state.records[1]?.id ?? ''),
    'close-10': navigate('operations'),
    'pause-11': () => actions.pauseRecord(state.records[0]?.id ?? ''),
    'terminate-12': () => actions.terminateRecord(state.records[0]?.id ?? ''),
  };

  const editorActions: Partial<Record<RecordEditorPulseboardCanaryActionId, () => void>> = {
    'operations-1': navigate('operations'),
    'editor-2': navigate('editor'),
    'settings-3': navigate('settings'),
    'recovery-4': navigate('recovery'),
    'support-5': navigate('operations'),
    'logs-6': navigate('operations'),
    'operations-7': navigate('operations'),
    'new-record-1': actions.newRecord,
    'discard-4': actions.discardRecord,
    'save-now-5': actions.saveRecord,
    'cancel-6': actions.cancelRecord,
    'save-record-7': actions.saveRecord,
  };

  const settingsActions: Partial<Record<SettingsAndPreferencesPulseboardCanaryActionId, () => void>> = {
    'operations-1': navigate('operations'),
    'editor-2': navigate('editor'),
    'settings-3': navigate('settings'),
    'recovery-4': navigate('recovery'),
    'support-5': navigate('operations'),
    'logs-6': navigate('operations'),
    'new-record-1': actions.newRecord,
    'reset-to-defaults-4': actions.resetPreferences,
    'save-preferences-5': actions.savePreferences,
    'add-filter-6': () => actions.addFilter('status', 'active'),
    'edit-7': () => {},
    'delete-8': () => {
      const first = state.preferences.filters[0];
      if (first) actions.removeFilter(first.id);
    },
    'edit-9': () => {},
    'delete-10': () => {
      const second = state.preferences.filters[1];
      if (second) actions.removeFilter(second.id);
    },
    'edit-11': () => {},
    'delete-12': () => {
      const third = state.preferences.filters[2];
      if (third) actions.removeFilter(third.id);
    },
  };

  const recoveryActions: Partial<Record<EmptyAndErrorRecoveryPulseboardCanaryActionId, () => void>> = {
    'operations-1': navigate('operations'),
    'editor-2': navigate('editor'),
    'settings-3': navigate('settings'),
    'recovery-4': navigate('recovery'),
    'support-5': navigate('operations'),
    'logs-6': navigate('operations'),
    'new-record-1': actions.newRecord,
    'menu-2': navigate('operations'),
    'retry-load-5': actions.retryLoad,
    'clear-filters-6': actions.clearFilters,
  };

  let screen: ReactNode;
  switch (state.view) {
    case 'editor':
      screen = <RecordEditorPulseboardCanary actions={editorActions} />;
      break;
    case 'settings':
      screen = <SettingsAndPreferencesPulseboardCanary actions={settingsActions} />;
      break;
    case 'recovery':
      screen = <EmptyAndErrorRecoveryPulseboardCanary actions={recoveryActions} />;
      break;
    case 'operations':
    default:
      screen = <RecordOperationsPulseboardCanary actions={operationsActions} />;
      break;
  }

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative h-screen w-full overflow-hidden flex bg-slate-50 text-slate-950"
    >
      {screen}
    </div>
  );
}

export default function App() {
  return (
    <PulseboardCanaryProvider>
      <Shell />
    </PulseboardCanaryProvider>
  );
}
