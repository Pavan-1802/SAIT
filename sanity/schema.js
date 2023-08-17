import blockContent from './schemas/blockContent'
import category from './schemas/category'
import event from './schemas/event'
import author from './schemas/author'
import executive from './schemas/executive'
import alumni from './schemas/alumni'
import hostel from './schemas/hostel'

export const schema = {
  types: [event, author, category, blockContent,executive,alumni,hostel],
}
