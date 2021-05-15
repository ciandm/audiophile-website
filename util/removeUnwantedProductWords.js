function removeUnwantedProductWords(productName, preventChange = false) {
  // preventChange helps to exit the function when no changes should be made.
  if (preventChange) return productName;
  const wordsToRemove = ['Speaker', 'Headphones', 'Earphones'];
  const foundWord = wordsToRemove.find(word => productName.includes(word));
  return foundWord ? productName.replace(foundWord, '') : productName;
}

export default removeUnwantedProductWords;
