import { Component } from 'react'
import Head from 'next/head'
import { format } from 'date-fns'
import Clipboard from 'react-clipboard.js'
import axios from 'axios'

export class Share extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      data: this.props.data,
      pending: false,
    };
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  async handleAdd() {
    if (!this.state.text.trim()) {
      return
    }

    if (this.state.pending) {
      return
    }

    this.setState({
      pending: true
    })

    const { data } = await axios.post(`/api/shares?shareId=${this.props.shareId}`, {
      content: this.state.text,
      createdAt: new Date()
    })

    console.log('add', data)

    this.setState({
      text: '',
      pending: false,
      data: [data, ...this.state.data]
    })
  }

  async handleDelete(id) {
    const { data: r } = await axios.delete(`/api/shares?shareId=${this.props.shareId}&id=${id}`)
    console.log('delete ', id, r)

    const list = this.state.data.filter(d => d.id !== id)
    this.setState({ data: list })
  }

  onCopySuccess() {
    console.info('successfully copied')
  }

  renderList() {
    return this.state.data.map(d => {
      return (
        <div className="shadow bg-white rounded-lg p-5 mb-5 break-words" key={d.id}>
          <div>
            {d.content}
          </div>
          <div className="mt-5 flex justify-between items-center">
            <div className="text-gray-500 text-sm">{ format(new Date(d.createdAt), 'yyyy-MM-dd HH:mm:ss') }</div>
            <div className="flex space-x-2">
                <Clipboard className="bg-green-50 text-green-500 px-2 h-6 text-xs rounded-lg" data-clipboard-text={d.content} onSuccess={this.onCopySuccess.bind(this)}>
                  Copy
                </Clipboard>
              <button className="bg-blue-50 text-blue-500 px-2 h-6 text-xs rounded-lg" onClick={() => this.handleDelete(d.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <Head>
          <title>Text Share</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="bg-gray-50 min-h-screen">
            <div className="max-w-screen-md mx-auto py-10">
              <div className="shadow bg-white rounded-lg p-5 space-y-5 mb-5">
                <div className="text-xl font-medium">Share Text</div>
                <div className="w-full">
                  <textarea
                    className="w-full block border bg-transparent rounded-lg resize-none p-2 focus:outline-none focus:border-blue-500 focus:ring"
                    rows="10"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                  ></textarea>
                </div>
                <div className="flex justify-end items-end">
                  <button onClick={this.handleAdd.bind(this)} className="bg-green-500 text-white px-4 h-10 inline-flex items-center rounded-lg">
                    Submit
                  </button>
                </div>
              </div>

              {this.renderList()}

            </div>
          </div>;
        </main>
      </div>
    )
  }
}
