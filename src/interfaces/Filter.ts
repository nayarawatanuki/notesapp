// src/interfaces/filter.ts
export type Filter =
  | { type: 'all' }
  | { type: 'archived' }
  | { type: 'tag'; value: string };