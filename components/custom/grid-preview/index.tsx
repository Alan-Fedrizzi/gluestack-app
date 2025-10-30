import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Grid, GridItem } from '@/components/ui/grid';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Pressable, ScrollView } from 'react-native';
import ComponentPreviewer from '@/components/custom/component-previewer';

type GridPreviewProps = {
  onBack: () => void;
};

export default function GridPreview({ onBack }: GridPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Grid</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                columns: {
                  control: { type: 'select' },
                  options: ['2', '3', '4', '5', '6'],
                  defaultValue: '3',
                },
                gap: {
                  control: { type: 'select' },
                  options: ['0', '1', '2', '3', '4', '6'],
                  defaultValue: '2',
                },
              }}
            >
              {(values) => (
                <Grid
                  className={`gap-${values.gap}`}
                  _extra={{ className: `grid-cols-${values.columns}` }}
                >
                  {[...Array(6)].map((_, i) => (
                    <GridItem key={i} _extra={{ className: 'col-span-1' }}>
                      <Box className="h-20 rounded-md bg-background-100 items-center justify-center">
                        <Text>Item {i + 1}</Text>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Exemplo" props={{}}>
              {() => (
                <Grid className="gap-4" _extra={{ className: 'grid-cols-4' }}>
                  {[...Array(8)].map((_, i) => (
                    <GridItem key={i} _extra={{ className: 'col-span-1' }}>
                      <Box className="h-16 rounded-md bg-background-100 items-center justify-center">
                        <Text>#{i + 1}</Text>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}