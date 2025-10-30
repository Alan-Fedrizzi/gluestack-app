import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import {
  Icon,
  ChevronLeftIcon,
  AddIcon,
  GlobeIcon,
  PlayIcon,
  SettingsIcon,
  HelpCircleIcon,
  MenuIcon,
  MessageCircleIcon,
} from "@/components/ui/icon";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@/components/ui/menu";
import ComponentPreviewer from "@/components/custom/component-previewer";
import { Badge, BadgeText } from "@/components/ui/badge";

type MenuPreviewProps = {
  onBack: () => void;
};

export default function MenuPreview({ onBack }: MenuPreviewProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Menu</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer title="Playground" props={{}}>
              {() => (
                <VStack space="md" className="px-4">
                  <Menu
                    placement="top"
                    offset={5}
                    disabledKeys={["Settings"]}
                    trigger={({ ...triggerProps }) => {
                      return (
                        <Button {...triggerProps}>
                          <ButtonText>Menu</ButtonText>
                        </Button>
                      );
                    }}
                  >
                    <MenuItem key="Add account" textValue="Add account">
                      <Icon as={AddIcon} size="sm" className="mr-2" />
                      <MenuItemLabel size="sm">Add account</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Community" textValue="Community">
                      <Icon as={GlobeIcon} size="sm" className="mr-2" />
                      <MenuItemLabel size="sm">Community</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Plugins" textValue="Plugins">
                      <Icon as={PlayIcon} size="sm" className="mr-2" />
                      <MenuItemLabel size="sm">Plugins</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Settings" textValue="Settings">
                      <Icon as={SettingsIcon} size="sm" className="mr-2" />
                      <MenuItemLabel size="sm">Settings</MenuItemLabel>
                    </MenuItem>
                  </Menu>
                </VStack>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Example" props={{}}>
              {() => (
                <VStack space="md" className="px-4">
                  <Menu
                    offset={5}
                    trigger={({ ...triggerProps }) => {
                      return (
                        <Button {...triggerProps} size="sm">
                          <ButtonIcon as={MenuIcon} />
                        </Button>
                      );
                    }}
                  >
                    <MenuItem
                      key="Membership"
                      textValue="Membership"
                      className="p-2 justify-between"
                    >
                      <MenuItemLabel size="sm">Membership</MenuItemLabel>
                      <Badge action="success" className="rounded-full">
                        <BadgeText className="text-2xs capitalize">
                          Pro
                        </BadgeText>
                      </Badge>
                    </MenuItem>
                    <MenuItem key="Orders" textValue="Orders" className="p-2">
                      <MenuItemLabel size="sm">Orders</MenuItemLabel>
                    </MenuItem>
                    <MenuItem
                      key="Address Book"
                      textValue="Address Book"
                      className="p-2"
                    >
                      <MenuItemLabel size="sm">Address Book</MenuItemLabel>
                    </MenuItem>
                    <MenuSeparator />
                    <MenuItem
                      key="Earn & Redeem"
                      textValue="Earn & Redeem"
                      className="p-2"
                    >
                      <MenuItemLabel size="sm">Earn & Redeem</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Coupons" textValue="Coupons" className="p-2">
                      <MenuItemLabel size="sm">Coupons</MenuItemLabel>
                    </MenuItem>
                    <MenuItem
                      key="Help Center"
                      textValue="Help Center"
                      className="p-2"
                    >
                      <MenuItemLabel size="sm">Help Center</MenuItemLabel>
                    </MenuItem>
                    <MenuSeparator />
                    <MenuItem key="Logout" textValue="Logout" className="p-2">
                      <MenuItemLabel size="sm">Logout</MenuItemLabel>
                    </MenuItem>
                  </Menu>
                </VStack>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Example" props={{}}>
              {() => (
                <VStack space="md" className="px-4">
                  <Menu
                    placement="bottom left"
                    selectionMode="single"
                    offset={5}
                    className="p-1.5"
                    closeOnSelect={true}
                    trigger={({ ...triggerProps }) => {
                      return (
                        <Button {...triggerProps}>
                          <ButtonText>Menu</ButtonText>
                        </Button>
                      );
                    }}
                  >
                    <MenuItem
                      key="Account Settings"
                      textValue="Account Settings"
                      className="p-2 web:min-w-[294px] min-w-[225px]"
                    >
                      <Icon as={SettingsIcon} size="sm" className="mr-2" />
                      <MenuItemLabel size="sm">Account Settings</MenuItemLabel>
                    </MenuItem>
                    <MenuItem
                      key="Help Centre"
                      textValue="Help Centre"
                      className="p-2"
                    >
                      <Icon as={HelpCircleIcon} size="sm" className="mr-2" />
                      <MenuItemLabel size="sm">Help Centre</MenuItemLabel>
                    </MenuItem>
                    <MenuItem
                      key="Contact Support"
                      textValue="Contact Support"
                      className="p-2"
                    >
                      <Icon as={MessageCircleIcon} size="sm" className="mr-2" />
                      <MenuItemLabel size="sm">Contact Support</MenuItemLabel>
                    </MenuItem>
                    <MenuSeparator />
                    <MenuItem
                      key="Download Mobile App"
                      textValue="Download Mobile App"
                      className="p-2"
                    >
                      <MenuItemLabel size="sm">
                        Download Mobile App
                      </MenuItemLabel>
                    </MenuItem>
                    <MenuItem
                      key="Install Chrome Extension"
                      textValue="Install Chrome Extension"
                      className="p-2"
                    >
                      <MenuItemLabel size="sm">
                        Install Chrome Extension
                      </MenuItemLabel>
                    </MenuItem>
                  </Menu>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
