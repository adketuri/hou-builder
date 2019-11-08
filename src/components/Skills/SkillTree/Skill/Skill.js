import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addSkillPoint } from "../../../../actions";
import Button from "react-bootstrap/Button";

class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skill = this.props.skill;
    return (
      <tr>
        <td>{skill.name}</td>
        <td>{skill.description}</td>
        <td>{skill.cost}</td>
        <td>
          {this.props.allocation}/9
          <Button
            size="sm"
            className="stat-button"
            onClick={() => this.props.addSkillPoint(this.props.id)}
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
    allocation: state.skills.allocations[props.id]
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

Skill.defaultProps = {
  allocation: 0
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
