import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import type { Dispatch, ReactNode } from 'react';
import {
  clearPersistedState,
  loadPersistedState,
  savePersistedState,
  type Preferences,
  type RecordItem,
} from './pulseboard-canary.repo';
import { defaultPreferences, sampleRecords } from '../../__fixtures__/pulseboard-canary.fixture';

declare global {
  interface Window {
    app: { state: AppState; actions: AppActions; dispatch: Dispatch<AppAction> };
  }
  // eslint-disable-next-line no-var
  var app: { state: AppState; actions: AppActions; dispatch: React.Dispatch<AppAction> };
}

export type View = 'operations' | 'editor' | 'settings' | 'recovery';

export interface AppState {
  view: View;
  records: RecordItem[];
  draft: Partial<RecordItem> | null;
  selectedRecordId: string | null;
  preferences: Preferences;
  loading: boolean;
  error: string | null;
  now: number;
  lastSavedAt: number | null;
}

export const initialAppState: AppState = {
  view: 'operations',
  records: sampleRecords,
  draft: null,
  selectedRecordId: null,
  preferences: defaultPreferences,
  loading: false,
  error: null,
  now: Date.now(),
  lastSavedAt: null,
};

export type AppAction =
  | { type: 'hydrate'; payload: Partial<AppState> }
  | { type: 'set-view'; view: View }
  | { type: 'tick'; now: number }
  | { type: 'new-record' }
  | { type: 'edit-record'; id: string }
  | { type: 'update-draft'; draft: Partial<RecordItem> }
  | { type: 'save-record' }
  | { type: 'discard-record' }
  | { type: 'cancel-record' }
  | { type: 'pause-record'; id: string }
  | { type: 'terminate-record'; id: string }
  | { type: 'retry-load' }
  | { type: 'clear-filters' }
  | { type: 'clear-error' }
  | { type: 'reset-preferences' }
  | { type: 'save-preferences' }
  | { type: 'add-filter'; field: string; value: string }
  | { type: 'remove-filter'; id: string }
  | { type: 'set-loading'; loading: boolean }
  | { type: 'set-error'; error: string | null }
  | { type: 'reset-state' };

function makeId(): string {
  return `rec-${Math.random().toString(36).slice(2, 9)}`;
}

function initAppState(): AppState {
  const persisted = loadPersistedState();
  if (persisted) {
    return {
      ...initialAppState,
      records: persisted.records,
      preferences: persisted.preferences,
      lastSavedAt: persisted.lastSavedAt,
      now: Date.now(),
    };
  }
  return { ...initialAppState, now: Date.now() };
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'hydrate':
      return { ...state, ...action.payload };

    case 'set-view':
      return { ...state, view: action.view, error: null };

    case 'tick':
      return { ...state, now: action.now };

    case 'new-record': {
      const newRecord: RecordItem = {
        id: makeId(),
        title: '',
        description: '',
        status: 'active',
        priority: 'medium',
        kind: 'task',
        createdAt: state.now,
        updatedAt: state.now,
      };
      return {
        ...state,
        draft: newRecord,
        selectedRecordId: null,
        view: 'editor',
        error: null,
      };
    }

    case 'edit-record': {
      const record = state.records.find((r) => r.id === action.id);
      if (!record) return state;
      return {
        ...state,
        draft: { ...record },
        selectedRecordId: record.id,
        view: 'editor',
        error: null,
      };
    }

    case 'update-draft':
      return { ...state, draft: { ...state.draft, ...action.draft } };

    case 'save-record': {
      if (!state.draft || !state.draft.title) return state;
      const now = state.now;
      const existing = state.records.find((r) => r.id === state.draft?.id);
      const record: RecordItem = {
        id: existing ? existing.id : makeId(),
        title: state.draft.title || 'Untitled record',
        description: state.draft.description || '',
        status: (state.draft.status as RecordItem['status']) || 'active',
        priority: (state.draft.priority as RecordItem['priority']) || 'medium',
        kind: (state.draft.kind as RecordItem['kind']) || 'task',
        createdAt: existing ? existing.createdAt : now,
        updatedAt: now,
      };
      const records = existing
        ? state.records.map((r) => (r.id === record.id ? record : r))
        : [record, ...state.records];
      return {
        ...state,
        records,
        draft: null,
        selectedRecordId: record.id,
        view: 'operations',
        lastSavedAt: now,
        error: null,
      };
    }

    case 'discard-record':
      return {
        ...state,
        draft: null,
        selectedRecordId: null,
        view: 'operations',
        error: null,
      };

    case 'cancel-record':
      return {
        ...state,
        draft: null,
        selectedRecordId: null,
        view: 'operations',
        error: null,
      };

    case 'pause-record': {
      const hasActiveRecord = state.records.some((r) => r.id === action.id && r.status === 'active');
      if (!hasActiveRecord) return state;
      const records = state.records.map((r) =>
        r.id === action.id && r.status === 'active'
          ? { ...r, status: 'paused' as const, updatedAt: state.now }
          : r,
      );
      return { ...state, records, lastSavedAt: state.now };
    }

    case 'terminate-record': {
      const hasMutableRecord = state.records.some(
        (r) => r.id === action.id && r.status !== 'terminated',
      );
      if (!hasMutableRecord) return state;
      const records = state.records.map((r) =>
        r.id === action.id && r.status !== 'terminated'
          ? { ...r, status: 'terminated' as const, updatedAt: state.now }
          : r,
      );
      return { ...state, records, lastSavedAt: state.now };
    }

    case 'retry-load':
      return { ...state, loading: true, error: null };

    case 'clear-filters':
      return {
        ...state,
        preferences: { ...state.preferences, filters: [] },
        error: null,
      };

    case 'clear-error':
      return { ...state, error: null };

    case 'reset-preferences':
      return { ...state, preferences: defaultPreferences };

    case 'save-preferences':
      return { ...state, lastSavedAt: state.now };

    case 'add-filter': {
      const filter = {
        id: `flt-${Math.random().toString(36).slice(2, 9)}`,
        field: action.field,
        value: action.value,
      };
      return {
        ...state,
        preferences: {
          ...state.preferences,
          filters: [...state.preferences.filters, filter],
        },
      };
    }

    case 'remove-filter': {
      const exists = state.preferences.filters.some((f) => f.id === action.id);
      if (!exists) return state;
      return {
        ...state,
        preferences: {
          ...state.preferences,
          filters: state.preferences.filters.filter((f) => f.id !== action.id),
        },
      };
    }

    case 'set-loading':
      return { ...state, loading: action.loading };

    case 'set-error':
      return { ...state, error: action.error };

    case 'reset-state':
      clearPersistedState();
      return { ...initialAppState, now: Date.now() };

    default:
      return state;
  }
}

