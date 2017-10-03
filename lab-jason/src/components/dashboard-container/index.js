
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/category-actions.js';

import CategoryForm from '../category-form/index';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({ title: 'From mapDispatchToProps' });
  }

  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText="Add Category"
          saveCategory={this.props.categoryCreate} />
        {this.props.categories.map(cat =>
          <div key={cat.id}>
            <h3>{cat.title}</h3>
          </div>
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
