import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import { ItemView } from './item-view';

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: true,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId || 
            this.props.getData !== prevProps.getData ||
            this.props.image !== prevProps.image) 
        {    
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        
        this.setState({ 
            loading: true 
        });

        if (!itemId) { return } 

        getData(itemId)
            .then(this.onItemLoaded);
    }

    onItemLoaded = (item) => {
        this.setState({ 
            item,
            image: this.props.getImageUrl(item),
            loading: false  
        });
    }

    render() {

        const { item, loading, image } = this.state;

        const spinner = loading ?  <Spinner /> : null;
        const content = !loading ? 
            <ItemView item={ item } 
                image={ image } 
                childs={this.props.children}/> :
            null;

        if (loading) {
            return <Spinner />;
        }

        return (
            <div className="item-details card">
                { spinner }
                { content }
            </div>
        );
    }
}

