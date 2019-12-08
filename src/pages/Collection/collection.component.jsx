import React from 'react';

import './collection.styles.jsx';
import { selectCollection } from  '../../redux/shop/shop.selector'
import CollectionItem from '../../components/Collection-item/Collection-item.component'
import {connect} from 'react-redux'
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles';

const CollectionPage = ({collection}) => {
    

const {title ,items} = collection ; 

    return (<CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
        {items.map(item =>(
            <CollectionItem hey={item.id} item={item}/>
        ))}
        </CollectionItemsContainer>
        </CollectionPageContainer>
    )  
}

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);