import { send } from 'micro'
import match from 'micro-match'
import { parse } from 'url'

export default async (req, res) => {
  const path = parse(req.url).pathname
  const { id } = match('/users/:id', path)

  return send(res, 200, { id })
}
