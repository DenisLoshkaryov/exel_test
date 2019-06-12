import React, { Component } from 'react';
import readXlsxFile from 'read-excel-file';
import arrayToObject from '../utils/arrayToObject';
import Charts from '../components/Chart';
import Header from '../components/Header';

export default class App extends Component {
  state = {
    exelObject: {},
    fileName: '',
  }

  uploadFile=({ target }) => {
    if (!target.files.length) return;
    readXlsxFile(target.files[0]).then((rows) => {
      const exelObject = arrayToObject(rows);
      this.setState(() => ({ exelObject, fileName: target.files[0].name }));
    });
  }

  render() {
    const { exelObject, fileName } = this.state;
    return (
      <div>
        <Header uploadFile={this.uploadFile} fileName={fileName}/>
        <main>
          <Charts exelObject={exelObject} />
        </main>
      </div>
    );
  }
}
