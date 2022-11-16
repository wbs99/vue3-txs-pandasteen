import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import welcome2 from '../../assets/icons/welcome2.svg'
import s from './First.module.scss'


export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img class={s.icon} src={welcome2} />,
          title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
            <RouterLink to="/welcome/3" >下一页</RouterLink>
            <RouterLink to="/start" >跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})