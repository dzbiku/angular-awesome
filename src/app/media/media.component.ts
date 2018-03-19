import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {

  constructor() { }

  // getFoldersList(){
  //   const testFolder = '../../';
  //   const fs = require('fs');

  //   fs.readdir(testFolder, (err, files) => {
  //     files.forEach(file => {
  //       console.log(file);
  //     });
  //   })
  // };

  getFolderList2() {
    // var fs = require('fs');
    // fs.readdir('.', function (err, files) {
    //   console.log(files);
    // });
    var http = require('http');
    var uc = require('upper-case');
    http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(uc("Hello World!"));
      res.end();
    }).listen(8080);
    //alert("ATATATATATAAT");
  };
  ngOnInit() {
  }

}
