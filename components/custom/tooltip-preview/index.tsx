import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipText } from "@/components/ui/tooltip";
import ComponentPreviewer from "@/components/custom/component-previewer";

type TooltipPreviewProps = {
  onBack: () => void;
};

export default function TooltipPreview({ onBack }: TooltipPreviewProps) {
  // No local state needed; Tooltip expects a `trigger` element.

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Tooltip</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer title="Playground" props={{}}>
              {() => (
                <VStack space="md" className="px-4">
                  <Tooltip
                    trigger={(triggerProps) => (
                      <Button {...triggerProps}>
                        <ButtonText>Hover or focus to see tooltip</ButtonText>
                      </Button>
                    )}
                  >
                    <TooltipContent>
                      <TooltipText size="sm">
                        Helpful tip text goes here.
                      </TooltipText>
                    </TooltipContent>
                  </Tooltip>
                </VStack>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Example" props={{}}>
              {() => (
                <VStack space="md" className="px-4">
                  <Tooltip
                    trigger={(triggerProps) => (
                      <Text {...triggerProps}>Pass the cursor over me</Text>
                    )}
                  >
                    <TooltipContent>
                      <TooltipText size="sm">Tooltip example text.</TooltipText>
                    </TooltipContent>
                  </Tooltip>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
