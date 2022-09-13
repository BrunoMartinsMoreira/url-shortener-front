export interface UrlType {
  id: string;
  original_url: string;
  short_url?: string;
  created_at: string;
  clicks: number | string;
  last_click_date: string | null;
  status?: number;
  message?: string;
}

export interface urlError {
  status: number;
  message: string;
}
