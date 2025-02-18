export interface Root {
  product: Product
  order: Order
  customer: Customer2
  inventory_level: InventoryLevel
}

export interface Product {
  title: string
  body_html: string
  vendor: string
  product_type: string
  status: string
  tags: string[]
  variants: Variant[]
  options: Option[]
  images: Image[]
}

export interface Variant {
  price: string
  sku: string
  inventory_quantity: number
  option1: string
  option2: string
}

export interface Option {
  name: string
  values: string[]
}

export interface Image {
  src: string
  position: number
  alt: string
}

export interface Order {
  email: string
  fulfillment_status: string
  line_items: LineItem[]
  customer: Customer
  shipping_address: ShippingAddress
  financial_status: string
  total_price: string
  currency: string
}

export interface LineItem {
  variant_id: number
  quantity: number
  price: string
}

export interface Customer {
  first_name: string
  last_name: string
  email: string
}

export interface ShippingAddress {
  first_name: string
  last_name: string
  address1: string
  city: string
  province: string
  zip: string
  country: string
  phone: string
}

export interface Customer2 {
  first_name: string
  last_name: string
  email: string
  phone: string
  verified_email: boolean
  addresses: Address[]
  accepts_marketing: boolean
  tags: string[]
}

export interface Address {
  address1: string
  city: string
  province: string
  zip: string
  country: string
  default: boolean
}

export interface InventoryLevel {
  inventory_item_id: number
  location_id: number
  available: number
  updated_at: string
}
