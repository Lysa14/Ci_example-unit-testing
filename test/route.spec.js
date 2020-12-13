"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("../src/server");
require("mocha");
var chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);
var expect = chai.expect;
describe('Test p1', function () {
    it('Simple test', function () {
        return chai.request(app).get('/api/p1/salut/1').then(function (res) {
            expect(res.body).to.eql({ statusCode: 200, result: '5' });
        });
    });
    it('Division str', function () {
        return chai.request(app).get('/api/p1/coucou/3').then(function (res) {
            expect(res.body).to.eql({ statusCode: 200, result: '2' });
        });
    });
    it('Other test', function () {
        return chai.request(app).get('/api/p1/other_result/3').then(function (res) {
            expect(res.body).to.eql({ statusCode: 200, result: '4' });
        });
    });
    it('Float test', function () {
        return chai.request(app).get('/api/p1/floatresult/3').then(function (res) {
            expect(res.body).to.eql({ statusCode: 200, result: '3.6666666666666665' });
        });
    });
    it('Divid by zero', function () {
        return chai.request(app).get('/api/p1/floatresult/0').then(function (res) {
            expect(res.body).to.eql({ statusCode: 200, result: '0' });
        });
    });
    it('Negative number', function () {
        return chai.request(app).get('/api/p1/floatresult/-3').then(function (res) {
            expect(res.body).to.eql({ status: "error", statusCode: 501, message: "nbr must be between 0 and 20" });
        });
    });
    it('Too big number', function () {
        return chai.request(app).get('/api/p1/floatresult/33').then(function (res) {
            expect(res.body).to.eql({ status: "error", statusCode: 501, message: "nbr must be between 0 and 20" });
        });
    });
});
describe('Test p2 date start', function () {
    it('Simple test', function () {
        return chai.request(app).get('/api/p2/2020-06-10').then(function (res) {
            expect(res.body).to.eql({ "statusCode": 200, "date_start": { "result": 9 } });
        });
    });
    it('Test 0 day', function () {
        return chai.request(app).get('/api/p2/2020-06-01').then(function (res) {
            expect(res.body).to.eql({ "statusCode": 200, "date_start": { "result": 0 } });
        });
    });
    it('Test max day', function () {
        return chai.request(app).get('/api/p2/2020-12-31').then(function (res) {
            expect(res.body).to.eql({ "statusCode": 200, "date_start": { "result": 30 } });
        });
    });
    it('Test error data', function () {
        return chai.request(app).get('/api/p2/2020-016-01').then(function (res) {
            expect(res.body).to.eql({ statusCode: 200, date_start: { status: "error", message: "Date format is not respected: mm-dd-yyyy" } });
        });
    });
});
describe('Test p2 date end', function () {
    it('Simple test', function () {
        return chai.request(app).get('/api/p2/2020-06-10/2020-07-25').then(function (res) {
            expect(res.body).to.eql({ "statusCode": 200, "date_start": { "result": 9 }, "date_end": { "result": 6 } });
        });
    });
    it('Test 0 day', function () {
        return chai.request(app).get('/api/p2/2020-06-01/2020-07-31').then(function (res) {
            expect(res.body).to.eql({ "statusCode": 200, "date_start": { "result": 0 }, "date_end": { "result": 0 } });
        });
    });
    it('Test max day', function () {
        return chai.request(app).get('/api/p2/2020-12-31/2020-07-01').then(function (res) {
            expect(res.body).to.eql({ "statusCode": 200, "date_start": { "result": 30 }, "date_end": { "result": 30 } });
        });
    });
    it('Test possible bug', function () {
        return chai.request(app).get('/api/p2/2020-016-01/2020-12-20').then(function (res) {
            expect(res.body).to.eql({ statusCode: 200, date_start: { status: "error", message: "Date format is not respected: mm-dd-yyyy" }, "date_end": { "result": 11 } });
        });
    });
});
