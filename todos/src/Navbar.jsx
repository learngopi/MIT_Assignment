import { Button } from 'react-bootstrap';

  function handleClick(e) {
    alert(`hey! you clicked: ${e.target.innerHTML}`);
  }

const Navbar = () => {
const menuitems = ['File','Tools','Help'];
const updatedlist = menuitems.map((menuitem, index ) => {
    return <Button variant="light" size="lg" key={index} onClick={(e) => handleClick(e)} >{menuitem}</Button>
});
    return <ul>{updatedlist}</ul>
}

export default Navbar;