export type AgendaStatus = 'ready' | 'hold' | 'cancel' | 'pending';

export interface AgendaItem {
  id: string;
  title: string;
  stakeholders: string[];
  duration: string;
  materials: string[];
  status: AgendaStatus;
  time: string;
  isCurrent?: boolean;
  memo?: string;
}

export interface DaySummary {
  id: string;
  date: string;
  dayName: string;
  taskCount: number;
  topTask: string;
}
