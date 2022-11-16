import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import { useSwiper } from '../hooks/useSwiper';
import { throttle } from '../shared/throttle';
import s from './Welcome.module.scss'

export const WelcomePage = defineComponent({

  setup: (props, context) => {
    const mainRef = ref<HTMLElement>()
    const { direction } = useSwiper(mainRef)
    const route = useRoute()
    const router = useRouter()
    const routerMap: Record<string, string> = {
      'Welcome1': '/welcome/2',
      'Welcome2': '/welcome/3',
      'Welcome3': '/welcome/4',
      'Welcome4': '/start',
    }
    const push = throttle(() => {
      const name = (route.name || 'Welcome1').toString()
      router.push(routerMap[name])
    }, 500)

    watchEffect(() => {
      if (direction.value === 'left') {
        push()
      }
    })
    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref='#panda'></use>
          </svg>
          <h1>熊猫记账</h1>
        </header>
        <main class={s.main} ref={mainRef}>
          <RouterView name='main'>
            {({ Component: X, route: R }: { Component: VNode; route: RouteLocationNormalizedLoaded }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    )
  }
})