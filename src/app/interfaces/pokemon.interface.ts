export interface Root {
    name: string
    id: number
    height: number
    weight: number
    types: Type[]
  }
  
  export interface Type {
    type: Type2
  }
  
  export interface Type2 {
    name: string
  }
  