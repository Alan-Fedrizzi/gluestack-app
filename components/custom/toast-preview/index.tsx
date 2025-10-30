import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Toast, ToastTitle, ToastDescription, useToast } from '@/components/ui/toast';
import ComponentPreviewer from '@/components/custom/component-previewer';

type ToastPreviewProps = { onBack: () => void };

export default function ToastPreview({ onBack }: ToastPreviewProps) {
  const toast = useToast();

  const handleShow = (values: any) => {
    toast.show({
      placement: 'top',
      duration: 3000,
      render: () => (
        <Toast variant={values.variant as any} action={values.action as any}>
          <ToastTitle>Notificação</ToastTitle>
          <ToastDescription>Esta é uma mensagem de {values.action}.</ToastDescription>
        </Toast>
      ),
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Toast</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-5 md:px-20">
            <ComponentPreviewer
              title="Playground"
              props={{
                action: {
                  control: { type: 'select' },
                  options: ['error', 'warning', 'success', 'info', 'muted'],
                  defaultValue: 'info',
                },
                variant: {
                  control: { type: 'select' },
                  options: ['solid', 'outline'],
                  defaultValue: 'solid',
                },
              }}
            >
              {(values) => (
                <Box className="px-4 w-full">
                  <Button onPress={() => handleShow(values)}>
                    <ButtonText>Show Toast</ButtonText>
                  </Button>
                </Box>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Examples" props={{}}>
              {() => (
                <HStack space="md" className="px-4 w-full items-center">
                  <Button onPress={() => handleShow({ action: 'success', variant: 'solid' })}>
                    <ButtonText>Success</ButtonText>
                  </Button>
                  <Button onPress={() => handleShow({ action: 'error', variant: 'outline' })}>
                    <ButtonText>Error</ButtonText>
                  </Button>
                </HStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}