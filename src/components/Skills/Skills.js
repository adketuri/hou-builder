import { trackPromise } from "react-promise-tracker";
import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addSkillPoint } from "../../actions";
import Accordion from "react-bootstrap/Accordion";
import SkillTree from "./SkillTree/SkillTree";

const names = ["Physical", "Magical", "Agile", "Spiritual", "Ranged"];

class Skills extends React.Component {
  render() {
    if (this.state === null) {
      return <></>;
    }
    const cards = [];
    for (let i = 0; i < this.state.skills.length / 12; i++) {
      cards.push(
        <SkillTree
          key={i}
          start={i * 12}
          name={names[i]}
          skills={this.state.skills}
        />
      );
    }
    return (
      <>
        <h1>Skills</h1>
        <Accordion defaultActiveKey="0">{cards}</Accordion>
      </>
    );
  }

  componentDidMount() {
    this.setState({
      skills: []
    });
    trackPromise(
      fetch("https://api.heroesofumbra.com/v1/skills", {
        method: "GET",
        credentials: "same-origin", //include, same-origin
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
    )
      .then()
      .then(res => res.json())
      .then(data => {
        this.setState({ skills: data });
      })
      .catch(console.log);
  }
}

function mapStateToProps(state) {
  return {
    allocations: state.skills
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
)(Skills);
