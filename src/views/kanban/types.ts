import { Column, Record } from '@axelor/ui/kanban';

export interface KanbanRecord extends Record {
  name?: string;
  text?: string;
  [k: string]: any;
}

export interface KanbanColumn extends Column {
  name: string;
  pageCount?: number;
  collapsed?: boolean;
  loading?: boolean;
  records?: KanbanRecord[];
  canEdit?: boolean;
  canDelete?: boolean;
  canCreate?: boolean;
}
