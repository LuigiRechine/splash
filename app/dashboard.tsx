import { Text, ScrollView } from "react-native";
import styles from "./css/style";
import HeaderImage from "./components/HeaderImage";
import CourseCard from "./components/CourseCard";
import Button from "./components/Button";
import { Link } from "expo-router";

export default function DashBoard() {
  return (
    <ScrollView contentContainerStyle={styles.dashboardContainer}>
      <HeaderImage />

      <Text style={styles.titulo}>
        Cursos disponíveis em SENAI EAD
      </Text>

      <CourseCard
        title="Geração de Valor Circular e Modelos de Negócios"
        visu={10}
        describe="A importância da geração de valor circular e dos modelos de negócios no contexto da economia circular."
        image={require("../assets/GeracaoValor.png")}
      />

      <CourseCard
        title="Desvendando o ESG"
        visu={18}
        describe="Conheça os principais conceitos da governança ambiental, social e corporativa."
        image={require("../assets/desvendandoESG.png")}
      />

      <CourseCard
        title="Cidadania Digital e Uso Consciente da Internet"
        visu={7}
        describe="Como usar a internet de maneira estratégica e segura, principalmente ao utilizar ferramentas de inteligência artificial (IA)."
        image={require("../assets/cidadaniaDigital.png")}
      />
      <Link href={"/login"} style={styles.botao}>
        <Button>
            SAIR
        </Button>
      </Link>
      
    </ScrollView>
  );
}