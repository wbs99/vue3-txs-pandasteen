import { computed, onMounted, onUnmounted, ref, Ref } from "vue"

export const useSwiper = (element: Ref<HTMLElement | null>) => {
  type Point = { x: number; y: number }

  const start = ref<Point | null>(null)
  const end = ref<Point | null>(null)
  const moving = ref(false)
  const distance = computed(() => {
    if (!start.value || !end.value) { return }
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y,
    }
  })
  const direction = computed(() => {
    if (!moving) { return "" }
    if (!distance.value) { return "" }
    const { x, y } = distance.value
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? "right" : "left"
    } else {
      return y > 0 ? "down" : "up"
    }
  })

  const onTouchStart = (e: TouchEvent) => {
    start.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    }
    end.value = null
    moving.value = true
  }
  const onMoving = (e: TouchEvent) => {
    end.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    }
  }
  const onTouchEnd = (e: TouchEvent) => {
    start.value = null
    end.value = null
    moving.value = false
  }

  onMounted(() => {
    if (!element.value) { return }
    element.value.addEventListener("touchstart", onTouchStart)
    element.value.addEventListener("touchmove", onMoving)
    element.value.addEventListener("touchend", onTouchEnd)
  })
  onUnmounted(() => {
    if (!element.value) { return }
    element.value.removeEventListener("touchstart", onTouchStart)
    element.value.removeEventListener("touchmove", onMoving)
    element.value.removeEventListener("touchend", onTouchEnd)
  })
  return { direction }
}