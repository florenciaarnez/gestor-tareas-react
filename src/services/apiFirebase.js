import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc, query, where, orderBy, Timestamp } from "firebase/firestore"
import { db } from "../config/firebase.js"

const TasksCollection = collection(db, "tasks");

const getTasksComplete = async (uid) => {

        const queryUserTasks = query(TasksCollection, where("userId", "==", uid), where("complete", "==", true));
        const querySnapshot = await getDocs(queryUserTasks);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            creationDate: doc.data().creationDate?.toDate(),
            deadLine: doc.data().deadLine?.toDate()
        }));
    
}

const getTasksInProgress = async (uid) => {
    const queryUserTasks = query(TasksCollection, where("userId", "==", uid), where("complete", "==", false), orderBy("deadLine", "asc"));
    const querySnapshot = await getDocs(queryUserTasks);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
         creationDate: doc.data().creationDate?.toDate(),
         deadLine: doc.data().deadLine?.toDate()
    }))
  };

const addTask = async (task) => {
    const docRef = await addDoc(TasksCollection, {...task, creationDate: Timestamp.fromDate(task.creationDate), deadLine: Timestamp.fromDate(task.deadLine)});
    return {
        id: docRef.id,
        ...task,
    }
}

const updateTask = async (id, updates) => {
  const task = doc(db, "tasks", id)
  await updateDoc(task,{ ...updates, deadLine: Timestamp.fromDate(updates.deadLine) })
  return {
    id,
    ...updates,
  }
}

const deleteTask = async (id) => {
  const task = doc(db, "tasks", id)
  await deleteDoc(task)
  return 
}

export {addTask, getTasksComplete, getTasksInProgress, updateTask, deleteTask}
