import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form';
import * as actions from '../../actions/category-actions';
import CardForm from '../card-form';
import CardItem from '../card-item';
import { cardCreate } from '../../actions/card-actions';


const CategoryItem = ({ category, categoryUpdate, categoryDelete, cards }) => (
  <section className='category-item'>
    <div>
      <div className='content'>
        <h3>{category.title}</h3>
        <button onClick={() => categoryDelete(category)}>Delete</button>
      </div>
      <div className='editing'>
        <CategoryForm
          buttonText='Update'
          category={category}
          saveCategory={categoryUpdate} />
      </div>
      <div className='card-container'>
        <CardForm
          buttonText='Create Card'
          onSave={cardCreate}
          categoryID={category.id}
        />
        <ul className='card-items'>
          {cards.map(card =>
            <CardItem key={card.id} card={card} />)}
        </ul>
      </div>

    </div>
  </section>
);

let mapStateToProps = (state, props) => ({
  cards: state.cards[props.category.id],
});

let mapDispatchToProps = (dispatch) => ({
  categoryUpdate: category => dispatch(actions.categoryUpdate(category)),
  categoryDelete: category => dispatch(actions.categoryRemove(category)),
  cardCreate: card => dispatch(cardCreate(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
