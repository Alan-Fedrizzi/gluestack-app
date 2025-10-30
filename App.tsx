import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, ScrollView } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Fab } from '@/components/ui/fab';
import { Icon, SunIcon, MoonIcon, ChevronRightIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Grid, GridItem } from '@/components/ui/grid';
import { Image } from '@/components/ui/image';
import { getAllComponents } from '@/utils/getComponents';
import type { NestedComponents } from '@/types/components';
import HeadingPreview from '@/components/custom/heading-preview';
import TextPreview from '@/components/custom/text-preview';
import BoxPreview from '@/components/custom/box-preview';
import CenterPreview from '@/components/custom/center-preview';
import DividerPreview from '@/components/custom/divider-preview';
import HStackPreview from '@/components/custom/hstack-preview';
import VStackPreview from '@/components/custom/vstack-preview';
import GridPreview from '@/components/custom/grid-preview';
import AlertPreview from '@/components/custom/alert-preview';
import ProgressPreview from '@/components/custom/progress-preview';
import SpinnerPreview from '@/components/custom/spinner-preview';
import ToastPreview from '@/components/custom/toast-preview';
import '@/global.css';

type ColorMode = 'light' | 'dark';

interface ComponentInfo {
  name: string;
  path?: string;
  url?: string;
  darkUrl?: string;
}

interface ColorModeContextValue {
  colorMode: ColorMode;
}

const ColorModeContext = React.createContext<ColorModeContextValue>({
  colorMode: 'light',
});

