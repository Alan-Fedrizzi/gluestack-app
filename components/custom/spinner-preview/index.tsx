import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { Pressable, ScrollView } from "react-native";
import { Spinner } from "@/components/ui/spinner";
import ComponentPreviewer from "@/components/custom/component-previewer";

type SpinnerPreviewProps = { onBack: () => void };

export default function SpinnerPreview({ onBack }: SpinnerPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Spinner</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-5 md:px-20">
            <ComponentPreviewer
              title="Playground"
              props={{
                size: {
                  control: { type: "select" },
                  options: ["small", "large"],
                  defaultValue: "large",
                },
                color: {
                  control: { type: "select" },
                  options: ["primary", "success", "warning", "error", "info"],
                  defaultValue: "primary",
                },
              }}
            >
              {(values) => (
                <Box className="px-4 w-full items-center">
                  <Spinner
                    size={values.size as any}
                    accessibilityLabel="Loading"
                    // Pass both className and explicit color prop to ensure color updates reliably
                    className={`text-${values.color}-500`}
                    color={
                      (
                        {
                          primary: 'rgb(var(--color-primary-500))',
                          success: 'rgb(var(--color-success-500))',
                          warning: 'rgb(var(--color-warning-500))',
                          error: 'rgb(var(--color-error-500))',
                          info: 'rgb(var(--color-info-500))',
                        } as Record<string, string>
                      )[values.color as string]
                    }
                  />
                </Box>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Examples" props={{}}>
              {() => (
                <HStack space="md" className="px-4 w-full items-center">
                  <Spinner className="text-primary-500" />
                  <Text>Loading data...</Text>
                </HStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
