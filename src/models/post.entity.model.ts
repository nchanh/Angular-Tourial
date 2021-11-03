export class PostEntityModel {
  id: number
  title: string
  slug: string
  content: string
  short_description: string
  thumbnail: string
  views: number
  status: number
  category_id: number
  user_id: number
  deleted_at: string
  updated_at: string
  created_at: string
  category: {
    name_en: string
  }
  user: object
}
