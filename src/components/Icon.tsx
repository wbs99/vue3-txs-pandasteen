import { defineComponent, PropType } from 'vue';
import s from './Icon.module.scss'

export type IconName = 'add' | 'welcome1' | 'welcome2' | 'welcome3' | 'panda' | 'welcome4' | 'menu'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    const { name, onClick } = props
    return () => (
      <svg class={s.icon} onClick={onClick}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
    )
  }
})