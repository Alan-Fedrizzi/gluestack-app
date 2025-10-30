import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import ComponentPreviewer from '@/components/custom/component-previewer';

type BoxPreviewProps = {
  onBack: () => void;
};

export default function BoxPreview({ onBack }: BoxPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Box</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                padding: {
                  control: { type: 'select' },
                  options: ['0', '2', '4', '6'],
                  defaultValue: '4',
                },
                border: { control: { type: 'boolean' }, defaultValue: true },
                rounded: { control: { type: 'boolean' }, defaultValue: true },
                background: { control: { type: 'boolean' }, defaultValue: false },
              }}
            >
              {(values) => {
                const classes = [
                  `p-${values.padding}`,
                  values.border ? 'border border-outline-200' : '',
                  values.rounded ? 'rounded-md' : '',
                  values.background ? 'bg-background-100' : 'bg-background-0',
                ]
                  .filter(Boolean)
                  .join(' ');
                return (
                  <Box className={classes}>
                    <Text className="text-typography-900">
                      Este é um Box com classes dinâmicas.
                    </Text>
                  </Box>
                );
              }}
            </ComponentPreviewer>

            <ComponentPreviewer title="Composição" props={{}}>
              {() => (
                <HStack space="md" className="px-4">
                  <Box className="p-4 bg-background-100 rounded-md">
                    <Text>Box A</Text>
                  </Box>
                  <Box className="p-4 bg-background-100 rounded-md">
                    <Text>Box B</Text>
                  </Box>
                  <Box className="p-4 bg-background-100 rounded-md">
                    <Text>Box C</Text>
                  </Box>
                </HStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}