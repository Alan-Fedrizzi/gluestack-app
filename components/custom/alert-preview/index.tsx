import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import { Alert, AlertText } from '@/components/ui/alert';
import ComponentPreviewer from '@/components/custom/component-previewer';

type AlertPreviewProps = {
  onBack: () => void;
};

export default function AlertPreview({ onBack }: AlertPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Alert</Text>
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
                size: {
                  control: { type: 'select' },
                  options: ['sm', 'md', 'lg'],
                  defaultValue: 'md',
                },
              }}
            >
              {(values) => (
                <Box className="px-4 w-full">
                  <Alert variant={values.variant as any} action={values.action as any}>
                    <AlertText size={values.size as any}>Este é um alerta {values.action}.</AlertText>
                  </Alert>
                </Box>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Examples" props={{}}>
              {() => (
                <VStack space="md" className="px-4 w-full">
                  <Alert action="success">
                    <AlertText>Success: Operation completed.</AlertText>
                  </Alert>
                  <Alert action="warning">
                    <AlertText>Warning: Please check your input.</AlertText>
                  </Alert>
                  <Alert action="error" variant="outline">
                    <AlertText>Error: Something went wrong.</AlertText>
                  </Alert>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}