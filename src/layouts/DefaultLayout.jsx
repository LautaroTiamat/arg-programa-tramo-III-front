import { Card } from 'react-bootstrap';

import MyNavbar from './../components/Navbar.jsx';

const DefaultLayout = (props) => {
    const children = props.children;

    return (
        <>
            <MyNavbar />
            
            <div style={{ padding: 20 }}>
                <Card>
                    { children }
                </Card>
            </div>
        </>
    );
}

export default DefaultLayout
