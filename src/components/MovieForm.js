import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <label className="form-label" htmlFor="movie_title">
        <p>Título</p>
        <input
          id="movie_title"
          type="text"
          className="validate"
          value={ title }
          onChange={ (event) => this.updateMovie('title', event.target.value) }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label className="form-label" htmlFor="movie_subtitle">
        <p>Subtítulo</p>
        <input
          id="movie_subtitle"
          type="text"
          value={ subtitle }
          onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
        />
      </label>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <label className="form-label" htmlFor="movie_image">
        <p>Link da Imagem</p>
        <input
          id="movie_image"
          type="text"
          value={ imagePath }
          onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <label className="form-label" htmlFor="movie_storyline">
        <p>Sinopse</p>
        <textarea
          id="movie_storyline"
          value={ storyline }
          onChange={ (event) => this.updateMovie('storyline', event.target.value) }
        />
      </label>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <label className="form-label" htmlFor="movie_genre">
        <p>Gênero</p>
        <select
          id="movie_genre"
          value={ genre }
          onChange={ (event) => this.updateMovie('genre', event.target.value) }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label className="form-label" htmlFor="movie_rating">
        <p>Avaliação</p>
        <input
          id="movie_rating"
          type="number"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ rating }
          onChange={ (event) => this.updateMovie('rating', event.target.value) }
        />
      </label>
    );
  }

  renderSubmitButton() {
    return (
      <button
        type="button"
        onClick={ this.handleSubmit }
        className="add-button"
      >
        Adicionar
      </button>
    );
  }

  render() {
    return (
      <form className="movie-form-container">
        <h2 className="add-title">Adicionar Filme</h2>
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagePathInput()}
        {this.renderStorylineInput()}
        <div className="rate-genre-container">
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
        </div>
        {this.renderSubmitButton()}
      </form>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
