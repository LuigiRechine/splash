import { View, Text, Pressable, Image,} from "react-native";
import { useState } from "react";
import styles from "../css/style";
import Button from "./Button";

type propsCourseCard = {
    title: string;
    describe: string;
    visu: number;
    image: any;
}

export default function CourseCard({ title, describe, visu, image }: propsCourseCard) {
    const [count, setCount] = useState(visu);

    function handleVisu() {
        setCount(count + 1)
    }

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>

            <Image source={image} style={styles.cardImage} />

            <Text style={styles.cardDescribe}>
                {describe}
            </Text>

            <Pressable style={styles.btnCard} onPress={handleVisu}>
                <Button >
                    INICIAR
                </Button>
            </Pressable>

            <Text style={styles.cardDescribe}>
                Visualizações = {count}
            </Text>
        </View>
    );

}