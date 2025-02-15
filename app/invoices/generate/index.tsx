import { Text, View } from 'react-native';
import React from 'react';
import { Button } from '~/components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '~/components/CustomTextInput';
import { useForm, FormProvider } from 'react-hook-form';

const GenerateInvoice = () => {

  const form = useForm()
  const {handleSubmit, formState: {errors}} = form

  const onSubmit = (data: any) => {
    console.log('All good')
  }

  return (
    <KeyboardAwareScrollView className="flex-1 bg-gray-100 p-4">
      <FormProvider {...form}>
        <Text className="text-2xl mb-5 font-bold">
            Sender Info
        </Text>
        <View className='gap-2'>
          <CustomTextInput name='name'label='Name'/>
          <CustomTextInput name='address'label='Address' multiline />
          <CustomTextInput name='taxId' label='Tax ID' />
        </View>

        <Button title='Next' className='mt-auto' onPress={form.handleSubmit(onSubmit)}/>
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};

export default GenerateInvoice;