const ComponentCard = ({
  component,
  onPress,
}: {
  component: ComponentInfo;
  onPress: () => void;
}) => {
  const { colorMode } = React.useContext(ColorModeContext);
  const imageUri =
    (colorMode === 'light' ? component.url : component.darkUrl) ??
    component.url ??
    component.darkUrl ??
    'https://placehold.co/320x240/png';
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 rounded-xl bg-background-0 w-full h-full sm:gap-2 gap-1 flex flex-col lg:p-4 ${
        colorMode === 'light'
          ? 'lg:shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)] data-[hover=true]:lg:border data-[hover=true]:border-outline-100'
          : 'lg:shadow-soft-1 lg:border border-outline-50 data-[hover=true]:border-outline-200'
      }`}
    >
      <Box className="rounded-lg bg-background-50 px-3 lg:px-6 py-[14px] lg:py-7 aspect-[17/12]">
        <Image
          source={{
            uri: imageUri,
          }}
          alt={`${component.name} image`}
          className="w-full h-full rounded lg:rounded-md shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]"
        />
      </Box>
      <HStack className="justify-between px-1.5 mt-1">
        <Text className="text-typography-900 font-medium sm:text-base text-sm lg:text-xl">
          {component.name}
        </Text>
        <Icon
          as={ChevronRightIcon}
          size="sm"
          className="text-background-400 lg:hidden"
        />
      </HStack>
    </Pressable>
  );
};

const Header = () => {
  const { colorMode } = React.useContext(ColorModeContext);
  return (
    <HStack className="flex-1 bg-background-50 w-full mx-auto justify-between">
      <VStack className="w-full md:max-w-[630px] lg:max-w-[400px] xl:max-w-[480px] mx-5 md:ml-8 mb-8 mt-10 lg:my-[44px] xl:ml-[80px] flex-1">
        <HStack
          className="rounded-full bg-background-0 py-4 px-5 mb-7 md:mb-9 lg:mb-[80px] xl:mb-[132px] items-center native:max-w-[250px] w-fit"
          space="sm"
        >
          <Image
            source={{
              uri:
                colorMode === 'light'
                  ? 'https://i.imgur.com/9bvua6C.png'
                  : 'https://i.imgur.com/EUqtUMu.png',
            }}
            alt="logo_image"
            className="h-5 w-5 rounded-sm lg:h-6 lg:w-6 xl:h-7 xl:w-7"
          />
          <Text className="font-medium text-sm lg:text-base xl:text-lg text-typography-900">
            Powered by gluestack-ui v3
          </Text>
        </HStack>
        <Heading className="mb-2 xl:mb-[18px] text-4xl lg:text-5xl xl:text-[56px]">
          Kitchensink app
        </Heading>
        <Text className="text-sm lg:text-base xl:text-lg">
          Kitchensink is a comprehensive demo app showcasing all the gluestack
          components in action. It includes buttons, forms, icons and much
          more!
        </Text>
      </VStack>
      <VStack className="hidden lg:flex flex-1 max-h-[510px] h-full aspect-[1075/510]">
        <Image
          source={{
            uri:
              colorMode === 'light'
                ? 'https://i.imgur.com/sxY9qxx.png'
                : 'https://i.imgur.com/icZHMep.png',
          }}
          alt="header_image"
          className="h-full w-full"
        />
      </VStack>
    </HStack>
  );
};

type PreviewProps = { onBack: () => void };
const previewMap: Record<string, React.ComponentType<PreviewProps>> = {
  heading: HeadingPreview,
  text: TextPreview,
  box: BoxPreview,
  center: CenterPreview,
  divider: DividerPreview,
  hstack: HStackPreview,
  vstack: VStackPreview,
  grid: GridPreview,
  alert: AlertPreview,
  progress: ProgressPreview,
  spinner: SpinnerPreview,
  toast: ToastPreview,
};

export default function App() {
  const [colorMode, setColorMode] = React.useState<ColorMode>('light');
  const [selectedPreview, setSelectedPreview] = React.useState<string | null>(null);
  const components = React.useMemo<NestedComponents>(() => getAllComponents(), []);

  const filteredComponents = React.useMemo(() => {
    return components
      .map((category) => ({
        ...category,
        components: category.components.filter(
          (component) =>
            component.path &&
            !component.name.toLowerCase().includes('bottomsheet') &&
            !component.path.toLowerCase().includes('bottomsheet')
        ),
      }))
      .filter((category) => category.components.length > 0);
  }, [components]);

  const toggleColorMode = React.useCallback(() => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const renderHome = () => (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Header />
        <VStack className="p-5 md:px-20">
          {filteredComponents.map((category) => (
            <Box
              key={category.category}
              className="mt-4 border-b border-outline-100 pb-8"
            >
              <Heading size="lg" className="text-typography-900 mb-4">
                {category.category}
              </Heading>
              <Grid
                className="gap-5"
                _extra={{
                  className: 'grid-cols-2 md:grid-cols-4 xl:grid-cols-6',
                }}
              >
                {category.components.map((component) => (
                  <GridItem
                    key={component.name}
                    _extra={{
                      className: 'col-span-1',
                    }}
                  >
                    <ComponentCard
                      component={component}
                      onPress={() => {
                        const key = (component.path ?? '').toLowerCase();
                        if (previewMap[key]) {
                          setSelectedPreview(key);
                        } else {
                          console.log(`Component pressed: ${component.path ?? component.name}`);
                        }
                      }}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <ColorModeContext.Provider value={{ colorMode }}>
        <GluestackUIProvider mode={colorMode}>
          <StatusBar
            style="auto"
            backgroundColor={colorMode === 'light' ? '#F6F6F6' : '#272625'}
          />
          {!selectedPreview && renderHome()}
          {selectedPreview && (() => {
            const SelectedComponent = previewMap[selectedPreview];
            return SelectedComponent ? (
              <SelectedComponent onBack={() => setSelectedPreview(null)} />
            ) : null;
          })()}
          <Fab
            className="bottom-10 sm:right-10 right-6 p-4 z-0"
            onPress={toggleColorMode}
          >
            <Icon
              as={colorMode === 'light' ? SunIcon : MoonIcon}
              className="text-typography-0"
            />
          </Fab>
        </GluestackUIProvider>
      </ColorModeContext.Provider>
    </SafeAreaProvider>
  );
}
