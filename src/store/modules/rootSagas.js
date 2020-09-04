import { all } from 'redux-saga/effects';
import eventsData from  './eventsData/sagas';

export default function* rootSaga(){
    return yield all([
        eventsData,
    ])
}