import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView } from "react-native";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Icon, ChevronLeftIcon, CloseIcon, AlertCircleIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@/components/ui/modal";
import ComponentPreviewer from "@/components/custom/component-previewer";
import { Heading } from "@/components/ui/heading";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Image } from "@/components/ui/image";

type ModalPreviewProps = {
  onBack: () => void;
};

export default function ModalPreview({ onBack }: ModalPreviewProps) {
  const [showModal, setShowModal] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const [showMedia, setShowMedia] = React.useState(false);
  const [showFull, setShowFull] = React.useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1">
        <HStack className="items-center px-4 py-3 border-b border-outline-100">
          <Pressable onPress={onBack} className="py-2 pr-4 pl-2">
            <Icon as={ChevronLeftIcon} size="xl" />
          </Pressable>
          <Text className="text-typography-900 text-xl font-bold">Modal</Text>
        </HStack>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <VStack className="p-4">
            <ComponentPreviewer
              title="Playground"
              props={{
                size: {
                  control: { type: "select" },
                  options: ["xs", "sm", "md", "lg", "full"],
                  defaultValue: "md",
                },
              }}
            >
              {(values) => (
                <VStack space="md" className="px-4">
                  <Button onPress={() => setShowModal(true)}>
                    <ButtonText>Open Modal</ButtonText>
                  </Button>
                  <Modal
                    size={values.size as any}
                    isOpen={showModal}
                    onClose={() => {
                      setShowModal(false);
                    }}
                  >
                    <ModalBackdrop />
                    <ModalContent>
                      <ModalHeader>
                        <Heading size="lg">Modal Title</Heading>
                        <ModalCloseButton>
                          <Icon as={CloseIcon} />
                        </ModalCloseButton>
                      </ModalHeader>
                      <ModalBody>
                        <Text>
                          This is the modal body. You can add any content here.
                        </Text>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          variant="outline"
                          action="secondary"
                          className="mr-3"
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          <ButtonText>Cancel</ButtonText>
                        </Button>
                        <Button
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          <ButtonText>Save</ButtonText>
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </VStack>
              )}
            </ComponentPreviewer>

            <ComponentPreviewer title="Example" props={{}}>
              {() => (
                <VStack space="lg" className="px-4">
                  {/* Confirmation Modal */}
                  <VStack space="md">
                    <Heading size="md">Confirmação</Heading>
                    <Button action="negative" onPress={() => setShowConfirm(true)}>
                      <ButtonText>Abrir Modal de Confirmação</ButtonText>
                    </Button>
                    <Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
                      <ModalBackdrop />
                      <ModalContent>
                        <ModalHeader>
                          <HStack className="items-center" space="sm">
                            <Icon as={AlertCircleIcon} />
                            <Heading size="lg">Confirmar exclusão</Heading>
                          </HStack>
                          <ModalCloseButton>
                            <Icon as={CloseIcon} />
                          </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                          <Text>
                            Tem certeza que deseja excluir este item? Esta ação não
                            pode ser desfeita.
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            variant="outline"
                            action="secondary"
                            className="mr-3"
                            onPress={() => setShowConfirm(false)}
                          >
                            <ButtonText>Cancelar</ButtonText>
                          </Button>
                          <Button action="negative" onPress={() => setShowConfirm(false)}>
                            <ButtonText>Excluir</ButtonText>
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </VStack>

                  {/* Form Modal */}
                  <VStack space="md">
                    <Heading size="md">Formulário</Heading>
                    <Button onPress={() => setShowForm(true)}>
                      <ButtonText>Abrir Modal de Formulário</ButtonText>
                    </Button>
                    <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
                      <ModalBackdrop />
                      <ModalContent>
                        <ModalHeader>
                          <Heading size="lg">Criar usuário</Heading>
                          <ModalCloseButton>
                            <Icon as={CloseIcon} />
                          </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                          <VStack space="md">
                            <FormControl>
                              <FormControlLabel>
                                <FormControlLabelText>Nome</FormControlLabelText>
                              </FormControlLabel>
                              <Input>
                                <InputField placeholder="Seu nome" />
                              </Input>
                            </FormControl>

                            <FormControl>
                              <FormControlLabel>
                                <FormControlLabelText>E-mail</FormControlLabelText>
                              </FormControlLabel>
                              <Input>
                                <InputField placeholder="voce@exemplo.com" />
                              </Input>
                              <FormControlHelper>
                                <FormControlHelperText>
                                  Usaremos este e-mail para contato.
                                </FormControlHelperText>
                              </FormControlHelper>
                            </FormControl>

                            <FormControl>
                              <FormControlLabel>
                                <FormControlLabelText>Bio</FormControlLabelText>
                              </FormControlLabel>
                              <Textarea>
                                <TextareaInput placeholder="Conte um pouco sobre você" />
                              </Textarea>
                            </FormControl>

                            <Checkbox value="terms">
                              <CheckboxIndicator />
                              <CheckboxLabel>Aceito os termos de uso</CheckboxLabel>
                            </Checkbox>
                          </VStack>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            variant="outline"
                            action="secondary"
                            className="mr-3"
                            onPress={() => setShowForm(false)}
                          >
                            <ButtonText>Cancelar</ButtonText>
                          </Button>
                          <Button onPress={() => setShowForm(false)}>
                            <ButtonText>Salvar</ButtonText>
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </VStack>

                  {/* Media Modal */}
                  <VStack space="md">
                    <Heading size="md">Mídia</Heading>
                    <Button onPress={() => setShowMedia(true)}>
                      <ButtonText>Abrir Modal de Mídia</ButtonText>
                    </Button>
                    <Modal isOpen={showMedia} onClose={() => setShowMedia(false)}>
                      <ModalBackdrop />
                      <ModalContent>
                        <ModalHeader>
                          <Heading size="lg">Imagem de destaque</Heading>
                          <ModalCloseButton>
                            <Icon as={CloseIcon} />
                          </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                          <VStack space="md">
                            <Image
                              source={{
                                uri: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=1200&q=80&auto=format&fit=crop',
                              }}
                              resizeMode="cover"
                              className="h-40 w-full rounded"
                            />
                            <Text>
                              Uma imagem ilustrativa carregada de uma fonte externa.
                            </Text>
                          </VStack>
                        </ModalBody>
                        <ModalFooter>
                          <Button onPress={() => setShowMedia(false)}>
                            <ButtonText>Fechar</ButtonText>
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </VStack>

                  {/* Fullscreen Modal */}
                  <VStack space="md">
                    <Heading size="md">Tela cheia</Heading>
                    <Button onPress={() => setShowFull(true)}>
                      <ButtonText>Abrir Modal Fullscreen</ButtonText>
                    </Button>
                    <Modal size="full" isOpen={showFull} onClose={() => setShowFull(false)}>
                      <ModalBackdrop />
                      <ModalContent>
                        <ModalHeader>
                          <Heading size="lg">Modal em Tela Cheia</Heading>
                          <ModalCloseButton>
                            <Icon as={CloseIcon} />
                          </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                          <VStack space="md">
                            <Text>
                              Conteúdo extenso pode ser exibido em modais de tela cheia.
                            </Text>
                            <Text>
                              Você pode rolar o conteúdo e adicionar componentes conforme
                              necessário.
                            </Text>
                          </VStack>
                        </ModalBody>
                        <ModalFooter>
                          <Button onPress={() => setShowFull(false)}>
                            <ButtonText>Fechar</ButtonText>
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </VStack>
                </VStack>
              )}
            </ComponentPreviewer>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
