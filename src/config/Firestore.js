import { addDoc, getDocs, collection } from "firebase/firestore";
import { FIREBASE_DB } from "./FirebaseConfig";

export async function saveService(data) {
    try {
        await addDoc(collection(FIREBASE_DB, "services"), data)
        return 'ok'
    } catch (error) {
        console.log("Erro ao salvar o produto", error)
        return "erro"
    }
}

export async function listService(data) {
    try {
        const querySnapshot = await getDocs(collection(FIREBASE_DB, "services"));
        let services = []
        querySnapshot.forEach((doc) => {
          let srv = {id: doc.id, ...doc.data()}
          services.push(srv)
        });
        return services
    } catch (error) {
        console.log(error)
        return []
    }
}