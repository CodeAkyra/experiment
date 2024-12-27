import { RiTailwindCssFill } from "react-icons/ri";
export default function App() {
  return (
    <>
      <div class="container">
        <h1 class="headerIntro animate--type animate--infinite">
          BOOOOOOOOOOOOOOOOOOOOOOOOOOP
        </h1>
      </div>

      <div className="skillSet">
        <a href="#" class="Icon">
          <div class="animate square-back animate--infinite animate--slow">
            <div class="animate square-front animate--infinite animate--slow">
              <i class="animate fa-brands fa-react animate--infinite animate--slow"></i>
            </div>
          </div>
          <p class="skillText">React</p>
        </a>

        <a href="#" class="Icon">
          <div class="animate square-back animate--infinite animate--slow">
            <div class="animate square-front animate--infinite animate--slow">
              <i class="animate animate--infinite animate--slow"></i>
              <img className="cat" src="/cat-circle.png"></img>
            </div>
          </div>
          <p class="skillText">Tailwind</p>
        </a>

        <div class="Icon">
          <div class="animate square-back animate--infinite animate--slow">
            <div class="animate square-front animate--infinite animate--slow">
              <div class="animate fa-brands fa-html5 animate--infinite animate--slow"></div>
            </div>
          </div>
          <p class="skillText">HTML</p>
        </div>

        <div class="Icon">
          <div class="animate square-back animate--infinite animate--slow">
            <div class="animate square-front animate--infinite animate--slow">
              <i class="animate fa-brands fa-css3-alt animate--infinite animate--slow"></i>
            </div>
          </div>
          <p class="skillText">CSS</p>
        </div>

        <div class="Icon">
          <div class="animate square-back animate--infinite animate--slow">
            <div class="animate square-front animate--infinite animate--slow">
              <i class="animate fa-brands fa-js animate--infinite animate--slow"></i>
            </div>
          </div>
          <p class="skillText">JavaScript</p>
        </div>

        <div class="Icon">
          <div class="animate square-back animate--infinite animate--slow">
            <div class="animate square-front animate--infinite animate--slow">
              <i class="animate fa-brands fa-php animate--infinite animate--slow"></i>
            </div>
          </div>
          <p class="skillText">PHP</p>
        </div>
      </div>
    </>
  );
}
