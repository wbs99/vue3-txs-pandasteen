import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import welcome3 from '../../assets/icons/welcome3.svg'
import s from './First.module.scss'

export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img class={s.icon} src={welcome3} />,
          title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
            <RouterLink to="/welcome/4" >下一页</RouterLink>
            <RouterLink to="/start" >跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})