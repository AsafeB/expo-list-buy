import { Text, TouchableOpacity, View } from "react-native";
import { CircleCheckBig, CircleDashed, Trash2 } from "lucide-react";
import { ProdutoItem } from "../../interfaces/ProdutoItem";
import { styles } from "./styles";
import { colors } from "../colors";

interface Props {
  produto: ProdutoItem;
  aoAlternarComprado: (id: string) => void;
  aoRemover: (id: string) => void;
}

export default function ProdutoListaItem({
  produto,
  aoAlternarComprado,
  aoRemover,
}: Props) {
  const comprado = produto.comprado;

  function tocarNoProduto() {
    aoAlternarComprado(produto.id);
  }

  function tocarNaLixeira() {
    aoRemover(produto.id);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nameRow} onPress={tocarNoProduto}>
        {comprado ? (
          <CircleCheckBig color={colors.azul500} size={20} />
        ) : (
          <CircleDashed color={colors.textSecondary} size={20} />
        )}
        <Text style={[styles.nome, comprado && styles.nomeComprado]}>
          {produto.nome}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={tocarNaLixeira}>
        <Trash2 color={colors.textSecondary} strokeWidth={1} />
      </TouchableOpacity>
    </View>
  );
}