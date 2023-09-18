import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Click me
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          qwe
        </Button>
      </div>
      <div>
        <Button warning>ewew</Button>
      </div>
      <div>
        <Button danger>ewew</Button>
      </div>
      <div>
        <Button danger outline>
          ewew
        </Button>
      </div>
      <div>
        <Button>ewew</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
