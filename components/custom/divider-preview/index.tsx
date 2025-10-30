import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import ComponentPreviewer from '@/components/custom/component-previewer';

type DividerPreviewProps = {
  onBack: () => void;
};

export default function DividerPreview({ onBack }: DividerPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Divider</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                orientation: {
                  control: { type: 'select' },
                  options: ['horizontal', 'vertical'],
                  defaultValue: 'horizontal',
                },
              }}
            >
              {(values) => (
                values.orientation === 'horizontal' ? (
                  <VStack className="px-4 w-full">
                    <Text>Item acima</Text>
                    <Divider orientation="horizontal" className="my-3" />
                    <Text>Item abaixo</Text>
                  </VStack>
                ) : (
                  <HStack className="px-4 w-full items-center">
                    <Text>Esquerda</Text>
                    <Divider orientation="vertical" className="mx-3" />
                    <Text>Direita</Text>
                  </HStack>
                )
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Exemplo" props={{}}>
              {() => (
                <VStack className="px-4">
                  <Box className="p-3 bg-background-100 rounded-md">
                    <Text>Seção 1</Text>
                  </Box>
                  <Divider orientation="horizontal" className="my-3" />
                  <Box className="p-3 bg-background-100 rounded-md">
                    <Text>Seção 2</Text>
                  </Box>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}