import { defineComponent } from 'vue'
import welcome4 from '../../assets/icons/welcome4.svg'
import s from './welcome.module.scss'

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.card}>
        <img src={welcome4} />
        <h2>每日提醒<br />不遗漏每一笔账单</h2>
      </div>
    )
  }
})