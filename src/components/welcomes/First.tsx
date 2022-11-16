import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import s from './First.module.scss'
import welcome1 from '../../assets/icons/welcome1.svg'
import { WelcomeLayout } from './WelcomeLayout';


export const First = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={welcome1} />,
      title: () => <h2>会挣钱<br />还会省钱</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        <RouterLink to="/welcome/2" >下一页</RouterLink>
        <RouterLink to="/start" >跳过</RouterLink>
      </>
    }
    return () => (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})