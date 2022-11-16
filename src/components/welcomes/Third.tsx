import { defineComponent } from 'vue';
import s from './welcome.module.scss'

export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.card}>
        <svg>
          <use xlinkHref='#welcome3'></use>
        </svg>
        <h2>每日提醒<br />不遗漏每一笔账单</h2>
      </div>
    )
  }
})