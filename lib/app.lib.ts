import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";
import { db } from '../config/app';



export const getRecentProjectData = async (id : string) => {

    const docRef = doc(db, "recent_projects", id);
    const docSnap = await getDoc(docRef);
    
   return docSnap

}

export const getTechnologyData = async (id : string) => {

    const techArray: DocumentData[] = []

    const docRef = collection(db, "technologies")
    const techInfoRef =  doc(db, "technologies_info", id)

    const [docSnap , techInfo] = await Promise.all([
        getDocs(docRef),
        getDoc(techInfoRef)

    ])

    docSnap.forEach(data => techArray.push(data.data()))

    return {
        info : techInfo.exists() ? techInfo.data() : null,
        techImages : techArray
    }

}

export const getCompanyInfo = async (id : string) => {
    const docRef = doc(db, "companeyInfo", id);
    const docSnap = await getDoc(docRef);


    return docSnap.exists() ? docSnap.data() : null
    
}