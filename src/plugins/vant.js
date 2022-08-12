// vant

import { Button, Swipe, SwipeItem } from 'vant'

const plugins = [Button, Swipe, SwipeItem]

export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}
