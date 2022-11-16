import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/panda.svg'

export const WelcomePage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="logo" />
          <h1>熊猫记账</h1>
        </header>
        <main class={s.main}> <RouterView /></main>
      </div>
    )
  }
})