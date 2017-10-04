
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({ title: 'New Category' });
  }

  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText="Add Category"
          saveCategory={this.props.categoryCreate} />
        {this.props.categories.map(category =>
          <CategoryItem key={category.id} category={category} />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => dispatch(actions.categoryCreate(category)),
    categoryUpdate: (category) => dispatch(actions.categoryUpdate(category)),
    categoryRemove: (category) => dispatch(actions.categoryRemove(category)),
  };
};

var connecter = connect(mapStateToProps, mapDispatchToProps);
export default connecter(DashboardContainer);
