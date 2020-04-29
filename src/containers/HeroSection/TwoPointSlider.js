import React from "react";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

class TwoPointSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value4: {
        min: this.props.minValue,
        max: 2000000,
      },
    };
  }

  render() {
    return (
      <form>
        <InputRange
          step={100}
          maxValue={200000}
          minValue={0}
          formatLabel={(value) => `${value} All`}
          value={this.state.value4}
          onChange={(value) => this.setState({ value4: value })}
          onChangeComplete={(value) => {
            console.log(value);
            console.log(this.props);
          }}
        />
      </form>
    );
  }
}

export default TwoPointSlider;
