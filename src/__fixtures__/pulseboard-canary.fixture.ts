import type { Filter, Preferences, RecordItem } from '../features/pulseboard-canary/pulseboard-canary.repo';

export const sampleRecords: RecordItem[] = [
  {
    id: 'rec-001',
    title: 'Canary heartbeat latency spike',
    description: 'Observed elevated p99 latency on the east cluster pulse endpoint.',
    status: 'active',
    priority: 'high',
    kind: 'incident',
    createdAt: Date.now() - 1000 * 60 * 30,
    updatedAt: Date.now() - 1000 * 60 * 5,
  },
  {
    id: 'rec-002',
    title: 'Refresh dependency audit',
    description: 'Quarterly review of third-party dependencies for the canary pipeline.',
    status: 'paused',
    priority: 'medium',
    kind: 'task',
    createdAt: Date.now() - 1000 * 60 * 60 * 4,
    updatedAt: Date.now() - 1000 * 60 * 60 * 2,
  },
  {
    id: 'rec-003',
    title: 'Post-mortem notes: cache stampede',
    description: 'Draft notes from last week’s cache stampede incident.',
    status: 'terminated',
    priority: 'low',
    kind: 'note',
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
    updatedAt: Date.now() - 1000 * 60 * 60 * 20,
  },
];

export const defaultPreferences: Preferences = {
  density: 'comfortable',
  notifications: true,
  filters: [
    { id: 'flt-001', field: 'status', value: 'active' },
    { id: 'flt-002', field: 'priority', value: 'high' },
  ],
};

export const sampleFilters: Filter[] = [
  { id: 'flt-003', field: 'kind', value: 'incident' },
  { id: 'flt-004', field: 'priority', value: 'medium' },
];
