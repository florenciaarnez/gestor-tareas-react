import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase.js"
import { getAuth } from "firebase/auth";

//llamo a la coleccion de tareas
const TasksCollection = collection(db, "tasks")

const getTasksUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        const q = query(TasksCollection, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }
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

export {addTask,getTasksUser, updateTask, deleteTask}
