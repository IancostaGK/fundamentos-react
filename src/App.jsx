import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header author="Ian Santos" content="Lorem Ipsum 1" />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Amanda Claro" content="Lorem Ipsum 2" />
          <Post author="Julinho Claro" content="Lorem Ipsum 3" />
        </main>
      </div>
    </>
  );
}

export default App;
