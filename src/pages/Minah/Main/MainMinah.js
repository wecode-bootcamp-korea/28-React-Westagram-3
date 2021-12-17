import Aside from "./Aside/Aside";
import Feed from "./Feed/Feed";
import NavigationBar from "./NavigationBar/NavigationBar";
import Story from "./Story/Story";
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './MainMinah.scss';

export default function MainMinah() {
  return (
    <div className="main_minah">
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