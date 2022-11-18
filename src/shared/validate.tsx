interface FData {
  [k: string]: string | number | undefined | null | FData
}

type Rule<T> = {
  key: keyof T
  message: string
} & ({ type: "required" } | { type: "pattern"; regexp: RegExp })

type Rules<T> = Rule<T>[]

type Errors<T> = {
  [k in keyof T]?: string[]
}
export type { Rule, Rules, FData }

export const validate = <T extends FData>(formData: T, rules: Rules<T>) => {
  const errors: Errors<T> = {}
  rules.map(rule => {
    const { key, type, message } = rule
    const value = formData[key]
    switch (type) {
      case "required":
        if (isEmpty(value)) {
          errors[key] = errors[key] || []
          errors[key]?.push(message)
        }
        break
      case "pattern":
        if (!isEmpty(value) && !rule.regexp.test(value!.toString())) {
          errors[key] = errors[key] || []
          errors[key]?.push(message)
        }
        break
      default:
        return
    }
  })
  return errors
}

function isEmpty(value: null | undefined | string | number | FData) {
  return value === null || value === undefined || value === ''
}