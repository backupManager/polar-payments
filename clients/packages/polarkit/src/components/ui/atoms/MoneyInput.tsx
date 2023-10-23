import { getCentsInDollarString } from 'polarkit/money'
import { ChangeEvent, FocusEvent } from 'react'
import { twMerge } from 'tailwind-merge'
import { Input } from '.'

interface Props {
  id: string
  name: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: number
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  value?: number
  className?: string
  onAmountChangeInCents?: (cents: number) => void
}

const getCents = (event: ChangeEvent<HTMLInputElement>) => {
  let newAmount = parseInt(event.target.value)
  if (isNaN(newAmount)) {
    newAmount = 0
  }
  const amountInCents = newAmount * 100
  return amountInCents
}

const MoneyInput = (props: Props) => {
  let { id, name } = props

  let other: {
    value?: string
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  } = {}
  if (props.value && props.value > 0) {
    other.value = getCentsInDollarString(props.value)
  } else {
    other.value = ''
  }
  other.onBlur = props.onBlur
  other.onFocus = props.onFocus

  const onChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e)
    }

    if (props.onAmountChangeInCents) {
      props.onAmountChangeInCents(getCents(e))
    }
  }

  return (
    <>
      <div className={twMerge('relative')}>
        <Input
          type="text"
          id={id}
          name={name}
          className={twMerge(
            'block w-full px-4 pl-8 text-base',
            props.className ?? '',
          )}
          onChange={onChanged}
          placeholder={getCentsInDollarString(props.placeholder)}
          {...other}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-lg">
          <span className="dark:text-polar-400 text-gray-500">$</span>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-sm">
          <span className="dark:text-polar-400 text-gray-500">USD</span>
        </div>
      </div>
    </>
  )
}

export default MoneyInput
