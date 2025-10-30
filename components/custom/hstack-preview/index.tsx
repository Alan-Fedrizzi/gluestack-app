import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import ComponentPreviewer from '@/components/custom/component-previewer';

type HStackPreviewProps = {
  onBack: () => void;
};

export default function HStackPreview({ onBack }: HStackPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">HStack</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                space: {
                  control: { type: 'select' },
                  options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
                  defaultValue: 'md',
                },
                reversed: { control: { type: 'boolean' }, defaultValue: false },
              }}
            >
              {(values) => (
                <HStack space={values.space as any} reversed={values.reversed as boolean} className="px-4">
                  <Box className="h-12 w-12 bg-background-100 rounded-md" />
                  <Box className="h-12 w-12 bg-background-200 rounded-md" />
                  <Box className="h-12 w-12 bg-background-300 rounded-md" />
                </HStack>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Exemplo" props={{}}>
              {() => (
                <HStack space="lg" className="px-4">
                  <Text>Item 1</Text>
                  <Text>Item 2</Text>
                  <Text>Item 3</Text>
                </HStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}