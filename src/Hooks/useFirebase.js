import {useState, useEffect, useContext} from 'react';

//databse:
import {db} from '../Firebase';

//context:
import {AuthContext} from '../Context/AuthContext';

const useFirebase = () => {
    //getting details about user account:
    const {currentUser} = useContext(AuthContext);
    
    //add new item into todo list:
    const  SaveTask = async (e, data, setData) => {
        e.preventDefault();

        if( data.length > 0 & e.keyCode === 13 || e.currentTarget.type === 'submit'){            
            try{
                await db.ref(`${currentUser.uid}/tasks`).push({
                    task: data,
                    ifFinished: false,
                    listOrder: false,
                });
                setData('');
            }
            catch (error) {
                console.log(error);
            };
        }
        else
            return false;
    };

    //get todo list from database: 
    const [tasks, setTasks] = useState([]);   

    const getData = async () => {
        try {
            await db.ref(`${currentUser.uid}/tasks`).on('value', snapshot => {
                let receivedData = [];

                snapshot.forEach(item => {
                    receivedData.push({
                        id: item.key,
                        task: item.val().task,
                        ifFinished: item.val().ifFinished,         
                    })
                });

                setTasks(() => receivedData);
            })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
        return () => db.ref(`${currentUser.uid}/tasks`).off();
        // eslint-disable-next-line
    }, []);

    //update list:
    const UpdateList = async (newData) => {
        try {
            await db.ref(`${currentUser.uid}/tasks`).set(newData);
            await setTasks(newData);            
        } catch (error) {
            console.log(error);
        }
    };

    //update task:
    const UpdateItem = async (itemId, newData) => {
        try {
            await db.ref(`${currentUser.uid}/tasks`).child(`${itemId}`).update({task: newData});            
        } catch (error) {
            console.log(error);
        }
    };

    // remove todo from list:
    const RemoveItem = key => {
        try {
            db.ref(`${currentUser.uid}/tasks`).child(`${key}`).remove()
        } catch (error) {
            console.log(error);
        }
    };

    return ({
        tasks,
        setTasks,
        UpdateList,
        SaveTask,
        UpdateItem,
        RemoveItem
    });
};

export default useFirebase;