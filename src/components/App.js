import React from 'react';
import Product from './Product';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: props.products
		};
	}
  
	onVote = (dir, index) => {
		const {products} = this.state;
		const product = products[index];

		if(dir === 'plus') {
			product.votes += 1;
		} else if (dir === 'minus') {
			product.votes -= 1;
		}

		this.setState({
			products
		});
	};
 
	render() {
		const {products} = this.state;

		return (
			<ul>
				{
					products.map((product, index) => {
						return <Product product={product} 
										key={`${product.name} - ${index}`} 
										index={index} 
										onVote={this.onVote}
						/>
					})
				}
			</ul>
		);
	}
}

export default App;
