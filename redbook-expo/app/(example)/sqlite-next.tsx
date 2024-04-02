// sqlite - next
// 提供对可通过 SQLite API 查询的数据库的访问的库。
// expo - sqlite使您的应用程序能够访问可通过 SQLite API 查询的数据库。数据库在应用程序重新启动后保留。
// storereview
// 一个库，提供对本机 API 的访问以进行应用内评论。

// expo - store - review提供对SKStoreReviewControlleriOS 上的 API 和ReviewManagerAndroid 5.0 + 中的 API 的访问，允许您要求用户对您的应用程序进行评分，而无需离开应用程序本身。

import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as StoreReview from 'expo-store-review';
import { useEffect } from 'react';
import * as SQLite from 'expo-sqlite/next';

export default function TabTwoScreen() {

    const curdAction = async () => {
        const db = await SQLite.openDatabaseAsync('databaseName');

        // `execAsync()` is useful for bulk queries when you want to execute altogether.
        // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
        INSERT INTO test (value, intValue) VALUES ('test1', 123);
        INSERT INTO test (value, intValue) VALUES ('test2', 456);
        INSERT INTO test (value, intValue) VALUES ('test3', 789);
        `);

        // `runAsync()` is useful when you want to execute some write operations.
        const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
        console.log('1.result', result.lastInsertRowId, result.changes);
        await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
        await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
        await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object

        // `getFirstAsync()` is useful when you want to get a single row from the database.
        const firstRow = await db.getFirstAsync('SELECT * FROM test');
        console.log('2.firstRow', firstRow.id, firstRow.value, firstRow.intValue);

        // `getAllAsync()` is useful when you want to get all results as an array of objects.
        const allRows = await db.getAllAsync('SELECT * FROM test');
        for (const row of allRows) {
            console.log('3.row', row.id, row.value, row.intValue);
        }

        // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
        for await (const row of db.getEachAsync('SELECT * FROM test')) {
            console.log('4.row', row.id, row.value, row.intValue);
        }

    }

    const prepareSQLite = async () => {
        const db = await SQLite.openDatabaseAsync('databaseName');
        const statement = await db.prepareAsync(
            'INSERT INTO test (value, intValue) VALUES ($value, $intValue)'
        );
        try {
            let result = await statement.executeAsync({ $value: 'bbb', $intValue: 101 });
            console.log('bbb and 101:', result.lastInsertRowId, result.changes);

            result = await statement.executeAsync({ $value: 'ccc', $intValue: 102 });
            console.log('ccc and 102:', result.lastInsertRowId, result.changes);

            result = await statement.executeAsync({ $value: 'ddd', $intValue: 103 });
            console.log('ddd and 103:', result.lastInsertRowId, result.changes);
        } finally {
            await statement.finalizeAsync();
        }

        const statement2 = await db.prepareAsync('SELECT * FROM test WHERE intValue >= $intValue');
        try {
            const result = await statement2.executeAsync<{ value: string; intValue: number }>({
                $intValue: 100,
            });

            // `getFirstAsync()` is useful when you want to get a single row from the database.
            const firstRow = await result.getFirstAsync();
            console.log(firstRow.id, firstRow.value, firstRow.intValue);

            // Reset the SQLite query cursor to the beginning for the next `getAllAsync()` call.
            await result.resetAsync();

            // `getAllAsync()` is useful when you want to get all results as an array of objects.
            const allRows = await result.getAllAsync();
            for (const row of allRows) {
                console.log(row.value, row.intValue);
            }

            // Reset the SQLite query cursor to the beginning for the next `for-await-of` loop.
            await result.resetAsync();

            // The result object is also an async iterable. You can use it in `for-await-of` loop to iterate SQLite query cursor.
            for await (const row of result) {
                console.log(row.value, row.intValue);
            }
        } finally {
            await statement2.finalizeAsync();
        }

    }

    useEffect(() => {
        (async () => {

        })();
        curdAction();
        prepareSQLite();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>

            <TouchableOpacity style={styles.btn} onPress={() => {
                checkIfHasAction();
            }}>
                <Text style={styles.tabTxtSelected}>
                    checkIfHasAction
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    btn: {
        width: 150,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#006adc",
        borderRadius: 10,
        margin: 10,
    },
    tabTxtSelected: {
        fontSize: 16,
        color: "#fff",
    },
});
