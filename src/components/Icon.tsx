import { defineComponent, PropType } from 'vue';
import s from './Icon.module.scss'

export type IconName = 'add' | 'welcome1' | 'welcome2' | 'welcome3' | 'panda' | 'welcome4'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    }
  },
  setup: (props, context) => {
    const { name } = props
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
    )
  }
})