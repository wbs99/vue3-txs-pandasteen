import { DatetimePicker, Popup } from 'vant';
import { computed, defineComponent, PropType, ref } from 'vue';
import { Time } from '../shared/time';
import { EmojiSelect } from './EmojiSelect';


import s from './Form.module.scss';
export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    }
  },
  setup: (props, { slots }) => {
    const { onSubmit } = props
    return () => (
      <form class={s.form} onSubmit={onSubmit}>
        {slots.default?.()}
      </form>
    )
  }
})

export const FormItem = defineComponent({
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: [String, Number]
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'date'>,
    },
    error: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  setup: (props, { emit, slots }) => {
    const refDateVisible = ref(false)
    const { type, label, modelValue, error } = props
    const content = computed(() => {
      switch (type) {
        case 'text':
          return <input
            value={modelValue}
            onInput={(e: any) => emit('update:modelValue', e.target.value)}
            class={[s.formItem, s.input, s.error]} />
        case 'emojiSelect':
          return <EmojiSelect
            modelValue={modelValue?.toString()}
            onUpdateModelValue={value => emit('update:modelValue', value)}
            class={[s.formItem, s.emojiList, s.error]} />
        case 'date':
          return <>
            <input readonly={true} value={modelValue}
              onClick={() => { refDateVisible.value = true }}
              class={[s.formItem, s.input]} />
            <Popup position='bottom' v-model:show={refDateVisible.value}>
              <DatetimePicker value={modelValue} type="date" title="选择年月日"
                onConfirm={(date: Date) => {
                  emit('update:modelValue', new Time(date).format())
                  refDateVisible.value = false
                }}
                onCancel={() => refDateVisible.value = false} />
            </Popup></>
        case undefined:
          return slots.default?.()
      }
    })
    return () => {
      return <div class={s.formRow}>
        <label class={s.formLabel}>
          {label &&
            <span class={s.formItem_name}>{label}</span>
          }
          <div class={s.formItem_value}>
            {content.value}
          </div>
          {error &&
            <div class={s.formItem_errorHint}>
              <span>{error}</span>
            </div>
          }
        </label>
      </div>
    }
  }
})