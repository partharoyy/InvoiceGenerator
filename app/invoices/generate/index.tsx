import { Text, View } from 'react-native';
import React from 'react';
import { Button } from '~/components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '~/components/CustomTextInput';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const senderInfoSchema = z.object({
  name: z.string({required_error: 'Name is required'}).min(1, 'Name is required'),
  address: z.string({required_error: 'Address is required'}).min(1, 'Address is required'),
  taxId: z.string().optional(), 
})

type senderInfo = z.infer<typeof senderInfoSchema>

const GenerateInvoice = () => {
  const form = useForm<senderInfo>({
    resolver: zodResolver(senderInfoSchema),
  })
  const {handleSubmit, formState: {errors}} = form

  const onSubmit = (data: any) => {
    console.log('All good')
  }

  return (
    <KeyboardAwareScrollView className="flex-1 bg-gray-100 p-4">
      <FormProvider {...form}>
        <View className='flex-1 justify-between'>
          <Text className="text-2xl mb-5 font-bold">
              Sender Info
          </Text>
          <View className='gap-2'>
            <CustomTextInput name='name'label='Name'/>
            <CustomTextInput name='address'label='Address' multiline />
            <CustomTextInput name='taxId' label='Tax ID' />
          </View>
          <Button title='Next' className='mt-auto' onPress={form.handleSubmit(onSubmit)}/>
        </View>
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};

export default GenerateInvoice;
