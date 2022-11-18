import { defineComponent, PropType } from 'vue';

export type IconName = 'add' | 'welcome1' | 'welcome2' | 'welcome3' | 'panda' | 'welcome4' | 'menu' | 'charts' | 'export' | 'notify' | 'left' | 'date' | 'notes'

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
      <svg onClick={onClick}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
    )
  }
})