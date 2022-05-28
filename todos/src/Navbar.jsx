import { Button } from 'react-bootstrap';

const Navbar = () => {
const menuitems = ['File','Tools','Help'];
const updatedlist = menuitems.map((menuitem, index ) => {
    return <Button variant="light" size="lg" key={index}>{menuitem}</Button>
});
    return <ul>{updatedlist}</ul>
}

export default Navbar;