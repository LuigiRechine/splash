import { View, Text, Pressable, Image,} from "react-native";
import { useState } from "react";
import styles from "../css/style";
import Button from "./Button";

type propsCourseCard = {
    title: string;
    describe: string;
    image: any;
}

export default function CourseCard({ title, describe, image }: propsCourseCard) {


    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>

            <Image source={image} style={styles.cardImage} />

            <Text style={styles.cardDescribe}>
                {describe}
            </Text>

            <View style={styles.btnCard}>
                <Button>
                    INICIAR
                </Button>
            </View>
        </View>
    );

}