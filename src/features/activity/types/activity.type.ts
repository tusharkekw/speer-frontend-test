export type CallData = {
  id: string;
  created_at: string;
  direction: 'inbound' | 'outbound';
  from: number;
  to: number;
  via: number;
  duration: number;
  is_archived: boolean;
  call_type: 'missed' | 'answered' | 'voicemail';
};
