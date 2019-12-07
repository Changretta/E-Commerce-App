import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections.overview.component';
import { Route } from 'react-router-dom';

import CollectionPage from '../Collection/collection.component';
import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/spinner/spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{
   state ={
       loading:true
   };
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');

        // fetch('https://firestore.googleapis.com/v1/projects/commerce-bbb85/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections =>console.log(collections));

        collectionRef.get().then(snapshot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
        })
    }
    
    
    render(){
        const {match} = this.props
        const {loading} = this.state
        return(
            <div className="shop-page"> 
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/> 
            <Route path={`${match.param}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )


    }


} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

        
export default connect(null,mapDispatchToProps)(ShopPage);