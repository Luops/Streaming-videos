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
    const [documentsInspecao, setDocumentsInspecao] = useState(null)
    const [documentsRegulagem, setDocumentsRegulagem] = useState(null)
    const [documentsAjuste, setDocumentsAjuste] = useState(null)
    const [documentsSetup, setDocumentsSetup] = useState(null)
    const [documentsInspecaoDez, setDocumentsInspecaoDez] = useState(null)
    const [documentsRegulagemDez, setDocumentsRegulagemDez] = useState(null)
    const [documentsAjusteDez, setDocumentsAjusteDez] = useState(null)
    const [documentsSetupDez, setDocumentsSetupDez] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    //Mapear Conteudo padrao(useEffect)
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

    //Mapear conteudo por inspeções(useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "inspecao"), orderBy('createdAt', 'desc'), limit(5))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsInspecao(
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

    //Mapear conteudo por inspeções, últimos 10(useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "inspecao"), orderBy('createdAt', 'desc'), limit(10))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsInspecaoDez(
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

    //Mapear conteudo por regulagens(useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "regulagem"), orderBy('createdAt', 'desc'), limit(5))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsRegulagem(
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

    //Mapear conteudo por regulagens, últimos 10 (useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "regulagem"), orderBy('createdAt', 'desc'), limit(10))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsRegulagemDez(
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

    //Mapear conteudo por ajuste(useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "ajuste"), orderBy('createdAt', 'desc'), limit(5))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsAjuste(
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

    //Mapear conteudo por ajuste, últimos 10 (useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "ajuste"), orderBy('createdAt', 'desc'), limit(10))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsAjusteDez(
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

    //Mapear conteudo por setup(useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "setup"), orderBy('createdAt', 'desc'), limit(5))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsSetup(
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

    //Mapear conteudo por setup, últimos 10 (useEffect)
    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(dbFire, docCollection)

            try {
                let q;

                
                q = await query(collectionRef, where("tipoVideo", "==", "setup"), orderBy('createdAt', 'desc'), limit(10))
                

                await onSnapshot(q, (querySnapshot) => {
                    setDocumentsSetupDez(
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

    return {
        documents, 
        documentsDestaque, 
        documentsInspecao, 
        documentsRegulagem, 
        documentsAjuste, 
        documentsSetup,
        documentsInspecaoDez, 
        documentsRegulagemDez, 
        documentsAjusteDez, 
        documentsSetupDez,
        loading, 
        error}
}