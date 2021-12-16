import Aside from "./Aside/Aside";
import Feed from "./Feed/Feed";
import NavigationBar from "./NavigationBar/NavigationBar";
import Story from "./Story/Story";

export default function MainMinah() {
  return (
    <div className="main">
      <NavigationBar />
      <main>
        <section>
          <Story />
          <Feed />
        </section>
        <aside>
          <Aside />
        </aside>
      </main>
    </div>
  );
}