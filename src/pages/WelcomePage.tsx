import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import { useSwiper } from '../hooks/useSwiper';
import s from './Welcome.module.scss'

export const WelcomePage = defineComponent({

  setup: (props, context) => {
    const mainRef = ref<HTMLElement | null>(null)
    const { direction } = useSwiper(mainRef)
    watchEffect(() => {
      console.log('direction')
      console.log(direction.value)
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