export interface AppActions {
  setView: (view: View) => void;
  tick: (now: number) => void;
  newRecord: () => void;
  editRecord: (id: string) => void;
  updateDraft: (draft: Partial<RecordItem>) => void;
  saveRecord: () => void;
  discardRecord: () => void;
  cancelRecord: () => void;
  pauseRecord: (id: string) => void;
  terminateRecord: (id: string) => void;
  retryLoad: () => void;
  clearFilters: () => void;
  clearError: () => void;
  resetPreferences: () => void;
  savePreferences: () => void;
  addFilter: (field: string, value: string) => void;
  removeFilter: (id: string) => void;
  resetState: () => void;
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  actions: AppActions;
}

const AppContext = createContext<AppContextValue | null>(null);

export function PulseboardCanaryProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, undefined, initAppState);
  const actions: AppActions = useMemo(
    () => ({
      setView: (view) => dispatch({ type: 'set-view', view }),
      tick: (now) => dispatch({ type: 'tick', now }),
      newRecord: () => dispatch({ type: 'new-record' }),
      editRecord: (id) => dispatch({ type: 'edit-record', id }),
      updateDraft: (draft) => dispatch({ type: 'update-draft', draft }),
      saveRecord: () => dispatch({ type: 'save-record' }),
      discardRecord: () => dispatch({ type: 'discard-record' }),
      cancelRecord: () => dispatch({ type: 'cancel-record' }),
      pauseRecord: (id) => dispatch({ type: 'pause-record', id }),
      terminateRecord: (id) => dispatch({ type: 'terminate-record', id }),
      retryLoad: () => dispatch({ type: 'retry-load' }),
      clearFilters: () => dispatch({ type: 'clear-filters' }),
      clearError: () => dispatch({ type: 'clear-error' }),
      resetPreferences: () => dispatch({ type: 'reset-preferences' }),
      savePreferences: () => dispatch({ type: 'save-preferences' }),
      addFilter: (field, value) => dispatch({ type: 'add-filter', field, value }),
      removeFilter: (id) => dispatch({ type: 'remove-filter', id }),
      resetState: () => dispatch({ type: 'reset-state' }),
    }),
    [],
  );

  // Scheduled runtime loop that dispatches a tick action.
  useEffect(() => {
    const handle = globalThis.setInterval(() => {
      dispatch({ type: 'tick', now: Date.now() });
    }, 1000);
    return () => globalThis.clearInterval(handle);
  }, []);

  // Persist records and preferences whenever they change.
  useEffect(() => {
    savePersistedState({
      records: state.records,
      preferences: state.preferences,
      lastSavedAt: state.lastSavedAt,
    });
  }, [state.records, state.preferences, state.lastSavedAt]);

  // Expose live runtime state and actions for orchestrator evidence.
  const runtimeRef = useRef<AppContextValue | null>(null);
  const value = useMemo<AppContextValue>(() => ({ state, dispatch, actions }), [state, actions]);
  runtimeRef.current = value;

  useEffect(() => {
    const exposed = {
      get state() {
        return runtimeRef.current?.state ?? state;
      },
      get actions() {
        return runtimeRef.current?.actions ?? actions;
      },
      get dispatch() {
        return runtimeRef.current?.dispatch ?? dispatch;
      },
    };
    globalThis.app = exposed;
    window.app = exposed;
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function usePulseboardCanary(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('usePulseboardCanary must be used within PulseboardCanaryProvider');
  }
  return ctx;
}

export function usePulseboardCanaryActions(): AppActions {
  return usePulseboardCanary().actions;
}
