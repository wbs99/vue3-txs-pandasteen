import { defineComponent } from 'vue';
import welcome3 from '../../assets/icons/welcome3.svg'
import s from './welcome.module.scss'

export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.card}>
        <img class={s.icon} src={welcome3} />
        <h2>每日提醒<br />不遗漏每一笔账单</h2>
      </div>
    )
  }
})