import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import { Heading } from '@/components/ui/heading';
import ComponentPreviewer from '@/components/custom/component-previewer';

type HeadingPreviewProps = {
  onBack: () => void;
};

export default function HeadingPreview({ onBack }: HeadingPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Heading</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                size: {
                  control: { type: 'select' },
                  options: ['5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
                  defaultValue: 'lg',
                },
                bold: { control: { type: 'boolean' }, defaultValue: true },
                underline: { control: { type: 'boolean' }, defaultValue: false },
                italic: { control: { type: 'boolean' }, defaultValue: false },
                strikeThrough: { control: { type: 'boolean' }, defaultValue: false },
                isTruncated: { control: { type: 'boolean' }, defaultValue: false },
              }}
            >
              {(values) => (
                <Box className="px-4">
                  <Heading
                    size={values.size}
                    bold={values.bold}
                    underline={values.underline}
                    italic={values.italic}
                    strikeThrough={values.strikeThrough}
                    isTruncated={values.isTruncated}
                    className="max-w-[300px]"
                  >
                    Gluestack Heading component example showcasing variations.
                  </Heading>
                </Box>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Sizes" props={{}}>
              {() => (
                <VStack className="gap-2 px-4">
                  <Heading size="5xl">Heading 5xl</Heading>
                  <Heading size="4xl">Heading 4xl</Heading>
                  <Heading size="3xl">Heading 3xl</Heading>
                  <Heading size="2xl">Heading 2xl</Heading>
                  <Heading size="xl">Heading xl</Heading>
                  <Heading size="lg">Heading lg</Heading>
                  <Heading size="md">Heading md</Heading>
                  <Heading size="sm">Heading sm</Heading>
                  <Heading size="xs">Heading xs</Heading>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}