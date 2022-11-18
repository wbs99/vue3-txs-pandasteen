import { computed, defineComponent, PropType } from 'vue';
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
  setup: (props, context) => {
    const { type, label, modelValue, error } = props
    const content = computed(() => {
      switch (type) {
        case 'text':
          return <input
            value={modelValue}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
            class={[s.formItem, s.input, s.error]} />
        case 'emojiSelect':
          return <EmojiSelect
            modelValue={modelValue?.toString()}
            onUpdateModelValue={value => context.emit('update:modelValue', value)}
            class={[s.formItem, s.emojiList, s.error]} />
        case 'date':
          return <input />
        case undefined:
          return context.slots.default?.()
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