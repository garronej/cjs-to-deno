
import "../lib";
import { ParallelHasher } from 'ts-md5/dist/parallel_hasher';

let hasher = new ParallelHasher('/path/to/ts-md5/dist/md5_worker.js');

hasher.hash("fooBarBaz").then(function (result) {
    console.log('md5 of fileBlob is', result);
});