import { defineComponent } from 'vue';
import welcome2 from '../../assets/icons/welcome2.svg'
import s from './welcome.module.scss'


export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.card}>
        <img class={s.icon} src={welcome2} />
        <h2>每日提醒<br />不遗漏每一笔账单</h2>
      </div>
    )
  }
})