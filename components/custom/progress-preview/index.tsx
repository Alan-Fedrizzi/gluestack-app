import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { Pressable, ScrollView } from "react-native";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import ComponentPreviewer from "@/components/custom/component-previewer";

type ProgressPreviewProps = { onBack: () => void };

export default function ProgressPreview({ onBack }: ProgressPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">
            Progress
          </Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-5 md:px-20">
            <ComponentPreviewer
              title="Playground"
              props={{
                orientation: {
                  control: { type: "select" },
                  options: ["horizontal", "vertical"],
                  defaultValue: "horizontal",
                },
                size: {
                  control: { type: "select" },
                  options: ["xs", "sm", "md", "lg", "xl"],
                  defaultValue: "md",
                },
                value: {
                  control: { type: "select" },
                  options: ["0", "25", "50", "75", "100"],
                  defaultValue: "50",
                },
              }}
            >
              {(values) => (
                <Box className="px-4 w-full">
                  {values.orientation === "horizontal" ? (
                    <Progress
                      orientation="horizontal"
                      size={values.size as any}
                      value={values.value}
                    >
                      <ProgressFilledTrack />
                    </Progress>
                  ) : (
                    <Box className="h-40 w-8 items-end">
                      <Progress
                        orientation="vertical"
                        size={values.size as any}
                        value={values.value}
                      >
                        <ProgressFilledTrack />
                      </Progress>
                    </Box>
                  )}
                </Box>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Examples" props={{}}>
              {() => (
                <VStack space="md" className="px-4 w-full">
                  <Progress size="sm">
                    <ProgressFilledTrack style={{ width: "30%" }} />
                  </Progress>
                  <Progress size="md">
                    <ProgressFilledTrack style={{ width: "60%" }} />
                  </Progress>
                  <Progress size="lg">
                    <ProgressFilledTrack style={{ width: "85%" }} />
                  </Progress>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
