import { defineComponent, PropType } from 'vue';
import s from './Center.module.scss';

export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    }
  },
  setup: (props, { slots }) => {
    const { direction } = props
    return () => (
      <div class={[s.center, direction]}>
        {slots.default?.()}
      </div>
    )
  }
})