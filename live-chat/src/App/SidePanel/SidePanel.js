import React from "react";
import "./SidePanel.css";
import Item from "./Item/Item";
import Icon from "../../components/Icon/Icon";


export default class SidePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = (channel) => {
      this.props.onChangeChannel(channel.path);
    }

    newChannel = () => {
        this.props.onNewChannel();
    }

    renderList() {
      var list = []
      // iterate over object list
      for(const key in this.props.list) {
        list.push(
          <Item title={key} onClick={() => this.onClick(this.props.list[key])} />
        )
      }

      return list;
    }

    render() {
        return (
          <div className="side-panel-container">
            <div className="side-panel">
                <div class="side-panel-header">
                </div>
                <div class="side-panel-list">
                  {
                    this.renderList()
                  }
                </div>


                <Item isAdd={true} title="Join Channel" onClick={this.newChannel}/>
            </div>
          </div>
        );
    }
}