import {useState, useEffect} from "react"
import { dbFire } from "../firebase/config"
import { 
    collection, 
    query, 
    orderBy, 
    onSnapshot, 
    where,
    limit, 
    QuerySnapshot
} from "firebase/firestore"


export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null)
    const [documentsDestaque, setDocumentsDestaque] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    //Mapear (useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                if(search) {
                    q = await query(collectionRef, where("titulo", "==", search), 
                    orderBy("createdAt", "desc")
                    )
                } else {
                    q = await query(collectionRef, orderBy('createdAt', 'desc'))
                }

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })

            } catch (error) {
                console.log(error)
                setError(error.message);

                setLoading(false);
            }
        }
        loadData();
    }, [docCollection, documents, search, uid, cancelled]);

    //Mapear conteudo destaque(useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, orderBy('createdAt', 'desc'), limit(5))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsDestaque(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })

            } catch (error) {
                console.log(error)
                setError(error.message);

                setLoading(false);
            }
        }
        loadData();
    }, [docCollection, documents, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {documents, documentsDestaque, loading, error}
}