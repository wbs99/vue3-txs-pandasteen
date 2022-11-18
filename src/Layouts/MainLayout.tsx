import { defineComponent } from 'vue';
import { Navbar } from '../components/NavBar';
import s from './MainLayout.module.scss'

export const MainLayout = defineComponent({
  setup: (props, { slots }) => {
    return () => (
      <div class={s.wrapper} >
        <Navbar class={s.nav}>
          {{
            title: () => slots.title?.(),
            icon: () => slots.icon?.()
          }}
        </Navbar>
        {slots.default?.()}
      </div>
    )
  }
})