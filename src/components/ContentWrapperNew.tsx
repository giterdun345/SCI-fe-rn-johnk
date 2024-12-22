import { SafeAreaView, StyleSheet } from "react-native";

import { PropsWithChildren } from "react";
import { ThemedView } from "./ThemedView";

export default function ContentWrapper({ children }: PropsWithChildren) {
    return (
        <SafeAreaView style={styles.container}>
            <ThemedView style={styles.themed}>
                {children}
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111827",
    },
    themed: {
        flex: 1,
        padding: 30,
        gap: 23,
    }
});
