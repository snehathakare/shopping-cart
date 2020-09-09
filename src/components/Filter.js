import React, { Component } from 'react'
import './filter.css'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter_count">{this.props.count} products</div>
                <div className="filter_sort">Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter_size">Filter {" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}
