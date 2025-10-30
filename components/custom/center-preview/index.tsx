import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import ComponentPreviewer from '@/components/custom/component-previewer';

type CenterPreviewProps = {
  onBack: () => void;
};

export default function CenterPreview({ onBack }: CenterPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Center</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                height: {
                  control: { type: 'select' },
                  options: ['h-24', 'h-32', 'h-48', 'h-64'],
                  defaultValue: 'h-48',
                },
                background: { control: { type: 'boolean' }, defaultValue: true },
              }}
            >
              {(values) => (
                <Center className={`${values.height} ${values.background ? 'bg-background-100' : ''} rounded-md`}>
                  <Text className="text-typography-900">Conteúdo centralizado</Text>
                </Center>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Composição" props={{}}>
              {() => (
                <Center className="h-48 bg-background-100 rounded-md">
                  <Box className="p-3 bg-background-0 rounded border border-outline-200">
                    <Text>Item centrado</Text>
                  </Box>
                </Center>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}