import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore"
import { db } from "../config/firebase.js"

//llamo a la coleccion de tareas
const TasksCollection = collection(db, "tasks")

const getTasksComplete = async (uid) => {

        const queryUserTasks = query(TasksCollection, where("userId", "==", uid), where("complete", "==", true));
        const querySnapshot = await getDocs(queryUserTasks);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    
}

const getTasksInProgress = async (uid) => {
    const queryUserTasks = query(TasksCollection, where("userId", "==", uid), where("complete", "==", false));
    const querySnapshot = await getDocs(queryUserTasks);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}

const addTask = async (task) => {
    const docRef = await addDoc(TasksCollection, task)
    return {
        id: docRef.id,
        ...task
    }
}

const updateTask = async (id, updates) => {
  const task = doc(db, "tasks", id)
  await updateDoc(task, updates)
  return {
    id,
    ...updates
  }
}

const deleteTask = async (id) => {
  const task = doc(db, "tasks", id)
  await deleteDoc(task)
  return id
}

export {addTask, getTasksComplete, getTasksInProgress, updateTask, deleteTask}
