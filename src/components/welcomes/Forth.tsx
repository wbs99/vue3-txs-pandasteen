import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import welcome4 from '../../assets/icons/welcome4.svg'
import s from './First.module.scss'

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img class={s.icon} src={welcome4} />,
          title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
            <RouterLink to="/start" >完成</RouterLink>
            <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})