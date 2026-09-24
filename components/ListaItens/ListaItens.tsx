import { CircleCheckBig, CircleDashed } from "lucide-react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { ProdutoItem } from "../../interfaces/ProdutoItem";
import ProdutoListaItem from "../ProdutoListaItem/ProdutoListaItem";
import { colors } from "../colors";

interface Props {
  produtos: ProdutoItem[];
  aoAlternarComprado: (id: string) => void;
  aoRemover: (id: string) => void;
  aoLimparAba: (comprado: boolean) => void;
}

export default function ListaItens({
  produtos,
  aoAlternarComprado,
  aoRemover,
  aoLimparAba,
}: Props) {
  const [active, setActive] = useState("presentes");

  function produtoDeveAparecer(produto: ProdutoItem) {
    if (active === "presentes") {
      return produto.comprado === false;
    } else {
      return produto.comprado === true;
    }
  }

  const produtosFiltrados = produtos.filter(produtoDeveAparecer);

  function alterarActiveParaPresentes() {
    setActive("presentes");
  }

  function alterarActiveParaComprados() {
    setActive("comprados");
  }

  function limparListaDaAbaAtual() {
    if (active === "comprados") {
      aoLimparAba(true);
    } else {
      aoLimparAba(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* Filtro */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.buttonTopBar}
          onPress={alterarActiveParaPresentes}
        >
          <CircleDashed
            color={active === "presentes" ? colors.azul500 : colors.textSecondary}
          />
          <Text
            style={{
              color: active === "presentes" ? colors.azul500 : colors.textSecondary,
            }}
          >
            Presentes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTopBar}
          onPress={alterarActiveParaComprados}
        >
          <CircleCheckBig
            color={active === "comprados" ? colors.azul500 : colors.textSecondary}
          />
          <Text
            style={{
              color: active === "comprados" ? colors.azul500 : colors.textSecondary,
            }}
          >
            Comprados
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginLeft: "auto" }}
          onPress={limparListaDaAbaAtual}
        >
          <Text style={{ color: colors.textSecondary }}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de itens */}
      <FlatList<ProdutoItem>
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={(linha) => (
          <ProdutoListaItem
            produto={linha.item}
            aoAlternarComprado={aoAlternarComprado}
            aoRemover={aoRemover}
          />
        )}
      />
    </View>
  );
}