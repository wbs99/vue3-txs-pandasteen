import { defineComponent } from 'vue';
import s from './welcome.module.scss'
import welcome1 from '../../assets/icons/welcome1.svg'


export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.card}>
        <img src={welcome1} />
        <h2>会挣钱<br />还会省钱</h2>
      </div>
    )
  }
})