// can make database calls here
import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
  // req.query.id OR destructure above
  const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `your article with id : ${id} has not been found` })
  }
}
