'use strict';

var expect = require('expect.js');
var app = require('../server/server.js');
var request = require('supertest');
var should = require("should");

// Started defining route Paths for API
var testUrl = "";
var baseUrl = "http://localhost:3000/api/posts";


describe('Blog API Test Suit', function(){
  
  before(function(done){
    testUrl = baseUrl + "?access_token=DC8RVDllbuZLphWTzzluBVVWN6ln2rIZqqjCACL2bBd5FvN4JzLItFAyjYKOjsUZ"
    this.timeout(30000);
      //app.then(function(){
          done();
      //});
  });

  beforeEach(function(done){
    done();
  });

  it("Blog Posts - Read all posts", function(done){
    this.timeout(30000);
    request(testUrl)
      .get("")
      .expect(200)
      .end(function(err, res){
        expect(res.body).to.be.an("array");
        res.body[0].should.have.property('id');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('content');
        done();
      }); 
  });

  it("Blog Posts - Delete post Authorized request", function(done){
    this.timeout(30000);
    request(baseUrl)
      .delete("/57f8f963993f073b2a439f38"+"?access_token=DC8RVDllbuZLphWTzzluBVVWN6ln2rIZqqjCACL2bBd5FvN4JzLItFAyjYKOjsUZ")
      .expect(200)
      .end(function(err, res){
        expect(res.body).to.be.an("object");
        res.body.should.have.property('count');
        res.body.count.should.equal(1);
        done();
      }); 
  });
  
  it("Blog Posts - Create posts Authorized request", function(done){
    this.timeout(30000);
    request(testUrl)
      .post("")
      .send({"name": "Python","content": "i learn from tutorials point","createdAt": "2016-10-08T00:00:00.000Z","id": "57f8f963993f073b2a439f38"})
      .expect(200)
      .end(function(err, res){
        expect(res.body).to.be.an("object");
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('content');
        done();
      }); 
  });

  it("Blog Posts - Update posts Authorized request", function(done){
    this.timeout(30000);
    request(testUrl)
      .patch("")
      .send({"name": "Python","content": "i learned from tutorials point","createdAt": "2016-10-08T00:00:00.000Z","id": "57f8f963993f073b2a439f38"})
      .expect(200)
      .end(function(err, res){
        expect(res.body).to.be.an("object");
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('content');
        done();
      }); 
  });
});
