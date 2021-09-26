/*<-----User.JS Are Stating Here With Connected User Summary & Cart */
import React, { useState, useEffect } from 'react';
import './User.css';
import UserSummary from '../UserSummary/UserSummary';
import Cart from '../Cart/Cart';

const User = () => {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([])

    /*<----- Using  Use-Effect Function Here With Custom JSON Data Load ----->*/
    useEffect(() => {
        fetch('./programmer.JSON')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    /*<----- Handling For Same User ----->*/
    const handleUserAdded = (user) => {
        const existId = cart.find(addedId => addedId.id === user.id);
        if (existId) {
            alert("This Programmer Allready Included In Your List😍😎");
        }
        else {
            const newCart = [...cart, user];
            setCart(newCart)
        }
    }
    return (
        <div className="user-container">
            <div className="user">
                {
                    /*<----- Users Are Mapping & Key Using For Stop Showing Error ----->*/
                    users.map(user => <UserSummary
                        user={user}
                        key={user.id}
                        handleUserAdded={handleUserAdded}>
                    </UserSummary>)
                }
            </div>
            <div>
                {/* Cart Are Dynamically Show Here */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;
/*<-----User.JS Are Ending Here With Connected User Summary & Cart */