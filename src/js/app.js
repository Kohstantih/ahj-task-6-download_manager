import FileDownloader from './FileDownloader';
import objStorage from './URLstoragestandart';
import objStreams from './URLstreamsstandard';
import objXML from './URLxmlstandart';

const container = document.querySelector('.container');
const list = [objStorage, objStreams, objXML];

const fileDownloader = new FileDownloader(container, list);

fileDownloader.rendering();
