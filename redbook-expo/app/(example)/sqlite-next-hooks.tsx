// sqlite - next
// 提供对可通过 SQLite API 查询的数据库的访问的库。
// expo - sqlite使您的应用程序能够访问可通过 SQLite API 查询的数据库。数据库在应用程序重新启动后保留。
// storereview
// 一个库，提供对本机 API 的访问以进行应用内评论。

// expo - store - review提供对SKStoreReviewControlleriOS 上的 API 和ReviewManagerAndroid 5.0 + 中的 API 的访问，允许您要求用户对您的应用程序进行评分，而无需离开应用程序本身。
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite/next';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {

    return (
        <View style={styles.container}>
            <Suspense fallback={<Text>aaa</Text>}>
                <SQLiteProvider databaseName="sql.db" onInit={migrateDbIfNeeded}>
                    <Header />
                    <Content />
                    <Counter />
                </SQLiteProvider>
            </Suspense>
        </View>
    );
}

export function Counter() {
    // 异步事务中执行查询
    const db = useSQLiteContext();
    const [count, setCount] = useState('');

    useEffect(() => {
        async function setup() {
            await db.withTransactionAsync(async () => {
                const result = await db.getFirstAsync('SELECT COUNT(*) FROM todos');
                console.log('result', result);
                console.log('Count:', result['COUNT(*)']);
                setCount(result['COUNT(*)']);
            });
        }
        setup();
    }, []);
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>SQLite row count: {count}</Text>
        </View>
    );
}
export function Header() {
    const db = useSQLiteContext();
    const [version, setVersion] = useState('');
    useEffect(() => {
        async function setup() {
            const result = await db.getFirstAsync<{ 'sqlite_version()': string }>(
                'SELECT sqlite_version()'
            );
            setVersion(result['sqlite_version()']);
        }
        setup();
    }, []);
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>SQLite version: {version}</Text>
        </View>
    );
}

interface Todo {
    value: string;
    intValue: number;
}

export function Content() {
    const db = useSQLiteContext();
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function setup() {
            const result = await db.getAllAsync<Todo>('SELECT * FROM todos');
            console.log('todos result', result);
            setTodos(result);
        }
        setup();
    }, []);

    return (
        <View style={styles.contentContainer}>
            {todos.map((todo, index) => (
                <View style={styles.todoItemContainer} key={index}>
                    <Text>{`${todo.intValue} - ${todo.value}`}</Text>
                </View>
            ))}
        </View>
    );
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
    const DATABASE_VERSION = 1;
    let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>(
        'PRAGMA user_version'
    );
    if (currentDbVersion >= DATABASE_VERSION) {
        return;
    }
    if (currentDbVersion === 0) {
        await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
`);
        await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
        await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);
        await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'sqlite', 3);
        currentDbVersion = 1;
    }
    // if (currentDbVersion === 1) {
    //   Add more migrations
    // }
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

const styles = StyleSheet.create({
    // Your styles...
});
