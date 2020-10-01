import {useState, useEffect, useContext} from 'react';

//databse:
import {db} from '../Firebase';

//context:
import {AuthContext} from '../Context/AuthContext';

const useFirebase = () => {
    const [tasks, setTasks] = useState([]);
    const [readError, setReadError] = useState([]);
    
    const {currentUser} = useContext(AuthContext);

    // get todo list:
    useEffect(() => {
        try{
            db.ref(`tasks/${currentUser.uid}`).on('value', snapshot => {
                let items = snapshot.val();
                let newState = [];
                
                for (let item in items) {
                    newState.push({
                        id: item,
                        finished: items[item].finished,
                        listOrder: items[item].listOrder,
                        value: items[item].value
                    })
                }
                
                setTasks(() => newState);
            })
        } 
        catch (error) {
            setReadError(error);
            console.log(readError);
        };

        // unsubscribe from database:
        return () => db.ref(`tasks/${currentUser.uid}`).off();

        // eslint-disable-next-line
    }, []);

    // remove todo from list:
    const RemoveItem = itemId => {
        const itemRef = db.ref(`tasks/${currentUser.uid}/${itemId}`);
        try{
            itemRef.remove();
        }
        catch (error){
            console.log(error);
        };
    };

    return ( {
        tasks,
        readError,
        RemoveItem
    });
};

export default useFirebase;
