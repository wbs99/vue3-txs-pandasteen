import { defineComponent } from 'vue';
import s from './Button.module.scss'

interface Props {
  onClick?: (e: MouseEvent) => void
}

export const Button = defineComponent<Props>({
  setup: (props, { slots }) => {
    return () => (
      <button class={s.button}>
        {slots.default?.()}
      </button>
    )
  }
})