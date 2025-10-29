import { config } from '@gluestack-ui/config';
import {
  Box,
  Button,
  ButtonText,
  GluestackUIProvider,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Box
            flex={1}
            bg="$background"
            alignItems="center"
            justifyContent="center"
            px="$5"
          >
            <VStack space="lg" alignItems="center" maxWidth="$96">
              <Heading size="xl" textAlign="center">
                Expo + GlueStack UI
              </Heading>
              <Text size="md" textAlign="center" color="$text400">
                Projeto pronto para builds em iOS, Android e Web usando Expo.
              </Text>
              <Button size="md" action="primary">
                <ButtonText>Começar</ButtonText>
              </Button>
            </VStack>
          </Box>
          <StatusBar style="dark" />
        </SafeAreaView>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
