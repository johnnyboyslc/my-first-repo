function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':                   //because there is no break statement here, it will continue to all the other cases.
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');  
  }
}

barCodeScanner('113');