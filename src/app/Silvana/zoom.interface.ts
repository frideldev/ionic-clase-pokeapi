export interface Root {
    page_count: number
    page_number: number
    page_size: number
    total_records: number
    next_page_token: string
    meetings: Meeting[]
  }
  
  export interface Meeting {
    id: number
    topic: string
    start_time: string
    duration: number
    timezone: string
    created_at: string
    join_url: string
  }