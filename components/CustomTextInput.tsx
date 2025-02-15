import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import {useController} from 'react-hook-form'

type CustomTextInputProps = {
    label: string;
    name: string;
} & TextInputProps

export default function CustomTextInput({label, name, ...props}: CustomTextInputProps) {
  const {field: {onChange, onBlur, value}, fieldState: {error}} = useController({name, rules: {required: 'Name is required'}})

  console.log({ value, error });
  
  return (
    <View className="mb-4 gap-1">
      <Text className="text-lg font-semibold text-gray-700 mb-2">{label}</Text>
      <TextInput
        {...props}
        className={`bg-white p-3 rounded-lg border border-gray-300  ${props.className}`}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
      />
      <Text className='text-red-500'>{error?.message}</Text>
    </View>   
  )
}