# Build android:

- Se ainda quiser limpar, apague manualmente android/app/.cxx e android/.cxx, depois rode npx expo prebuild --platform android --clean para regenerar tudo e finalmente ./gradlew assembleRelease.

# Build web:

- Web: não exige EAS.
- powershell:
  $env:EXPO_PUBLIC_URL = "http://desenv.ordomederi.com/templarios-gluestack"
  & "C:\Program Files\nodejs\npx.cmd" expo export --platform web
