export type Root = Root2[]

export interface Root2 {
  id: string
  url: string
  breeds: Breed[]
}

export interface Breed {
  name: string
}
