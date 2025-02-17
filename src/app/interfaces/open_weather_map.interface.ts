export interface Root {
    weather: Weather[]
    main: Main
    wind: Wind
    name: string
  }
  
  export interface Weather {
    description: string
  }
  
  export interface Main {
    temp: number
    humidity: number
  }
  
  export interface Wind {
    speed: number
  }
  