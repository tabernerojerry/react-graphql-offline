import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import M from "materialize-css";

import Back from "../Back";

class Editor extends Component {
  state = {
    id: this.props.id || null,
    title: this.props.title || "",
    content: this.props.content || ""
  };

  _onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  _onSubmit = event => {
    event.preventDefault();

    const { title, content } = this.state;
    const { onSave } = this.props;

    // validate fields
    if (title === "" || content === "")
      return M.toast({
        html: "Ooops! All fields are required.",
        classes: "red"
      });

    // save note
    onSave(this.state);
  };

  render() {
    const { id, title, content } = this.state;
    return (
      <>
        <Back />
        <div className="container">
          <div className="row">
            <form onSubmit={this._onSubmit}>
              <h1 className="grey-text">{!id ? "Add Note" : "Edit Note"}</h1>

              <div className="input-field col s10">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={this._onChange}
                  placeholder="Note Title"
                  style={{ fontSize: "24px" }}
                />
              </div>

              <div className="input-field col s2">
                <button
                  type="submit"
                  className="btn btn-large orange darken-1 right"
                >
                  Save
                </button>
              </div>

              <div className="input-field col s6">
                <textarea
                  name="content"
                  id="content"
                  onChange={this._onChange}
                  value={content}
                  className="materialize-textarea"
                  style={{ fontSize: "24px", minHeight: "300px" }}
                  placeholder="# Content This Supports Markdown"
                />
              </div>

              <div className="input-field col s6">
                <ReactMarkdown source={content} />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Editor;
