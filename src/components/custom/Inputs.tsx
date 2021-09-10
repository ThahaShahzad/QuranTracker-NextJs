import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface TextInputProps {
  styleType?: 'primary' | 'primary-i'
  shape?: 'square' | 'round' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  type?: 'text' | 'email'
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  register: UseFormRegister<any>
}
const TextInput = ({
  styleType = 'primary',
  size = 'md',
  shape = 'round',
  type = 'text',
  name,
  label,
  placeholder = name,
  required = true,
  register
}: TextInputProps) => {
  const sizeStyles = {
    sm: 'text-sm sm:text-base px-2 py-1',
    md: 'text-base sm:text-xl px-4 py-2',
    lg: 'text-xl sm:text-2xl px-6 py-4'
  }
  const shapeStyles = {
    square: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  }
  const styles = {
    primary: 'bg-bg border-2 border-bgLight',
    'primary-i': 'bg-transparent border-none'
  }
  return (
    <div className='flex flex-col'>
      <label className=''>{label}</label>
      <input
        className={`${styles[styleType]} ${sizeStyles[size]} ${shapeStyles[shape]}`}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
        required={required}
      />
    </div>
  )
}

interface PasswordInputProps {
  styleType?: 'primary' | 'primary-i'
  shape?: 'square' | 'round' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  register: UseFormRegister<any>
}
const PasswordInput = ({
  styleType = 'primary',
  size = 'md',
  shape = 'round',
  name,
  label,
  placeholder = name,
  required = true,
  register
}: PasswordInputProps) => {
  const [visibility, setVisibility] = useState(false)
  const sizeStyles = {
    sm: 'text-sm sm:text-base px-2 py-1',
    md: 'text-base sm:text-xl px-4 py-2',
    lg: 'text-xl sm:text-2xl px-6 py-4'
  }
  const shapeStyles = {
    square: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  }
  const styles = {
    primary: 'bg-bg border-2 border-bgLight',
    'primary-i': 'bg-transparent border-none'
  }
  return (
    <div className='flex flex-col'>
      <label
        className={`underline hover:cursor-pointer ${visibility ? 'text-red-600' : 'text-font'}`}
        onClick={() => setVisibility(!visibility)}
      >
        {label}
      </label>
      <input
        className={`${styles[styleType]} ${sizeStyles[size]} ${shapeStyles[shape]}`}
        type={`${visibility ? 'text' : 'password'}`}
        placeholder={placeholder}
        {...register(name, { required })}
        required={required}
      />
    </div>
  )
}

interface NumberInputProps {
  styleType?: 'primary' | 'primary-i'
  shape?: 'square' | 'round' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  register: UseFormRegister<any>
}
const NumberInput = ({
  styleType = 'primary',
  size = 'md',
  shape = 'round',
  name,
  label,
  placeholder = name,
  required = true,
  register
}: NumberInputProps) => {
  const sizeStyles = {
    sm: 'text-sm sm:text-base px-2 py-1',
    md: 'text-base sm:text-xl px-4 py-2',
    lg: 'text-xl sm:text-2xl px-6 py-4'
  }
  const shapeStyles = {
    square: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  }
  const styles = {
    primary: 'bg-bg border-2 border-bgLight',
    'primary-i': 'bg-transparent border-none'
  }
  return (
    <div className='flex flex-col'>
      <label className='mb-2'>{label}</label>
      <input
        className={`${styles[styleType]} ${sizeStyles[size]} ${shapeStyles[shape]}`}
        type='number'
        placeholder={placeholder}
        {...register(name, { required })}
        required={required}
      />
    </div>
  )
}
interface CheckBoxProps {
  name: string
  label?: string
  required?: boolean
  register: UseFormRegister<any>
}
const CheckBox = ({ name, label, required = false, register }: CheckBoxProps) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2'>{label}</label>
      <input className='bg-bg border-font' type='checkbox' {...register(name, { required })} />
    </div>
  )
}
interface RadioProps {
  name: string
  label?: string
  options: {
    label: string
    value: string
  }[]
  required?: boolean
  register: UseFormRegister<any>
}
const Radio = ({ name, options, label, required = true, register }: RadioProps) => {
  return (
    <div>
      <p className='mb-2'>{label}</p>
      <div className='flex gap-4'>
        {options.map((option) => (
          <div key={option.label} className='flex items-baseline gap-2'>
            <label className='mb-2'>{option.label}</label>
            <input className='bg-bg border-font' type='radio' value={option.value} {...register(name, { required })} />
          </div>
        ))}
      </div>
    </div>
  )
}
interface SelectProps {
  styleType?: 'primary' | 'primary-i'
  shape?: 'square' | 'round' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  name: string
  label?: string
  options: {
    label: string
    value: string
  }[]
  required?: boolean
  register: UseFormRegister<any>
}
const Select = ({
  styleType = 'primary',
  size = 'md',
  shape = 'round',
  name,
  options,
  label,
  required = true,
  register
}: SelectProps) => {
  const sizeStyles = {
    sm: 'text-sm sm:text-base px-2 py-1',
    md: 'text-base sm:text-xl px-4 py-2',
    lg: 'text-xl sm:text-2xl px-6 py-4'
  }
  const shapeStyles = {
    square: '',
    round: 'rounded-lg',
    circle: 'rounded-full'
  }
  const styles = {
    primary: 'flex gap-4 bg-bg border-2 border-bgLight',
    'primary-i': 'flex gap-4 bg-transparent border-none'
  }
  return (
    <div>
      <label className='mb-2'>{label}</label>
      <select
        defaultValue='default'
        className={`${styles[styleType]} ${sizeStyles[size]} ${shapeStyles[shape]}`}
        {...register(name, { required })}
      >
        <option value='default' disabled>
          Select...
        </option>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export { TextInput, PasswordInput, NumberInput, CheckBox, Radio, Select }
