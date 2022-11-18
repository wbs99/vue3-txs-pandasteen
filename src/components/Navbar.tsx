import { defineComponent, PropType } from 'vue';
import s from './Navbar.module.scss';
export const Navbar = defineComponent({
  setup: (props, { slots }) => {
    return () => (
      <div class={s.navbar}>
        <span class={s.icon_wrapper}>
          {slots.icon?.()}
        </span>
        <span class={s.title_wrapper}>
          {slots.title?.()}
        </span>
      </div>
    )
  }
})