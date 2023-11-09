export default class FileDownloader {
  constructor(container, list) {
    this.container = container;
    this.list = list;

    this.fileList = this.container.querySelector('.file_list');
    this.count = this.container.querySelector('.count');
  }

  rendering() {
    this.list.forEach((el) => {
      const fileBox = this.createBox(el);
      this.fileList.append(fileBox);
    });
  }

  createBox(obj) {
    const box = document.createElement('div');
    box.classList.add('file_box');

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = obj.nameFile;

    const itemWeight = document.createElement('div');
    itemWeight.classList.add('item-weight');
    itemWeight.textContent = obj.weight;

    const itemDownload = document.createElement('a');
    itemDownload.classList.add('item-download');
    itemDownload.textContent = 'Download';
    itemDownload.href = obj.url;
    itemDownload.rel = 'noopener';
    itemDownload.download = obj.nameFile;

    itemDownload.addEventListener('click', () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', itemDownload.href);
      xhr.addEventListener('load', (event) => {
        this.count.textContent = +this.count.textContent + Math.round(event.total / 1000);
      });
      xhr.send();
    });

    box.append(itemName);
    box.append(itemWeight);
    box.append(itemDownload);

    return box;
  }
}
