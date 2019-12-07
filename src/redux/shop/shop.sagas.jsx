import { takeLatest, put, call } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { firestore ,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';




export function* fetchCollectionsAsync(){
        // yield console.log('I am fired');


    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error){
        yield put(fetchCollectionsFailure(error.message));
    }
    



        // dispatch(fetchCollectionsStart())

        // fetch('https://firestore.googleapis.com/v1/projects/commerce-bbb85/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections =>console.log(collections));

        // collectionRef.get().then(snapshot =>{
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     dispatch(fetchCollectionsSuccess(collectionsMap));
        //     // this.setState({loading:false});
        // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}



export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}