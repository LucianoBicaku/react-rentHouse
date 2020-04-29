import React from "react";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value4: {
        min: 0,
        max: 10,
      },
    };
  }

  render() {
    return (
      <form>
        <InputRange
          maxValue={20}
          minValue={0}
          formatLabel={(value) => `${value} $`}
          value={this.state.value4}
          onChange={(value) => this.setState({ value4: value })}
          onChangeComplete={(value) => console.log(value)}
        />
      </form>
    );
  }
}

export default TestPage;
