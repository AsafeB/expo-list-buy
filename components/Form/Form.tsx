import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check } from "lucide-react";
import { colors } from "../colors";

export default function Form() {
  return (
    <View style={styles.container}>
      {/* TODO(aluno): controlar o valor deste campo com useState (ex.: const [texto, setTexto] = useState("")) para poder usá-lo ao adicionar um novo item. */}
      <TextInput
        style={styles.input}
        placeholder="O que você precisa comprar?"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
        // TODO(aluno): ao tocar, adicionar um novo produto à lista (ex.: chamando uma função recebida via props que atualiza o estado da lista em ListaItens/App).
      >
        <Check color={colors.surface} size={16} />
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
