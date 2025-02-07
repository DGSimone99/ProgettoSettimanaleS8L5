import { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: false,
    hasError: false,
    errorMessage: "",
  };

  fetchMovies = async () => {
    this.setState({ isLoading: true });

    try {
      console.log("Caricando i Film...");
      const resp = await fetch(`http://www.omdbapi.com/?apikey=1e8937be&s=${this.props.movies}`);
      if (resp.ok) {
        const movies = await resp.json();

        console.log("Film recuperati...", movies);
        if (movies.Search) {
          this.setState({ movies: movies.Search });
        }
      } else {
        if (resp.status === 404) {
          throw new Error("Risorsa inesistente");
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      }
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container fluid>
        <h2 className="my-5 fs-1">{this.props.saga}</h2>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="primary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4 mx-5 px-5">
          {this.state.movies.slice(0, 6).map((movie) => {
            return (
              <Col className="mb-2 text-center p-0 mx-0" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
