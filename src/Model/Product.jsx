//Product model that will help us visualizing the data//
import React from 'react';
import Card from '../Small components/Card';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.productId,
            title: props.productTitle,
            weight: props.productWeight
        };
    }

    render() {
        return (
            <div>
                <Card
                    id={this.state.id}
                    title={this.state.title}
                    weight={this.state.weight}
                    className="product-card"
                    draggable="true"
                >

                </Card>
            </div>
        );
    }
}

export default Product;