import { SingleBook } from "./SingleBook";
import { Component } from "react";
import { Row, Form } from "react-bootstrap";
import fantasy from "../json/fantasy.json";
/* export let BookList = ({ props }) => {
  return (
    <Row className="text-center row row-cols-4 d-flex flex-row row-gap-3 h-100">
      {props.map((libri) => (
        <SingleBook libro={libri} key={libri.asin} />
      ))}
    </Row>
  );
};
 */

class BookList extends Component {
  state = {
    search: "",
    books: fantasy,
  };
  handleChange = (search) => {
    this.setState({ search });
  };
  render() {
    return (
      <>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={this.state.inputValue}
            onChange={(e) => {
              console.log(e.target.value);
              this.handleChange(e.target.value);
            }}
          ></Form.Control>
        </Form>
        <Row className="text-center row row-cols-4 d-flex flex-row row-gap-3 h-100">
          {fantasy
            .filter((e) =>
              e.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((libri) => (
              <SingleBook libro={libri} key={libri.asin} />
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
