import React from "react";
import "../styles.css";

class Company extends React.Component {
  render() {
    return (
      <li class="company">
        <div class="company-logo">
          <img src={this.props.logo} alt={this.props.name} />
          <div class="vert-line"></div>
        </div>
        <div class="company-text">
          <div class="company-sub">{this.props.time}</div>
          <div class="company-name">{this.props.name}</div>
          <div class="company-sub">{this.props.location}</div>
          <div>{this.props.detail}</div>
          <ul class="positions">
            {this.props.positions.map((position) => {
              return (
                <li class="position">
                  <div class="position-name">{position.name}</div>
                  <ul class="objectives">
                    {position.objectives.map((objective) => {
                      if (objective.includes("(TA)"))
                        return (
                          <li>
                            <strong>{objective}</strong>
                          </li>
                        );
                      return (
                        <li
                          dangerouslySetInnerHTML={{ __html: objective }}
                        ></li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
  }
}

export default Company;
