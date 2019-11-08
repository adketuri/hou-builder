import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addSkillPoint } from "../../../../actions";
import Button from "react-bootstrap/Button";

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ allocation: 0 });
  }

  render() {
    const skill = this.props.skill;
    return (
      <tr>
        <td>{skill.name}</td>
        <td>{skill.description}</td>
        <td>{skill.cost}</td>
        <td>
          {this.state.allocation}
          <Button
            size="sm"
            className="stat-button"
            onClick={() => this.addSkillPoint(skill.id)}
          >
            +
          </Button>
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    allocation: state.allocations[props.id - 1]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addSkillPoint: addSkillPoint
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
