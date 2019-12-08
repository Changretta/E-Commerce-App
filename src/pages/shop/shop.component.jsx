import React, {useEffect} from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections.overview.container';
import { Route } from 'react-router-dom';
// import {createStructuredSelector} from 'reselect';
// import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';
import CollectionPageContainer from '../Collection/collection.container';
// import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {fetchCollectionsStart  } from '../../redux/shop/shop.actions';
// import WithSpinner from '../../components/spinner/spinner.component';


// const CollectionPageWithSpinner = WithSpinner(CollectionPage);


const ShopPage = ({match, fetchCollectionsStart}) => {
    
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart] )

//    state ={
//        loading:true
//    };
//     unsubscribeFromSnapshot = null;

    // componentDidMount({ fetchCollectionsStart }){


    //     const { fetchCollectionsStart } = this.props;
    //     fetchCollectionsStart();
    //     // const {updateCollections} = this.props
    //     // const collectionRef = firestore.collection('collections');

    //     // // fetch('https://firestore.googleapis.com/v1/projects/commerce-bbb85/databases/(default)/documents/collections')
    //     // // .then(response => response.json())
    //     // // .then(collections =>console.log(collections));

    //     // collectionRef.get().then(snapshot =>{
    //     //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     //     updateCollections(collectionsMap);
    //     //     this.setState({loading:false});
    //     // })
    // }
    
    
        // const {match } = this.props
        // const {loading} = this.state
        return(
            <div className="shop-page"> 
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} /> 
            <Route path={`${match.params}/:collectionId`} component={CollectionPageContainer}/>
            </div>
        )


    


} 

// const mapStateToProps = createStructuredSelector({
//     isCollectionsLoaded:selectIsCollectionsLoaded
// })


const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())


});

        
export default connect(null,mapDispatchToProps)(ShopPage);