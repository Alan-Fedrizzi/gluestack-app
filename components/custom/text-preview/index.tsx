import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import ComponentPreviewer from '@/components/custom/component-previewer';

type TextPreviewProps = {
  onBack: () => void;
};

export default function TextPreview({ onBack }: TextPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Text</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                size: {
                  control: { type: 'select' },
                  options: ['2xs','xs','sm','md','lg','xl','2xl','3xl','4xl','5xl','6xl'],
                  defaultValue: 'md',
                },
                bold: { control: { type: 'boolean' }, defaultValue: false },
                underline: { control: { type: 'boolean' }, defaultValue: false },
                italic: { control: { type: 'boolean' }, defaultValue: false },
                strikeThrough: { control: { type: 'boolean' }, defaultValue: false },
                isTruncated: { control: { type: 'boolean' }, defaultValue: false },
                highlight: { control: { type: 'boolean' }, defaultValue: false },
              }}
            >
              {(values) => (
                <Box className="px-4">
                  <Text
                    size={values.size as any}
                    bold={values.bold as boolean}
                    underline={values.underline as boolean}
                    italic={values.italic as boolean}
                    strikeThrough={values.strikeThrough as boolean}
                    isTruncated={values.isTruncated as boolean}
                    highlight={values.highlight as boolean}
                    className="max-w-[300px]"
                  >
                    Este é um exemplo do componente Text com variações.
                  </Text>
                </Box>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Tamanhos" props={{}}>
              {() => (
                <VStack className="gap-2 px-4">
                  <Text size="2xs">Text 2xs</Text>
                  <Text size="xs">Text xs</Text>
                  <Text size="sm">Text sm</Text>
                  <Text size="md">Text md</Text>
                  <Text size="lg">Text lg</Text>
                  <Text size="xl">Text xl</Text>
                  <Text size="2xl">Text 2xl</Text>
                  <Text size="3xl">Text 3xl</Text>
                  <Text size="4xl">Text 4xl</Text>
                  <Text size="5xl">Text 5xl</Text>
                  <Text size="6xl">Text 6xl</Text>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}