import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import axios from 'axios';

function Home({ menus }) {
  return (
    <ProSidebar>
      <Menu>
        {menus.map(item => (
          <SubMenu title={item.name}>
            {item.subMenus.map(subItem => (
              <MenuItem>{subItem.name}</MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </ProSidebar>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    'http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus'
  );
  return {
    props: { menus: response.data }, // will be passed to the page component as props
  };
}

export default Home;
