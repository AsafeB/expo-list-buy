import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ListaItens from "./components/ListaItens/ListaItens";
import { colors } from "./components/colors";
import { ProdutoItem } from "./interfaces/ProdutoItem";

const CHAVE_LISTA = "@minha_lista_compras";

export default function App() {
  const [produtos, setProdutos] = useState<ProdutoItem[]>([]);
  const [carregou, setCarregou] = useState(false);

  // Carrega os produtos salvos assim que o app abre
  useEffect(() => {
    async function carregarProdutos() {
      const json = await AsyncStorage.getItem(CHAVE_LISTA);
      const listaSalva: ProdutoItem[] = json ? JSON.parse(json) : [];
      setProdutos(listaSalva);
      setCarregou(true);
    }

    carregarProdutos();
  }, []);

  // Salva os produtos toda vez que a lista mudar (depois do carregamento inicial)
  useEffect(() => {
    if (!carregou) {
      return;
    }

    AsyncStorage.setItem(CHAVE_LISTA, JSON.stringify(produtos));
  }, [produtos, carregou]);

  function adicionarProduto(nome: string) {
    const novoProduto: ProdutoItem = {
      id: Date.now().toString(),
      nome,
      comprado: false,
    };

    setProdutos([...produtos, novoProduto]);
  }

  function alternarComprado(id: string) {
    const novaLista = produtos.map((produto) => {
      if (produto.id === id) {
        return { ...produto, comprado: !produto.comprado };
      }

      return produto;
    });

    setProdutos(novaLista);
  }

  function removerProduto(id: string) {
    const novaLista = produtos.filter((produto) => produto.id !== id);
    setProdutos(novaLista);
  }

  function limparAba(comprado: boolean) {
    const novaLista = produtos.filter((produto) => produto.comprado !== comprado);
    setProdutos(novaLista);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Form aoAdicionar={adicionarProduto} />
        <ListaItens
          produtos={produtos}
          aoAlternarComprado={alternarComprado}
          aoRemover={removerProduto}
          aoLimparAba={limparAba}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});