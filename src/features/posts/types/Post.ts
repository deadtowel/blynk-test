import type { Comment } from "./Comment"

export type Post = {
  name: string
  id: string
  comments: Comment[]
  active: boolean
}
