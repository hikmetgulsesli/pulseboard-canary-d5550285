const STORAGE_KEY = 'pulseboard-canary-state';

export interface PersistedState {
  records: RecordItem[];
  preferences: Preferences;
  lastSavedAt: number | null;
}

export interface RecordItem {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'paused' | 'terminated';
  priority: 'low' | 'medium' | 'high';
  kind: 'incident' | 'task' | 'note';
  createdAt: number;
  updatedAt: number;
}

export interface Preferences {
  density: 'compact' | 'comfortable';
  notifications: boolean;
  filters: Filter[];
}

export interface Filter {
  id: string;
  field: string;
  value: string;
}

export function loadPersistedState(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedState;
    if (!parsed || typeof parsed !== 'object') return null;
    if (!Array.isArray(parsed.records)) return null;
    if (!parsed.preferences || typeof parsed.preferences !== 'object') return null;
    if (!Array.isArray(parsed.preferences.filters)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function savePersistedState(state: PersistedState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable in some environments; ignore silently.
  }
}

export function clearPersistedState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
